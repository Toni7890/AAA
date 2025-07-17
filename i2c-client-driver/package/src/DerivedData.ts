import * as Processor from "@microchip/scf-common/lib/Processor";
import * as i2c_client_basic from "@microchip/i2c-client-basic";
import {
    getCFunctionValidator,
    PatternValidator,
    HexValidator,
    getHexValidator,
} from "@microchip/scf-validators/lib";
import {
    AppModel,
    DerivedData,
    DerivedFunctions,
} from "../generated_module/src/types/AutoModuleTypes";
import { MyImports } from "../generated_module/src/types";
import { Help } from "@microchip/scf-common/lib/PackageJsonConfiguration";
import { ExportArg } from "@microchip/melody-automodule-interface/lib/src/InterfaceTypes";
import * as i2c_client_basic_drv from "@microchip/i2c-client-basic-drv-interface";

const I2C_CLIENT_BASIC = "i2c_client_basic";
const I2C_CLIENT_BASIC_DRV_INTF = "i2c-client-basic-drv-interface";
const CUSTOM_NAME_COMPONENT = "customName";
const CLOCK_STRETCHING_COMPONENT = "clockStretching";
const CLIENT_ADDRESS_COMPONENT = "clientAddress";
const CLIENT_MASK_COMPONENT = "clientMask";

export const getDerivedData = (dataModel: AppModel): DerivedData => {
    if (dataModel) {
        return new MyDerivedData(dataModel);
    }
    return new EmptyDerivedData();
};

//This data will be used at the creator stage and relies on only the state
class EmptyDerivedData implements DerivedData {
    getMyFunctions = (): DerivedFunctions => {
        return {};
    };
    getModel = (): AppModel | undefined => {
        return undefined;
    };
}

//This data will be used at the processor stage
class MyDerivedData implements DerivedData {
    private dataModel: AppModel;
    private cValidator: PatternValidator = getCFunctionValidator();

    constructor(dataModel: AppModel) {
        this.dataModel = dataModel;
    }

    getMyFunctions = (): DerivedFunctions => {
        return {
            moduleName: this.getModuleName,
            templateData: this.getMyTemplateData,
            alerts: this.getMyAlerts,
            getActiveName: this.getActiveName,
            getCustomUiErrors: this.getCustomUiErrors,
            importName: this.friendlyImportName,
            filterImports: this.filterMyImports,
            importOptionLabel: this.friendlyImportOptionLabels,
            customNameValidator: this.customNameValidator,
            clientAddressValidator: this.clientAddressValidator,
            clientMaskValidator: this.clientMaskValidator,
            i2c_client_basic_args: this.getArguments,
            i2c_client_basic_results: this.getResults,
            overrideDefaultValues: this.overrideDefaultValue,
            isEnabled: this.isEnabled,
            overrideModuleLevelHelp: this.overrideModuleLevelHelp,
            getUiBehavior: this.getUiBehavior,
            "i2c-client-basic-drv-interface_payload": this.getI2cClientDrvPayload,
        };
    };

    public getI2cClientDrvPayload = (): i2c_client_basic_drv.Payload | undefined => {
        const interfaceData = this.dataModel.getImportValue("i2c_client_basic");
        if (interfaceData != undefined) {
            return {
                ...interfaceData,
                customName: this.dataModel.getComponentValue("customName"),
            };
        }
    };

    public getUiBehavior = (component: string): any => {
        let uiBehavior = {};
        if (this.getRequestedArg(component, I2C_CLIENT_BASIC_DRV_INTF)) {
            switch (component) {
                case CUSTOM_NAME_COMPONENT:
                case CLIENT_ADDRESS_COMPONENT:
                case CLIENT_MASK_COMPONENT:
                    uiBehavior = {
                        ["ui:help"]: this.getUiBehaviorStrField(component),
                    };
                    break;
                case CLOCK_STRETCHING_COMPONENT: {
                    uiBehavior = {
                        ["ui:help"]: this.getUiBehaviorBooleanField(component),
                    };
                    break;
                }
                default:
                    break;
            }
        }
        return uiBehavior;
    };
    public getUiBehaviorStrField = (component: string): string => {
        let reqField = this.getRequestedArg(component, I2C_CLIENT_BASIC_DRV_INTF)?.value;
        if (component != CUSTOM_NAME_COMPONENT) {
            reqField = "0x" + reqField.toString(16);
        }
        const setField = this.dataModel.getComponentValue(component);

        if (reqField != undefined && setField != undefined && reqField != setField) {
            return (
                "Configure field to " +
                reqField +
                " to match with value requested by dependent module"
            );
        }
        return "Field is being set by dependent module, any updates will override preconfigured value";
    };

    public getUiBehaviorBooleanField = (component: string): string => {
        const reqField = this.getRequestedArg(
            component,
            I2C_CLIENT_BASIC_DRV_INTF,
        )?.value;
        const setField = this.dataModel.getComponentValue(component);
        if (reqField != undefined && setField != undefined && reqField != setField) {
            let strType = "Enable";
            if (reqField == false) {
                strType = "Disable";
            }
            return (
                strType + " field to" + " match with value requested by dependent module"
            );
        }
        return "Field is being set by dependent module, any updates will override preconfigured value";
    };

    private getRequestedArg = (
        componentName: string,
        interfaceName: string,
    ): ExportArg | undefined => {
        const exportData = this.dataModel?.getExportInterfaces()?.getInterfaceData();
        if (exportData != undefined) {
            for (let i = 0; i < exportData.length; i++)
                if (
                    exportData[i].interface === interfaceName &&
                    exportData[i].name === componentName
                ) {
                    return exportData[i];
                }
        }
        return undefined;
    };

    private overrideModuleLevelHelp = (): Help => {
        const deviceMeta = this.dataModel.getImportValue("device_meta");
        const deviceName = deviceMeta?.architecture;
        let url = "";
        let tooltip = "";

        if (deviceName === "PIC16" || deviceName === "PIC18") {
            url =
                "v2/keyword-lookup?keyword=SCF-PIC8-I2C-CLIENT&version=latest&redirect=true";
            tooltip = "I2C Client Driver for 8-bit PIC devices";
        } else if (deviceName === "AVR8" || deviceName === "AVR8X") {
            url =
                "v2/keyword-lookup?keyword=SCF-AVR8-I2C-CLIENT&version=latest&redirect=true";
            tooltip = "I2C Client Driver for 8-bit AVR devices";
        } else if (deviceName === "DSPIC33A") {
            url =
                "v2/keyword-lookup?keyword=I2C_CLIENT_33A_MELODY_DRIVER&version=latest&redirect=true";
            tooltip = "Click here to open I2C API documentation.";
        } else if (deviceName === undefined) {
            url = "";
            tooltip = "Load I2C Client Driver to view help.";
        } else {
            url =
                "v2/keyword-lookup?keyword=I2C_Client_Melody_Driver&version=latest&redirect=true";
            tooltip = "I2C Client driver for 16-bit PIC and dsPIC devices";
        }

        return {
            url: url,
            tooltip: tooltip,
        };
    };

    private isEnabled = (componentName: string): boolean | undefined => {
        const processedPayloadVal: i2c_client_basic.ProcessedPayload =
            this.dataModel.getImportValue(I2C_CLIENT_BASIC);
        let enableStatus: boolean | undefined = false;
        switch (componentName) {
            case "clockStretching":
                if (processedPayloadVal) {
                    if (processedPayloadVal.isClockStrechAlwaysEnabled) {
                        enableStatus = !processedPayloadVal.isClockStrechAlwaysEnabled;
                    } else {
                        enableStatus = true;
                    }
                } else {
                    enableStatus = true;
                }
                break;
            default:
                enableStatus = undefined;
                break;
        }
        return enableStatus;
    };

    private clientAddressValidator = (): any => {
        const processedPayloadVal: i2c_client_basic.ProcessedPayload =
            this.dataModel.getImportValue(I2C_CLIENT_BASIC);
        return {
            maximum: processedPayloadVal?.maxClientAddress ?? 0x3ff,
            minimum: processedPayloadVal?.minClientAddress ?? 0x00,
        };
    };

    private clientMaskValidator = (): any => {
        const processedPayloadVal: i2c_client_basic.ProcessedPayload =
            this.dataModel.getImportValue(I2C_CLIENT_BASIC);
        return {
            maximum: processedPayloadVal?.maxClientMask ?? 0x3ff,
            minimum: 0x00,
        };
    };

    private overrideDefaultValue = (componentName: string): any => {
        let processedPayloadVal;
        switch (componentName) {
            case CUSTOM_NAME_COMPONENT:
                {
                    const customName = this.getRequestedArg(
                        "customName",
                        I2C_CLIENT_BASIC_DRV_INTF,
                    )?.value;
                    if (customName != undefined) {
                        return customName;
                    } else {
                        processedPayloadVal =
                            this.dataModel.getImportValue(I2C_CLIENT_BASIC);
                        if (processedPayloadVal?.moduleInstance != undefined) {
                            return "I2C" + processedPayloadVal.moduleInstance + "_Client";
                        }
                    }
                }
                break;
            case CLOCK_STRETCHING_COMPONENT:
                return this.getRequestedArg("clockStretching", I2C_CLIENT_BASIC_DRV_INTF)
                    ?.value;
            case CLIENT_ADDRESS_COMPONENT:
                return this.getRequestedArg("clientAddress", I2C_CLIENT_BASIC_DRV_INTF)
                    ?.value;
            case CLIENT_MASK_COMPONENT:
                {
                    const requestedClientMask = this.getRequestedArg(
                        "clientMask",
                        I2C_CLIENT_BASIC_DRV_INTF,
                    )?.value;
                    if (requestedClientMask !== undefined) {
                        return requestedClientMask;
                    } else {
                        processedPayloadVal =
                            this.dataModel.getImportValue(I2C_CLIENT_BASIC);
                        if (processedPayloadVal?.clientMask != undefined) {
                            return processedPayloadVal.clientMask;
                        }
                    }
                }
                break;
            default:
                break;
        }
        return undefined;
    };

    public getModuleName = (): string | undefined => {
        return this.dataModel?.getComponentValue("customName");
    };

    private getActiveName = (): string | undefined => {
        const processedPayloadVal: i2c_client_basic.ProcessedPayload =
            this.dataModel.getImportValue(I2C_CLIENT_BASIC);
        if (processedPayloadVal?.moduleName) {
            return this.dataModel?.getComponentValue("customName");
        }
        return this.dataModel?.getComponentValue("customName") + " (None)";
    };

    private customNameValidator = (): any => {
        return {
            pattern: this.cValidator.getRjsfValidation().pattern,
        };
    };

    private getCustomUiErrors = (componentName: string): Error[] | undefined => {
        const hexValidator: HexValidator = getHexValidator();
        const processedPayloadVal: i2c_client_basic.ProcessedPayload =
            this.dataModel.getImportValue(I2C_CLIENT_BASIC);

        switch (componentName) {
            case "customName":
                return [
                    {
                        name: "pattern",
                        message: this.cValidator.getCustomErrorMessage(),
                    },
                ];

            case "clientMask":
                return [
                    hexValidator.getMinValidation(">=", "0x0"),
                    hexValidator.getMaxValidation(
                        "less than",
                        processedPayloadVal?.maxClientMask?.toString() ?? "0x3FF",
                    ),
                    hexValidator.getFormatValidation(),
                ];
            case "clientAddress":
                return [
                    hexValidator.getMinValidation(
                        ">=",
                        processedPayloadVal?.minClientAddress?.toString() ?? "0x0",
                    ),
                    hexValidator.getMaxValidation(
                        "less than",
                        processedPayloadVal?.maxClientAddress?.toString() ?? "0x3FF",
                    ),
                    hexValidator.getFormatValidation(),
                ];
            default:
                return undefined;
        }
    };

    private filterMyImports = (imports: MyImports): MyImports => {
        const filteredImports: MyImports = this.dataModel?.filterImportBySetting(
            imports,
            I2C_CLIENT_BASIC,
            (option: Processor.Option<any>): boolean => {
                return true;
            },
        );
        if (filteredImports?.i2c_client_basic?.options) {
            filteredImports.i2c_client_basic.options.sort(
                (importOption1, importOption2) =>
                    importOption1.payload.moduleInstance >
                    importOption2.payload.moduleInstance
                        ? 1
                        : -1,
            );
        }
        return filteredImports;
    };

    private friendlyImportName = (importKey: string): string | undefined => {
        if (importKey === I2C_CLIENT_BASIC) {
            return "I2C Client";
        }
        return undefined;
    };

    private friendlyImportOptionLabels = (
        importKey: string,
        option: Processor.Option,
    ): string => {
        if (importKey === I2C_CLIENT_BASIC && option?.payload?.moduleName) {
            return option.payload.moduleName;
        }
        return "I2C";
    };

    private getArguments = (): i2c_client_basic.Arguments => {
        return {
            clockStretching: this.dataModel?.getComponentValue("clockStretching"),
            clientAddress: this.dataModel?.getComponentValue("clientAddress"),
            clientMask:
                this.dataModel?.getState()?.main?.software?.clientMask ??
                this.getRequestedArg("clientMask", I2C_CLIENT_BASIC_DRV_INTF)?.value,
            interruptDriven: this.getRequestedArg(
                "interruptDriven",
                I2C_CLIENT_BASIC_DRV_INTF,
            )?.value,
            getInterfaceAPI: this.getRequestedArg(
                "getInterfaceAPI",
                I2C_CLIENT_BASIC_DRV_INTF,
            )?.value,
            i2cClientCallbackEvent: this.getRequestedArg(
                "i2cClientCallbackEvent",
                I2C_CLIENT_BASIC_DRV_INTF,
            )?.value,
        };
    };

    private getResults = (): i2c_client_basic.Results => {
        return {
            customName: this.dataModel?.getComponentValue("customName"),
            plibRequests: this.getPlibRequestsFromI2cClientDrvIntf(),
        };
    };
    private getPlibRequestsFromI2cClientDrvIntf = ():
        | i2c_client_basic_drv.results
        | undefined => {
        const resultsMap = this.dataModel
            ?.getExportInterfaces()
            ?.getInterface(
                "i2c_client_basic_drv_interface",
                i2c_client_basic_drv.Interface.getInterfaceId(),
            )?.results;

        if (resultsMap != undefined) {
            for (const moduleId in resultsMap) {
                const plibRequest = resultsMap[moduleId]?.plibRequests;
                if (plibRequest) {
                    return plibRequest;
                }
            }
        }
        return undefined;
    };
    public getModel = (): AppModel => {
        return this.dataModel;
    };

    private getMyTemplateData = (): any => {
        return {};
    };

    private getMyAlerts = (): Processor.Alert[] => {
        return [];
    };
}

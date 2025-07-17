import {
    i2c_client_basic,
    i2c_client_basic_drv_interface_interface,
} from "../generated_module/src/types";
import { MyModule, MyState } from "../generated_module/src/types/AutoModuleTypes";
import { getModel, mockState } from "../generated_module/tests/AppModel.test";
import {
    mockAssignedModule,
    mockUnassignedModule,
} from "../generated_module/tests/processor.test";
import { getDerivedData } from "./DerivedData";
import * as Processor from "@microchip/scf-common/lib/Processor";

/**
 * @function createMyModule
 * @description This function is used to create module
 * @param {MyState} state result from mockState() or a custom object that can be converted into a MyState
 * @returns MyModule
 *
 * @example
 * // Example: Create a test model that contains a broken uart_basic import payload
 * // -----------------------------------------------------------------------------
 * // Create your test state object
 * const DefaultState: MyState = mockState(false);
 *
 * // Create the module using the function
 * const DefaultModule = createMyModule(DefaultState);
 *
 * // Change the default module data by overriding the data structure
 * const CustomDefaultModule = {
 * ...DefaultModule,
 *     imports: {
 *         ...DefaultModule.imports,
 *         uart_basic: {
 *                  ...DefaultModule.imports.uart_basic,
 *                  payload: undefined
 *             },
 *         },
 *     };
 *
 * // lastly, create a new model from that module data object.
 * const BootloaderDefaultModel = getModel(CustomDefaultModule, getDerivedData);
 *
 */
const createMyModule = (state?: MyState): MyModule => {
    if (state) {
        return mockAssignedModule(state);
    } else {
        return mockUnassignedModule();
    }
};

describe("@microchip/i2c-client-driver", () => {
    describe("DerivedData.ts Unit Tests", () => {
        describe("Tests for function getDerivedData", () => {
            it("getDerivedData function can handle an undefined state", () => {
                const app: any = undefined;
                expect(getDerivedData(app).getMyFunctions()).toEqual({});
                expect(getDerivedData(app).getModel()).toBeUndefined();
            });
        });
        describe("Tests for function getImports", () => {
            it("getImports function will return correct i2c basic interface info", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports.i2c_client_basic,
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);
                expect(
                    DefaultClientModule?.getImports()?.i2c_client_basic?.interfaceId.name,
                ).toEqual("i2c-client-basic");
                expect(
                    DefaultClientModule?.getImports()?.i2c_client_basic?.interfaceId
                        .version,
                ).toEqual("3.0.0");
            });
        });

        describe("Tests for function moduleName", () => {
            it("moduleName function will return the default name when no cname is given", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(testDerivedData?.getMyFunctions()?.moduleName?.()).toBe(
                    "I2C_Client",
                );
            });
            it("moduleName function will return the custom name when a cname is given", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    state: {
                        ...DefaultModule.state,
                        main: {
                            ...DefaultModule.state?.main,
                            software: {
                                ...DefaultModule.state?.main?.software,
                                customName: "SERCOM",
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(testDerivedData?.getMyFunctions()?.moduleName?.()).toBe("SERCOM");
            });
        });

        describe("Tests for function getCustomUiErrors", () => {
            it("getCustomUiErrors function will work when the imported payload fails", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports.i2c_client_basic,
                            payload: undefined,
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.getCustomUiErrors?.("clientMask"),
                ).toEqual([
                    {
                        message: "Input must be >= 0x0",
                        name: "minimum",
                    },
                    {
                        message: "Input must be less than 0x3FF",
                        name: "maximum",
                    },
                    {
                        message: "Must be valid hexadecimal number",
                        name: "format",
                    },
                ]);
                expect(
                    testDerivedData
                        ?.getMyFunctions()
                        ?.getCustomUiErrors?.("clientAddress"),
                ).toEqual([
                    {
                        message: "Input must be >= 0x0",
                        name: "minimum",
                    },
                    {
                        message: "Input must be less than 0x3FF",
                        name: "maximum",
                    },
                    {
                        message: "Must be valid hexadecimal number",
                        name: "format",
                    },
                ]);
            });
        });

        describe("Tests for function importName", () => {
            it("importName function will return the default importFriendly name", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.importName?.("i2c_client_basic"),
                ).toBe("I2C Client");
            });
        });

        describe("Tests for function isEnabled ", () => {
            it("isEnabled function will return default settings for the sliders when import fails", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                let CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports.i2c_client_basic,
                            payload: {
                                ...DefaultModule.imports.i2c_client_basic.payload,
                                maxClientAddress: undefined,
                                minClientAddress: undefined,
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                let DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                let testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.isEnabled?.("clockStretching"),
                ).toEqual(false);

                // Change the default module data by overriding the data structure
                CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports.i2c_client_basic,
                            payload: undefined,
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.isEnabled?.("clockStretching"),
                ).toEqual(true);

                // Change the default module data by overriding the data structure
                CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports.i2c_client_basic,
                            payload: {
                                ...DefaultModule.imports.i2c_client_basic.payload,
                                isClockStrechAlwaysEnabled: undefined,
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.isEnabled?.("clockStretching"),
                ).toEqual(true);
            });
        });

        describe("Tests for function clientAddressValidator", () => {
            it("clientAddressValidator function will return defaults when import fails", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports.i2c_client_basic,
                            payload: {
                                ...DefaultModule.imports.i2c_client_basic.payload,
                                maxClientAddress: undefined,
                                minClientAddress: undefined,
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.clientAddressValidator?.(),
                ).toEqual({
                    maximum: 0x3ff,
                    minimum: 0x00,
                });
            });
        });

        describe("Tests for function clientMaskValidator", () => {
            it("clientMaskValidator function will return defaults when import fails", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports.i2c_client_basic,
                            payload: {
                                ...DefaultModule.imports.i2c_client_basic.payload,
                                maxClientMask: undefined,
                                minClientMask: undefined,
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.clientMaskValidator?.(),
                ).toEqual({
                    maximum: 0x3ff,
                    minimum: 0x00,
                });
            });
        });

        describe("Tests for function overrideModuleLevelHelp ", () => {
            it("overrideModuleLevelHelp PIC16 test", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        device_meta: {
                            ...DefaultModule.imports.device_meta,
                            payload: {
                                ...DefaultModule.imports.device_meta.payload,
                                architecture: "PIC16",
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.overrideModuleLevelHelp?.(),
                ).toEqual({
                    url: "v2/keyword-lookup?keyword=SCF-PIC8-I2C-CLIENT&version=latest&redirect=true",
                    tooltip: "I2C Client Driver for 8-bit PIC devices",
                });
            });

            it("overrideModuleLevelHelp AVR test", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        device_meta: {
                            ...DefaultModule.imports.device_meta,
                            payload: {
                                ...DefaultModule.imports.device_meta.payload,
                                architecture: "AVR8",
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.overrideModuleLevelHelp?.(),
                ).toEqual({
                    url: "v2/keyword-lookup?keyword=SCF-AVR8-I2C-CLIENT&version=latest&redirect=true",
                    tooltip: "I2C Client Driver for 8-bit AVR devices",
                });
            });

            it("overrideModuleLevelHelp dsPIC33 test", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        device_meta: {
                            ...DefaultModule.imports.device_meta,
                            payload: {
                                ...DefaultModule.imports.device_meta.payload,
                                architecture: "DSPIC33A",
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.overrideModuleLevelHelp?.(),
                ).toEqual({
                    url: "v2/keyword-lookup?keyword=I2C_CLIENT_33A_MELODY_DRIVER&version=latest&redirect=true",
                    tooltip: "Click here to open I2C API documentation.",
                });
            });

            it("overrideModuleLevelHelp other 16-bit PICs test", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        device_meta: {
                            ...DefaultModule.imports.device_meta,
                            payload: {
                                ...DefaultModule.imports.device_meta.payload,
                                architecture: "PIC24",
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.overrideModuleLevelHelp?.(),
                ).toEqual({
                    url: "v2/keyword-lookup?keyword=I2C_Client_Melody_Driver&version=latest&redirect=true",
                    tooltip: "I2C Client driver for 16-bit PIC and dsPIC devices",
                });
            });
        });

        describe("Tests for function i2c-client-basic-drv-interface_payload", () => {
            it("i2c-client-basic-drv-interface_payload function will be undefined when the payload is not present", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports?.i2c_client_basic,
                            payload: undefined,
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData
                        ?.getMyFunctions()
                        ?.["i2c-client-basic-drv-interface_payload"]?.(),
                ).toBeUndefined();
            });

            it("i2c-client-basic-drv-interface_payload function will be defined when a valid payload is present", () => {
                const i2cMockPayload = i2c_client_basic.Interface.createMock();

                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                let CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports?.i2c_client_basic,
                            payload: i2cMockPayload,
                            customName: "SERCOM",
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                let DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                let testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData
                        ?.getMyFunctions()
                        ?.["i2c-client-basic-drv-interface_payload"]?.(),
                ).toBeDefined();

                // Change the default module data by overriding the data structure
                CustomDefaultModule = {
                    ...DefaultModule,
                    state: {
                        ...DefaultModule.state,
                        main: {
                            ...DefaultModule.state?.main,
                            software: {
                                ...DefaultModule.state?.main?.software,
                                customName: undefined,
                            },
                        },
                    },
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports?.i2c_client_basic,
                            payload: i2cMockPayload,
                            customName: "SERCOM",
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData
                        ?.getMyFunctions()
                        ?.["i2c-client-basic-drv-interface_payload"]?.(),
                ).toBeDefined();
            });
        });

        describe("Tests for function getUiBehavior", () => {
            it("getUiBehavior function will return nothing when no arguments are given", () => {
                const i2cMockPayload = i2c_client_basic.Interface.createMock();

                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const testExports = [
                    {
                        interfaceId: {
                            name: "i2c-client-basic-drv-interface",
                            version: "1.0.0",
                        },
                        args: {
                            module1234: {
                                clientMask: 0,
                                customName: "SERCOM",
                                clientAddress: 60,
                                clockStretching: true,
                                random: "No Meaningful Data",
                            },
                        },
                    },
                ] as [i2c_client_basic_drv_interface_interface];
                const CustomDefaultModule = {
                    ...DefaultModule,
                    exports: {
                        ...DefaultModule.exports,
                        i2c_client_basic_drv_interface: {
                            ...DefaultModule.exports.i2c_client_basic_drv_interface,
                            interfaces: testExports,
                        },
                    },
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports?.i2c_client_basic,
                            payload: i2cMockPayload,
                            customName: "SERCOM",
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.getUiBehavior?.("clientMask"),
                ).toEqual({
                    "ui:help":
                        "Field is being set by dependent module, any updates will override preconfigured value",
                });
                expect(
                    testDerivedData?.getMyFunctions()?.getUiBehavior?.("clientAddress"),
                ).toEqual({
                    "ui:help":
                        "Configure field to 0x3c to match with value requested by dependent module",
                });
                expect(
                    testDerivedData?.getMyFunctions()?.getUiBehavior?.("clockStretching"),
                ).toEqual({
                    "ui:help":
                        "Enable field to match with value requested by dependent module",
                });
                expect(
                    testDerivedData?.getMyFunctions()?.getUiBehavior?.("customName"),
                ).toEqual({
                    "ui:help":
                        "Configure field to SERCOM to match with value requested by dependent module",
                });
                expect(
                    testDerivedData?.getMyFunctions()?.getUiBehavior?.("random"),
                ).toEqual({});
            });
        });

        // TODO: Test the getRequestedArg logic
        describe("Tests for function overrideDefaultValues", () => {
            it("overrideDefaultValues function will return the module instance when no arguments are given", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports?.i2c_client_basic,
                            payload: undefined,
                            customName: "SERCOM",
                        },
                    },
                    state: {
                        ...DefaultModule.state,
                        main: {
                            ...DefaultModule.state?.main,
                            software: {
                                ...DefaultModule.state?.main?.software,
                                customName: "SERCOM",
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData
                        ?.getMyFunctions()
                        ?.overrideDefaultValues?.("customName"),
                ).toBe(undefined);
                expect(
                    testDerivedData
                        ?.getMyFunctions()
                        ?.overrideDefaultValues?.("clientMask"),
                ).toBe(undefined);
                expect(
                    testDerivedData?.getMyFunctions()?.overrideDefaultValues?.(""),
                ).toBe(undefined);
            });
        });

        describe("Tests for function getActiveName", () => {
            it("getActiveName function will work with a Cname", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    state: {
                        ...DefaultModule.state,
                        main: {
                            ...DefaultModule.state?.main,
                            software: {
                                ...DefaultModule.state?.main?.software,
                                customName: "SERCOM",
                                clockStretching: true,
                                clientAddress: 0x3c,
                                clientMask: 0x7f,
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(testDerivedData?.getMyFunctions()?.getActiveName?.()).toBe(
                    "SERCOM",
                );

                const CorruptDefaultModule = {
                    ...DefaultModule,
                    state: {
                        ...DefaultModule.state,
                        main: {
                            ...DefaultModule.state?.main,
                            software: {
                                ...DefaultModule.state?.main?.software,
                                customName: "SERCOM",
                                clockStretching: true,
                                clientAddress: 0x3c,
                                clientMask: 0x7f,
                            },
                        },
                    },
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports.i2c_client_basic,
                            payload: undefined,
                        },
                    },
                };

                const CorruptDefaultClientModule = getModel(
                    CorruptDefaultModule,
                    getDerivedData,
                );

                const testCorruptDerivedData =
                    CorruptDefaultClientModule?.getDerivedData();
                expect(testCorruptDerivedData?.getMyFunctions()?.getActiveName?.()).toBe(
                    "SERCOM (None)",
                );
            });
        });

        describe("Tests for function getModel", () => {
            it("getModel function will return a defined payload when a proper state is present.", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports.i2c_client_basic,
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(testDerivedData?.getModel()).toBeDefined();
            });
        });

        describe("Tests for function i2c_client_basic_args", () => {
            it("i2c_client_basic_args function works to set the imported arguments.", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    state: {
                        ...DefaultModule.state,
                        main: {
                            ...DefaultModule.state?.main,
                            software: {
                                ...DefaultModule.state?.main?.software,
                                clockStretching: true,
                                clientAddress: 0x3c,
                                clientMask: 0x7f,
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.i2c_client_basic_args()
                        ?.clientMask,
                ).toBe(0x7f);
                expect(
                    testDerivedData?.getMyFunctions()?.i2c_client_basic_args()
                        ?.clientAddress,
                ).toBe(0x3c);
            });

            it("i2c_client_basic_args function returns undefined for the imported arguments that are not defined.", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    state: undefined,
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.i2c_client_basic_args()
                        ?.clientMask,
                ).toBeUndefined();
                expect(
                    testDerivedData?.getMyFunctions()?.i2c_client_basic_args()
                        ?.clientAddress,
                ).toBe(0x00);
            });
        });

        describe("Tests for function i2c_client_basic_results", () => {
            it("i2c_client_basic_results function works to set the results of the PLIB.", () => {
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    state: {
                        ...DefaultModule.state,
                        main: {
                            ...DefaultModule.state?.main,
                            software: {
                                ...DefaultModule.state?.main?.software,
                                customName: "SERCOM",
                                clockStretching: true,
                                clientAddress: 0x3c,
                                clientMask: 0x7f,
                            },
                        },
                    },
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.i2c_client_basic_results()
                        ?.customName,
                ).toBe("SERCOM");
            });
        });

        describe("Tests for function importOptionLabel", () => {
            it("importOptionLabel function works to set the imported i2c name.", () => {
                const testI2COption1: Processor.Option<any, any, any> = {
                    handle: {
                        providerId: "module16",
                        exportId: "i2c_basic",
                        label: "MSSP2",
                    },
                    name: "I2C Client",
                    interfaceId: {
                        name: "i2c-client-basic",
                        version: ">= 2.0.0 < 4.0.0",
                    },
                    payload: {
                        customName: "SERCOM",
                        moduleName: "MSSP2",
                    },
                };
                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                };

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData
                        ?.getMyFunctions()
                        ?.importOptionLabel?.(
                            "i2c_client_basic",
                            {} as Processor.Option<any, any, any>,
                        ),
                ).toBe("I2C");
                expect(
                    testDerivedData
                        ?.getMyFunctions()
                        ?.importOptionLabel?.("i2c_client_basic", testI2COption1),
                ).toBe("MSSP2");
            });
        });

        describe("Tests for function filterImports", () => {
            it("filterImports function works with valid options.", () => {
                const testI2cImports = [
                    {
                        interfaceId: {
                            name: "i2c-client-basic",
                            version: ">= 2.0.0 < 4.0.0",
                        },
                        handle: {
                            providerId: "module16",
                            exportId: "i2c_basic",
                        },
                        payload: {
                            interfaceApi: {
                                api: {
                                    Initialize: {
                                        name: "SPI2_Initialize",
                                        returns: "void",
                                    },
                                    Deinitialize: {
                                        name: "SPI2_Deinitialize",
                                        returns: "void",
                                    },
                                    ReadByte: {
                                        name: "SPI2_ReadByte",
                                        returns: "uint8_t",
                                    },
                                    WriteByte: {
                                        name: "SPI2_WriteByte",
                                        returns: "void",
                                        arguments: [{ type: "uint8_t", name: "wrByte" }],
                                    },
                                    ErrorGet: {
                                        name: "SPI2_ErrorGet",
                                        returns: "I2C_CLIENT_ERROR",
                                    },
                                    IsBusy: {
                                        name: "SPI2_IsBusy",
                                        returns: "bool",
                                    },
                                    TransferDirGet: {
                                        name: "SPI2_TransferDirGet",
                                        returns: "I2C_CLIENT_TRANSFER_DIR",
                                    },
                                    LastByteAckStatusGet: {
                                        name: "SPI2_LastByteAckStatusGet",
                                        returns: "I2C_CLIENT_ACK_STATUS",
                                    },
                                    CallbackRegister: {
                                        name: "SPI2_CallbackRegister",
                                        returns: "void",
                                        arguments: [
                                            {
                                                type: "bool (*callback)(enum I2C_CLIENT_TRANSFER_EVENT)",
                                                name: "clientEvent",
                                            },
                                        ],
                                    },
                                    Tasks: {
                                        name: "SPI2_Tasks",
                                        returns: "void",
                                    },
                                },
                                simpleApi: {
                                    Initialize: "void SPI2_Initialize(void)",
                                    Deinitialize: "void SPI2_Deinitialize(void)",
                                    ReadByte: "uint8_t SPI2_ReadByte(void)",
                                    WriteByte: "void SPI2_WriteByte(uint8_t wrByte)",
                                    ErrorGet: "I2C_CLIENT_ERROR SPI2_ErrorGet(void)",
                                    IsBusy: "bool SPI2_IsBusy(void)",
                                    TransferDirGet:
                                        "I2C_CLIENT_TRANSFER_DIR SPI2_TransferDirGet(void)",
                                    LastByteAckStatusGet:
                                        "I2C_CLIENT_ACK_STATUS SPI2_LastByteAckStatusGet(void)",
                                    CallbackRegister:
                                        "void SPI2_CallbackRegister(bool (*callback)(enum I2C_CLIENT_TRANSFER_EVENT) clientEvent)",
                                    Tasks: "void SPI2_Tasks(void)",
                                },
                                headerFiles: [
                                    { name: "i2c_client_interface.h", path: "include/" },
                                ],
                            },
                            moduleInstance: 2,
                            moduleName: "MSSP2",
                            hasInterrupts: true,
                            interruptDriven: true,
                            clockStretching: false,
                            clientAddress: 8,
                            clientMask: 127,
                            i2cClientCallbackEvent: {
                                name: "Client",
                                header: "mssp2.h",
                            },
                            isClockStrechAlwaysEnabled: true,
                            maxClientAddress: 127,
                            maxClientMask: 127,
                            minClientAddress: 0,
                        },
                    },
                    {
                        interfaceId: {
                            name: "i2c-client-basic",
                            version: ">= 2.0.0 < 4.0.0",
                        },
                        handle: {
                            providerId: "module15",
                            exportId: "i2c_basic",
                        },
                        payload: {
                            interfaceApi: {
                                api: {
                                    Initialize: {
                                        name: "SPI1_Initialize",
                                        returns: "void",
                                    },
                                    Deinitialize: {
                                        name: "SPI1_Deinitialize",
                                        returns: "void",
                                    },
                                    ReadByte: {
                                        name: "SPI1_ReadByte",
                                        returns: "uint8_t",
                                    },
                                    WriteByte: {
                                        name: "SPI1_WriteByte",
                                        returns: "void",
                                        arguments: [
                                            {
                                                type: "uint8_t",
                                                name: "wrByte",
                                            },
                                        ],
                                    },
                                    ErrorGet: {
                                        name: "SPI1_ErrorGet",
                                        returns: "I2C_CLIENT_ERROR",
                                    },
                                    IsBusy: {
                                        name: "SPI1_IsBusy",
                                        returns: "bool",
                                    },
                                    TransferDirGet: {
                                        name: "SPI1_TransferDirGet",
                                        returns: "I2C_CLIENT_TRANSFER_DIR",
                                    },
                                    LastByteAckStatusGet: {
                                        name: "SPI1_LastByteAckStatusGet",
                                        returns: "I2C_CLIENT_ACK_STATUS",
                                    },
                                    CallbackRegister: {
                                        name: "SPI1_CallbackRegister",
                                        returns: "void",
                                        arguments: [
                                            {
                                                type: "bool (*callback)(enum I2C_CLIENT_TRANSFER_EVENT)",
                                                name: "clientEvent",
                                            },
                                        ],
                                    },
                                    Tasks: {
                                        name: "SPI1_Tasks",
                                        returns: "void",
                                    },
                                },
                                simpleApi: {
                                    Initialize: "void SPI1_Initialize(void)",
                                    Deinitialize: "void SPI1_Deinitialize(void)",
                                    ReadByte: "uint8_t SPI1_ReadByte(void)",
                                    WriteByte: "void SPI1_WriteByte(uint8_t wrByte)",
                                    ErrorGet: "I2C_CLIENT_ERROR SPI1_ErrorGet(void)",
                                    IsBusy: "bool SPI1_IsBusy(void)",
                                    TransferDirGet:
                                        "I2C_CLIENT_TRANSFER_DIR SPI1_TransferDirGet(void)",
                                    LastByteAckStatusGet:
                                        "I2C_CLIENT_ACK_STATUS SPI1_LastByteAckStatusGet(void)",
                                    CallbackRegister:
                                        "void SPI1_CallbackRegister(bool (*callback)(enum I2C_CLIENT_TRANSFER_EVENT) clientEvent)",
                                    Tasks: "void SPI1_Tasks(void)",
                                },
                                headerFiles: [
                                    { name: "i2c_client_interface.h", path: "include/" },
                                ],
                            },
                            moduleInstance: 1,
                            moduleName: "MSSP1",
                            hasInterrupts: true,
                            interruptDriven: true,
                            clockStretching: false,
                            clientAddress: 8,
                            clientMask: 127,
                            i2cClientCallbackEvent: {
                                name: "Client",
                                header: "mssp1.h",
                            },
                            isClockStrechAlwaysEnabled: true,
                            maxClientAddress: 127,
                            maxClientMask: 127,
                            minClientAddress: 0,
                        },
                    },
                ];

                const DefaultState: MyState = mockState(false);

                // Create the module using the function
                const DefaultModule = createMyModule(DefaultState);

                // Change the default module data by overriding the data structure
                const CustomDefaultModule = {
                    ...DefaultModule,
                    imports: {
                        ...DefaultModule.imports,
                        i2c_client_basic: {
                            ...DefaultModule.imports.i2c_client_basic,
                            options: testI2cImports,
                        },
                    },
                };

                const importPayload = CustomDefaultModule.imports;

                // lastly, create a new model from that module data object.
                const DefaultClientModule = getModel(CustomDefaultModule, getDerivedData);

                const testDerivedData = DefaultClientModule?.getDerivedData();

                expect(
                    testDerivedData?.getMyFunctions()?.filterImports?.(importPayload),
                ).toBeDefined();
            });
        });
    });
});

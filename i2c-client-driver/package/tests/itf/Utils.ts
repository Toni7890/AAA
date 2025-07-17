export const getReadOnlyValue = (moduleData: any, tabId:any,property:any): any => {
    const uiPropertyValueRule = getUISchemaData(moduleData)?.[tabId]?.[property]?.["ui:readonly"];
    return uiPropertyValueRule;
}
export const getHiddenProperty = (moduleData: any, tabId:any,property:any): any => {
    const uiPropertyValueRule = getUISchemaData(moduleData)?.[tabId]?.[property]?.["ui:widget"];
    return uiPropertyValueRule;
}
const getUISchemaData = (moduleData:any): any => {
    const uiSchema = moduleData?.payload?.auto?.main.uiSchema;
    return uiSchema;
}
export const getRegisterValue = (moduleData: any, regName:any): any => {
    const uiRegisterValue =moduleData?.payload?.auto?.register?.schema?.properties?.[regName]?.title;
    return uiRegisterValue;
}
export const getSettingBit = (moduleData: any, regName:any,settingBit): any => {
    const uiSettingBit=moduleData?.payload?.auto?.register?.formData?.[regName]?.[settingBit];
    return uiSettingBit;
}
export const getArgs = (moduleData: any, moduleName:any,property:any): any => {
    const argValue=moduleData?.imports?.[moduleName]?.args?.[property];
    return argValue;
}
export const getPayload = (moduleData: any, moduleName:any,property:any): any => {
    const argpayLoaddata = moduleData?.exports?.[moduleName]?.interfaces[0]?.payload?.[property];
    return argpayLoaddata;
}
export const getModulepins = (moduleData: any,moduleId:any,pinpath:any): any => {
    const ModulePinName = moduleData?.payload?.processedRows?.rows?.[moduleId]?.[pinpath];
    return ModulePinName;
}
export const getModuleLockedPins = (moduleData: any,moduleId:any,pinpath:any,pinname:any): any => {
    const pinlockData: any = moduleData?.payload?.processedRows?.rows?.[moduleId]?.[pinpath]?.pins?.[pinname];
    return pinlockData;
}
export const getResult = (moduleData: any, moduleInterface:any,property:any): any => {
    const argValue = moduleData?.imports?.[moduleInterface]?.results?.[property];
    return argValue;
}
export const getInterruptTable = (moduleData: any): any => {
    const interruptTable: any[] = moduleData?.payload?.auto?.main?.formData?.software?.intTable;
    return interruptTable;
}
export const getFormData = (moduleData: any): any => {
    const formData = moduleData?.payload?.auto?.main?.formData;
    return formData;
}





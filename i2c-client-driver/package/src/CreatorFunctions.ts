import { CreatorFunctions } from "@microchip/melody-automodule-interface";
import { MyState } from "../generated_module/src/types/AutoModuleTypes";

export const getCreatorFunctions = (): CreatorFunctions => {
    return {
        shouldImport: shouldImport,
        getCreatorImportArgs: getCreatorImportArgs,
    };
};

const shouldImport = (importKey: string, state: MyState): boolean => {
    return true;
};

const getCreatorImportArgs = (importKey: string, state: MyState): any | undefined => {
    return undefined;
};

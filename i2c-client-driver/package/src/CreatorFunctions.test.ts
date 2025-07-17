import { getCreatorFunctions } from "./CreatorFunctions";

const creatorTestAPI = getCreatorFunctions();

describe("Tests for function getCreatorFunctions.", () => {
    it("shouldImport will always return true.", () => {
        expect(
            creatorTestAPI?.shouldImport?.("i2c_client_basic", undefined),
        ).toBeTruthy();
    });

    it("getCreatorImportArgs will always return undefined.", () => {
        expect(
            creatorTestAPI?.getCreatorImportArgs?.("i2c_client_basic", undefined),
        ).toBe(undefined);
    });
});

import { combineStrings } from "./combineStrings";

describe("combineStrings", () => {
    it("returns just text when giveNothing is true", () => {
        const result = combineStrings("apple", true, null);

        expect(result).toBe("apple");
    })
});

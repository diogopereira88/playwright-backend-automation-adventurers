import { expect, test } from "@playwright/test";
import { CharacterResponseBody } from "../types/character-types";

export async function validateDraftChar(
    characterResponseBody: CharacterResponseBody,
    charName: string,
) {
    await test.step('Validate draft char data', async () => {
    
        expect(characterResponseBody.id).not.toBeNull();
        expect(characterResponseBody.name).toBe(charName);
        expect(characterResponseBody.classId).toBe(null);
        expect(characterResponseBody.speciesId).toBe(null);
        expect(characterResponseBody.backgroundId).toBe(null);
        expect(characterResponseBody.level).toBe(1);
        expect(characterResponseBody.status).toBe("draft");
    })
    
}
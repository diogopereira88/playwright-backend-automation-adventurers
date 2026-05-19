import { expect, test } from "@playwright/test";
import { UpdateCharacterType, CreateCharacterType, UpdateCharacterAbilityScores, CharacterResponseBody, UpdateCharacterAbilityScoresFinal, DefaultEquipment, ClassEquipment } from "../types/character-types";

export async function validateDraftChar(
    characterResponseBody: CreateCharacterType,
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
    });
    
};

export async function validateUpdatedChar(
    characterResponseBody: CharacterResponseBody,
    charID: number,
    data: UpdateCharacterType
) {
    await test.step('Validate updated char data', async () => {
    
        expect(characterResponseBody.id).toBe(charID);
        expect(characterResponseBody.name).toBe(data.name);
        expect(characterResponseBody.classId).toBe(data.classId);
        expect(characterResponseBody.speciesId).toBe(data.speciesId);
        expect(characterResponseBody.backgroundId).toBe(data.backgroundId);
        expect(characterResponseBody.level).toBe(1);
        expect(characterResponseBody.status).toBe("in_progress");
    });
    
};

export async function validateCharAbilityScores(
    characterResponseBody: CharacterResponseBody,
    charID: number,
    data: UpdateCharacterAbilityScores,
    final: UpdateCharacterAbilityScoresFinal
) {
    await test.step('Validate ability scores', async () => {
    
        expect(characterResponseBody.characterId).toBe(charID);
        expect(characterResponseBody.selectedAbilityScores.base).toEqual(data.abilityScores.base);
        expect(characterResponseBody.selectedAbilityScores.bonuses).toEqual(data.abilityScores.bonuses);
        expect(characterResponseBody.selectedAbilityScores.final).toEqual(final.abilityScores.final); 
    });
    
};

export async function validateCharDefaultEquipment(
    characterResponseBody: DefaultEquipment,
    charID: number,
) {
    await test.step('Validate initial equipment ', async () => {
    
        expect(characterResponseBody.characterId).toBe(charID);
        expect(characterResponseBody.equipment).toEqual([]);
    });
    
};

export async function validateCharClassEquipment(
    characterResponseBody: ClassEquipment,
    data: ClassEquipment
) {
    await test.step('Validate added class equipment ', async () => {
    
        expect(characterResponseBody.addedEquipment).toEqual(data.addedEquipment);
        expect(characterResponseBody.addedCurrency).toEqual(data.addedCurrency);
    });
    
};

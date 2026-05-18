import { test, expect } from '@playwright/test';
import { getToken } from './client/token-client';
import { createCharacter, deleteCharacter, getCharacterByID, updateCharacterAbilityScoresByID, updateCharacterByID } from './client/character-client';
import { BARBARIAN_CHAR_ABILITY_SCORES, BARBARIAN_CHAR_DRAFT, BARBARIAN_CHAR_UPDATE } from './data/character-data';

let token = '';
let charID = 0;

console.log(token);
console.log(charID);

test.describe.serial('CRUD Flow', () => {

// GET TOKEN //    
    test.beforeAll( async ({ request }) => {
        token = await getToken(request);

        expect(token).toBeTruthy();
        expect(token).toEqual(expect.any(String));
        expect(token.length).toBeGreaterThan(20);
    });

// CREATE CHARACTER //
    test('Create New Character', async ({ request }) => {
        
        const characterResponse = await createCharacter(
            request, 
            token, 
            BARBARIAN_CHAR_DRAFT,
        );
        const characterResponseBody = await characterResponse.json();

        expect(characterResponse.status()).toBe(201);
        expect(characterResponseBody.id).not.toBeNull();
        expect(characterResponseBody.name).toBe(BARBARIAN_CHAR_DRAFT.name);
        expect(characterResponseBody.classId).toBe(null);
        expect(characterResponseBody.speciesId).toBe(null);
        expect(characterResponseBody.backgroundId).toBe(null);
        expect(characterResponseBody.level).toBe(1);
        expect(characterResponseBody.status).toBe("draft");
        
        charID = characterResponseBody.id;
    });

// GET CHARACTER //
    test('Get New Character', async ({ request }) => {
        
        const characterResponse = await getCharacterByID(
            request, 
            token,
            charID
        );
        const characterResponseBody = await characterResponse.json();

        expect (characterResponse.status()).toBe(200);
        expect(characterResponseBody.id).toBe(charID);
        expect(characterResponseBody.name).toBe(BARBARIAN_CHAR_DRAFT.name);
        expect(characterResponseBody.classId).toBe(null);
        expect(characterResponseBody.speciesId).toBe(null);
        expect(characterResponseBody.backgroundId).toBe(null);
        expect(characterResponseBody.level).toBe(1);
        expect(characterResponseBody.status).toBe("draft");
    });

// UPDATE CHARACTER //
    test('Update Character', async ({ request }) => {
        
        const characterResponse = await updateCharacterByID(
            request, 
            token,
            BARBARIAN_CHAR_UPDATE,
            charID
        );
        const characterResponseBody = await characterResponse.json();
      
        expect (characterResponse.status()).toBe(200);
        expect(characterResponseBody.id).toBe(charID);
        expect(characterResponseBody.name).toBe(BARBARIAN_CHAR_UPDATE.name);
        expect(characterResponseBody.classId).toBe(BARBARIAN_CHAR_UPDATE.classId);
        expect(characterResponseBody.speciesId).toBe(BARBARIAN_CHAR_UPDATE.speciesId);
        expect(characterResponseBody.backgroundId).toBe(BARBARIAN_CHAR_UPDATE.backgroundId);
        expect(characterResponseBody.level).toBe(1);
        expect(characterResponseBody.status).toBe("in_progress");
    });

// UPDATE ABILITY SCORES //
    test('Update Character Ability Scores', async ({ request }) => {
        
        const characterResponse = await updateCharacterAbilityScoresByID(
            request, 
            token,
            BARBARIAN_CHAR_ABILITY_SCORES,
            charID
        );
        const characterResponseBody = await characterResponse.json();

        expect(characterResponse.status()).toBe(200);
        expect(characterResponseBody.characterId).toBe(charID);
        expect(characterResponseBody.selectedAbilityScores.base).toEqual(BARBARIAN_CHAR_ABILITY_SCORES.abilityScores.base);
        expect(characterResponseBody.selectedAbilityScores.bonuses).toEqual(BARBARIAN_CHAR_ABILITY_SCORES.abilityScores.bonuses);
        expect(characterResponseBody.selectedAbilityScores.final).toEqual({
            STR: 16,
            DEX: 14,
            CON: 14,
            INT: 8,
            WIS: 12,
            CHA: 12
            }); 
    });

// DELETE CHARACTER //    
    test('Delete Character', async ({ request }) => {
        
        const characterResponse = await deleteCharacter(
            request, 
            token,
            charID
        );
        const characterResponseBody = await characterResponse.json();
        expect (characterResponse.status()).toBe(200);
        expect(characterResponseBody.message).toBe("Character deleted successfully");
    });

// GET DELETED CHARACTER - ERROR 404 //
    test('Validate Deleted Character', async ({ request }) => {
        
        const characterResponse = await getCharacterByID(
            request, 
            token,
            charID
        );
        const characterResponseBody = await characterResponse.json();
        expect (characterResponse.status()).toBe(404);
        expect(characterResponseBody.error).toBe("Character not found");
    });
});
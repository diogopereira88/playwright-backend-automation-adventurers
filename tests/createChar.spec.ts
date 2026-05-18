import { test, expect } from '@playwright/test';
import { getToken } from './client/token-client';
import { createCharacter } from './client/character-client';
import { BARBARIAN_CHAR } from './data/character-data';

let token = '';
let charID = 0;

test.describe.serial('Create character using client and data', () => {

    test.beforeAll( async ({ request }) => {
        token = await getToken(request);
        expect(token).toBeTruthy();
        expect(typeof token).toBe('string');
        expect(token.length).toBeGreaterThan(10);
    });

    test('Create Barbarian Character - in progress', async ({ request }) => {
        
        const characterResponse = await createCharacter(
            request, 
            token, 
            BARBARIAN_CHAR,
        );
        const characterResponseBody = await characterResponse.json();

        expect(characterResponseBody.id).not.toBeNull();
        expect(characterResponseBody.name).toBe(BARBARIAN_CHAR.name);
        expect(characterResponseBody.classId).toBe(BARBARIAN_CHAR.classId);
        expect(characterResponseBody.speciesId).toBe(BARBARIAN_CHAR.speciesId);
        expect(characterResponseBody.backgroundId).toBe(BARBARIAN_CHAR.backgroundId);
        expect(characterResponseBody.level).toBe(1);
        expect(characterResponseBody.status).toBe("in_progress");
        
        charID = characterResponseBody.id;
        console.log(charID);
    });

});
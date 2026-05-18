import { test, expect } from '@playwright/test';
import { getToken } from './client/token-client';
import { createCharacter } from './client/character-client';
import { WIZARD_CHAR, WIZARD_CHAR_DRAFT } from './data/character-data';
import { validateDraftChar } from './snippets/character-snippets';
import { expectStatusCodeCreated } from './snippets/validations-snippets';

let token = '';
let charID = 0;

test.describe.serial('Final Flow', () => {

// GET TOKEN //    
    test.beforeAll( async ({ request }) => {
        token = await getToken(request);
    });

// CREATE CHARACTER //
    test('Create New Character', async ({ request }) => {
        
        const characterResponse = await createCharacter(
            request, 
            token, 
            WIZARD_CHAR_DRAFT,
        );
        const characterResponseBody = await characterResponse.json();
        
        await expectStatusCodeCreated(characterResponse);
        await validateDraftChar(characterResponseBody, WIZARD_CHAR_DRAFT.name);

    
        
        charID = characterResponseBody.id;
    });
});
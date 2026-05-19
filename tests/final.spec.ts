import { test, expect } from '@playwright/test';
import { getToken } from './client/token-client';
import { createCharacter, deleteCharacter, getCharacterByID, getCharacterEquipment, updateCharacterAbilityScoresByID, updateCharacterByID, updateCharacterClassEquipment } from './client/character-client';
import { WIZARD_CHAR_ADD_EQUIPMENT_LABEL_A, WIZARD_CHAR_CLASS_EQUIPMENT, WIZARD_CHAR_DRAFT, WIZARD_CHAR_UPDATE, WIZARD_CHAR_UPDATE_ABILITY_SCORES, WIZARD_CHAR_UPDATE_ABILITY_SCORES_FINAL } from './data/character-data';
import { validateCharAbilityScores, validateCharClassEquipment, validateCharDefaultEquipment, validateDraftChar, validateUpdatedChar } from './snippets/character-snippets';
import { deletedCharMessage, expectStatusCodeCreated, expectStatusCodeNotFund, expectStatusCodeOk } from './snippets/validations-snippets';

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


// UPDATE CHARACTER //
    test('Update Character', async ({ request }) => {
        
        const characterResponse = await updateCharacterByID(
            request, 
            token,
            WIZARD_CHAR_UPDATE,
            charID
        );
        const characterResponseBody = await characterResponse.json();

        await expectStatusCodeOk(characterResponse);
        await validateUpdatedChar(characterResponseBody, charID, WIZARD_CHAR_UPDATE);

    });

// UPDATE ABILITY SCORES //
    test('Update Character Ability Scores', async ({ request }) => {
        
        const characterResponse = await updateCharacterAbilityScoresByID(
            request, 
            token,
            WIZARD_CHAR_UPDATE_ABILITY_SCORES,
            charID
        );
        const characterResponseBody = await characterResponse.json();

        await expectStatusCodeOk(characterResponse);
        await validateCharAbilityScores(characterResponseBody, charID, WIZARD_CHAR_UPDATE_ABILITY_SCORES, WIZARD_CHAR_UPDATE_ABILITY_SCORES_FINAL);

    });

// GET CHARACTER EQUIPMENT //
    test('Check Equipment', async ({ request }) => {
        
        const characterResponse = await getCharacterEquipment(
            request, 
            token,
            charID
        );
        const characterResponseBody = await characterResponse.json();

        await expectStatusCodeOk(characterResponse);
        await validateCharDefaultEquipment(characterResponseBody, charID)
    });

    test('Add class equipment', async ({ request }) => {
        
        const characterResponse = await updateCharacterClassEquipment(
            request, 
            token, 
            charID,
            WIZARD_CHAR_ADD_EQUIPMENT_LABEL_A,
        );
        const characterResponseBody = await characterResponse.json();
        
        await expectStatusCodeOk(characterResponse);
        await validateCharClassEquipment(characterResponseBody, WIZARD_CHAR_CLASS_EQUIPMENT);
    });
    


//--------------------------//

// GET COMPLETE CHARACTER //
    test('Validate Complete Character', async ({ request }) => {
        
        const characterResponse = await getCharacterByID(
            request, 
            token,
            charID
        );
        const characterResponseBody = await characterResponse.json();

        await expectStatusCodeOk(characterResponse);

    });


// DELETE CHARACTER //    
    test.skip('Delete Character', async ({ request }) => {
        
        const characterResponse = await deleteCharacter(
            request, 
            token,
            charID
        );
        const characterResponseBody = await characterResponse.json();

        await expectStatusCodeOk(characterResponse);
        await deletedCharMessage(characterResponseBody.message);

    });

// GET DELETED CHARACTER - ERROR 404 //
    test.skip('Validate Deleted Character', async ({ request }) => {
        
        const characterResponse = await getCharacterByID(
            request, 
            token,
            charID
        );
        const characterResponseBody = await characterResponse.json();

        await expectStatusCodeNotFund(characterResponse, characterResponseBody.error);
        expect(characterResponseBody.error).toBe("Character not found");
    });

});


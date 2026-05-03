import { test, expect } from '@playwright/test';
import { getToken } from './client/token-client';
import { getAttributes } from './client/attributes-client';
import { ATTRIBUTES_DATA } from './data/attributes-data';

// Validate Attributes

//-----//

let token = '';


test.describe.serial('Validate attributes', () => {
    
    test.beforeAll( async ({ request }) => {
        token = await getToken(request);
    });

    test('Validate Strength', async ({ request }) => {
            
            const attributesResponse = await getAttributes(
                request, 
                token, 
            );
            expect (attributesResponse.status()).toBe(200);
            const attributesResponseBody = await attributesResponse.json();
            console.log(attributesResponseBody);
            expect(attributesResponseBody[0].name).toBe(ATTRIBUTES_DATA[0].name);
    
        });
 
  
//-----//    

    test('Validate all attributes', async ({ request }) => {
            
            const attributesResponse = await getAttributes(
                request, 
                token, 
            );
            expect (attributesResponse.status()).toBe(200);
            const attributesResponseBody = await attributesResponse.json();
            console.log(attributesResponseBody);

            for (const [i, attribute] of attributesResponseBody.entries()) {
                await test.step(`${attribute.name} - validation`, async () => {
                    expect(attribute.id).toBe(ATTRIBUTES_DATA[i].id);
                    expect(attribute.name).toBe(ATTRIBUTES_DATA[i].name);
                    expect(attribute.shortname).toBe(ATTRIBUTES_DATA[i].shortname);
                    expect(attribute.description).toBe(ATTRIBUTES_DATA[i].description);
                    expect(attribute.skills).toEqual(ATTRIBUTES_DATA[i].skills);
                });
            };
    });
});
//-----//

import { test, expect } from '@playwright/test';

test.describe.serial('Character flow validation', () => {
    let token = '';
    let charID = 0;

    test.beforeAll( async ({ request }) => {
        const tokenResponse = await request.post('/api/auth/token', { 
            data: { 
                username: 'diogop', 
                password: 'DiogoP2026' 
            },
        });

        expect (tokenResponse.status()).toBe(200);
        const responseBody = await tokenResponse.json();
        token = responseBody.token;
    });

    test('Character List', async ({ request }) => {
        const charactersResponse = await request.get('/api/characters', {
            headers: { Authorization: 'Bearer ' + token }
        });
        expect (charactersResponse.status()).toBe(200);
        const charactersResponseBody = await charactersResponse.json();
        expect(charactersResponseBody[0].id).toBe(2425);
        charID = charactersResponseBody[0].id;
    });

    test('Character by ID', async ({ request }) => {
        const characterIDResponse = await request.get('/api/characters/' + charID);
        expect(characterIDResponse.status()).toBe(200);
    });
});

    

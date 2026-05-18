import { APIResponse, expect, test } from "@playwright/test";

export async function expectStatusCodeOK(response: APIResponse) {
    await test.step('Validate status code 200', async () => {
        expect(response.status()).toBe(200);
    });
}

export async function expectStatusCodeCreated(response: APIResponse) {
    await test.step('Validate status code 201', async () => {
        expect(response.status()).toBe(201);
    });
}

// export async function expectValidToken(tokenResponseBody: { token: string }) {
//     await test.step('Validate token', async () => {
//         expect(tokenResponseBody.token).toEqual(expect.any(String));
//     });
// }
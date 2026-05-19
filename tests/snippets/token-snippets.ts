import { expect, test } from "@playwright/test";

export async function validateToken(token: string) {
    await test.step('Validate token', async () => {
        expect(token).toBeTruthy();
        expect(token).toEqual(expect.any(String));
        expect(token.length).toBeGreaterThan(20);
    });
}
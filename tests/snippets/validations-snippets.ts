import { APIResponse, expect, test } from "@playwright/test";

export async function expectStatusCodeOk(response: APIResponse) {
    await test.step('Validate status code 200', async () => {
        expect(response.status()).toBe(200);
    });
};

export async function expectStatusCodeCreated(response: APIResponse) {
    await test.step('Validate status code 201', async () => {
        expect(response.status()).toBe(201);
    });
};

export async function expectStatusCodeNotFund(response: APIResponse, message: string) {
    await test.step('Validate status code 404', async () => {
        expect(response.status()).toBe(404);
        expect(message).toBe("Character not found")
    });
};

export async function deletedCharMessage(message: string) {
    await test.step('Validate Deleted Char message', async () => {
        expect(message).toBe("Character deleted successfully");
    });
};

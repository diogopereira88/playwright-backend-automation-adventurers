import { APIRequestContext } from "@playwright/test";

export async function getToken (request: APIRequestContext) {

    const response = await request.post('/api/auth/token', {
        data:{
            username: 'diogop',
            password: 'T5m@Q8v!P3k#R7xL'
        },
    });

    const responseToken = await response.json();

    return responseToken.token;
};

export async function createAuthToken (request: APIRequestContext) {

    return request.post('/api/auth/token', {
        data:{
            username: 'diogop',
            password: 'T5m@Q8v!P3k#R7xL'
        },
    });
};
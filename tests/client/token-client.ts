import { APIRequestContext } from "@playwright/test";
import { validateToken } from "../snippets/token-snippets";
import { expectStatusCodeOk } from "../snippets/validations-snippets";

export async function getToken (request: APIRequestContext) {

    const response = await request.post('/api/auth/token', {
        data:{
            username: process.env.API_USERNAME,
            password: process.env.API_PASSWORD,
        },
    });

    const responseToken = await response.json();

    expectStatusCodeOk(response);
    validateToken(responseToken.token);
    
    return responseToken.token;
};

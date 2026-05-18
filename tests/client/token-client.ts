import { APIRequestContext } from "@playwright/test";
import { validateToken } from "../snippets/token-snippets";
import { expectStatusCodeOK } from "../snippets/validations-snippets";

export async function getToken (request: APIRequestContext) {

    const response = await request.post('/api/auth/token', {
        data:{
            username: process.env.API_USERNAME,
            password: process.env.API_PASSWORD,
        },
    });

    const responseToken = await response.json();

    expectStatusCodeOK(response);
    validateToken(responseToken.token);
    
    return responseToken.token;
};

// export async function createAuthToken (request: APIRequestContext) {

//     return request.post('/api/auth/token', {
//         data:{

//             username: process.env.API_USERNAME,
//             password: process.env.API_PASSWORD,
//         },
//     });
// };
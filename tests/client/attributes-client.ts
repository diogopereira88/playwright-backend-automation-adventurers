import { APIRequestContext } from "@playwright/test";
import { AttributesType } from "../types/attributes-types";


export async function getAttributes(
    request: APIRequestContext, 
    token: string,
) {
    const response = await request.get('/api/attributes', {
        headers: {
            Authorization: 'Bearer ' + token 
        },
    });
    return response;
};
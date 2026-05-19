import { APIRequestContext } from "@playwright/test";
import { CreateCharacterType, UpdateCharacterAbilityScores, UpdateCharacterType, UpdateClassEquipment } from "../types/character-types";

export async function createCharacter(
    request: APIRequestContext, 
    token: string,
    data: CreateCharacterType,
) {
    const response = await request.post('/api/characters', {
        headers: {
            Authorization: 'Bearer ' + token 
        },
        data,
    });
    return response;
};

export async function updateCharacterByID(
    request: APIRequestContext, 
    token: string,
    data: UpdateCharacterType,
    id: number,
) {
    const response = await request.patch(`/api/characters/${id}`, {
        headers: {
            Authorization: 'Bearer ' + token 
        },
        data,
    });
    return response;
};

export async function getCharacters(
    request: APIRequestContext, 
    token: string,
) {
    const response = await request.get('/api/characters', {
        headers: {
            Authorization: 'Bearer ' + token 
        },
    });
    return response;
};

export async function getCharacterByID(
    request: APIRequestContext, 
    token: string,
    id: number,
) {
    const response = await request.get(`/api/characters/${id}`, {
        headers: {
            Authorization: 'Bearer ' + token 
        },
    });
    return response;
};

export async function deleteCharacter(
    request: APIRequestContext, 
    token: string,
    id: number,
) {
    const response = await request.delete(`/api/characters/${id}`, {
        headers: {
            Authorization: 'Bearer ' + token 
        },
    });
    return response;
};

export async function updateCharacterAbilityScoresByID(
    request: APIRequestContext, 
    token: string,
    data: UpdateCharacterAbilityScores,
    id: number,
) {
    const response = await request.put(`/api/characters/${id}/ability-scores`, {
        headers: {
            Authorization: 'Bearer ' + token 
        },
        data,
    });
    return response;
};

export async function getCharacterEquipment(
    request: APIRequestContext, 
    token: string,
    id: number,
) {
    const response = await request.get(`/api/characters/${id}/equipment`, {
        headers: {
            Authorization: 'Bearer ' + token 
        },
    });
    return response;
};

export async function updateCharacterClassEquipment(
    request: APIRequestContext, 
    token: string,
    id: number,
    data: UpdateClassEquipment,
) {
    const response = await request.post(`/api/characters/${id}/equipment/class-choice`, {
        headers: {
            Authorization: 'Bearer ' + token 
        },
        data,
    });
    return response;
};



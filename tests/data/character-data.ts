import { CreateCharacterType, UpdateCharacterType } from "../types/character-types";


export const BARBARIAN_CHAR: CreateCharacterType = {
    name: 'Biluu The Jester - Barbarian (complete)',
    classId: 1,
    speciesId: 7,
    backgroundId: 16,
};

export const WIZARD_CHAR: CreateCharacterType = {
    name: 'Biluu The Jester - Wizard',
    classId: 12,
    speciesId: 1,
    backgroundId: 13,
};

export const BARBARIAN_CHAR_DRAFT: CreateCharacterType = {
    name: 'Biluu The Jester - Barbarian (draft)',
};

export const BARBARIAN_CHAR_UPDATE: UpdateCharacterType = {
    classId: 1,
    speciesId: 7,
    backgroundId: 16,
};
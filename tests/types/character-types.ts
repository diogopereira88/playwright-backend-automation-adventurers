
export type CreateCharacterType = {

    name: string;
    classId?: number;
    speciesId?: number;
    backgroundId?: number;
};

export type UpdateCharacterType = {
    
    classId?: number;
    speciesId?: number;
    backgroundId?: number;
};
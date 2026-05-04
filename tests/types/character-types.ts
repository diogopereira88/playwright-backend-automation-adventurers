
export type CreateCharacterType = {

    name: string;
    classId?: number;
    speciesId?: number;
    backgroundId?: number;
};

export type UpdateCharacterType = {

    name?: string;
    classId?: number;
    speciesId?: number;
    backgroundId?: number;
};

export type Stats = {
  STR: number;
  DEX: number;
  CON: number;
  INT: number;
  WIS: number;
  CHA: number;
};

export type updateCharacterAbilityScores = {
  abilityScores: {
    base: Stats;
    bonuses: Stats;
  };
};
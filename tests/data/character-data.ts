import { CreateCharacterType, UpdateCharacterType, updateCharacterAbilityScores } from "../types/character-types";


export const BARBARIAN_CHAR: CreateCharacterType = {
    name: 'Biluu The Jester - Barbarian (complete)',
    classId: 1,
    speciesId: 7,
    backgroundId: 16,
};

export const WIZARD_CHAR_DRAFT: CreateCharacterType = {
    name: 'Biluu The Bullied - Wizard (draft)',
};

export const WIZARD_CHAR: CreateCharacterType = {
    name: 'Biluu The Bullied - Wizard (in progress)',
    classId: 12,
    speciesId: 1,
    backgroundId: 13,
};

export const BARBARIAN_CHAR_DRAFT: CreateCharacterType = {
    name: 'Biluu The Jester - Barbarian (draft)',
};

export const BARBARIAN_CHAR_UPDATE: UpdateCharacterType = {
    name: 'Biluu The Jester - Barbarian (in progress)',
    classId: 1,
    speciesId: 7,
    backgroundId: 16,
};

export const BARBARIAN_CHAR_ABILITY_SCORES: updateCharacterAbilityScores = {
  abilityScores: {
    base: {
      STR: 15,
      DEX: 13,
      CON: 13,
      INT: 8,
      WIS: 12,
      CHA: 12,
    },
    bonuses: {
      STR: 1,
      DEX: 1,
      CON: 1,
      INT: 0,
      WIS: 0,
      CHA: 0,
    },
  },
};
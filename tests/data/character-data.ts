import { CreateCharacterType, UpdateCharacterAbilityScoresFinal, UpdateCharacterType, UpdateCharacterAbilityScores } from "../types/character-types";


export const BARBARIAN_CHAR_DRAFT: CreateCharacterType = {
    name: 'Biluu The Jester - Barbarian (draft)',
};

export const BARBARIAN_CHAR: CreateCharacterType = {
    name: 'Biluu The Jester - Barbarian (complete)',
    classId: 1,
    speciesId: 7,
    backgroundId: 16,
};

export const BARBARIAN_CHAR_UPDATE: UpdateCharacterType = {
    name: 'Biluu The Jester - Barbarian (in progress)',
    classId: 1,
    speciesId: 7,
    backgroundId: 16,
};

// ----- //

export const WIZARD_CHAR_DRAFT: CreateCharacterType = {
    name: 'Biluu The Bullied - Wizard (draft)',
};

export const WIZARD_CHAR_UPDATE: UpdateCharacterType = {
    name: 'Biluu The Bullied - Wizard (in progress)',
    classId: 12,
    speciesId: 7,
    backgroundId: 13,
};

export const WIZARD_CHAR_UPDATE_ABILITY_SCORES: UpdateCharacterAbilityScores = {
  abilityScores: {
    base: {
      STR: 8,
      DEX: 14,
      CON: 12,
      INT: 15,
      WIS: 14,
      CHA: 8,
    },
    bonuses: {
      STR: 0,
      DEX: 0,
      CON: 1,
      INT: 1,
      WIS: 1,
      CHA: 0,
    },
  },
};

export const WIZARD_CHAR_UPDATE_ABILITY_SCORES_FINAL: UpdateCharacterAbilityScoresFinal = {
  abilityScores: {
    final: {
      STR: 8,
      DEX: 14,
      CON: 13,
      INT: 16,
      WIS: 15,
      CHA: 8,
    },
  },
};

export const BARBARIAN_CHAR_ABILITY_SCORES: UpdateCharacterAbilityScores = {
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

export const BARBARIAN_CHAR_ABILITY_SCORES_FINAL: UpdateCharacterAbilityScoresFinal = {
  abilityScores: {
    final: {
      STR: 16,
      DEX: 14,
      CON: 14,
      INT: 8,
      WIS: 12,
      CHA: 12,
    },
  },
};
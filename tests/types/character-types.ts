

export type CreateCharacterType = {

  name: string;
  classId?: number;
  speciesId?: number;
  backgroundId?: number;
  id?: number;
  level?: number;
  status?: string;

};

export type UpdateCharacterType = {

  name?: string;
  classId: number;
  speciesId: number;
  backgroundId: number;
  id?: number;
  level?: number;
  status?: string;

};

export type UpdateCharacterAbilityScores = {
  abilityScores: {
    base: Stats;
    bonuses: Stats;
  };
};

export type UpdateCharacterAbilityScoresFinal = {
  abilityScores: {
    final: Stats;
  };
};

export type Stats = {
  STR: number;
  DEX: number;
  CON: number;
  INT: number;
  WIS: number;
  CHA: number;
};

export type CharacterResponseBody = {
  characterId: number;
  id: number;
  name: string;
  classId: number | null;
  speciesId: number | null;
  backgroundId: number | null;
  level: number;
  selectedAbilityScores: {
  base: AbilitySet;
  bonuses: AbilitySet;
  final: AbilitySet;
};
  currency: {
    cp?: number;
    sp?: number;
    ep?: number;
    gp?: number;
    pp?: number;
  } | null;
  skillProficiencies: string[];
  status: "draft" | "in_progress" | "completed";
  missingFields: string[];
  pendingChoices: string[];
  abilityModifiers: AbilitySet | null;
  armorClass: {
    total: number;
    base: number;
    dexModifierApplied: number;
    classBonus: number;
    shieldBonus: number;
    sources: {
      name: string;
      type: string;
      value: number;
    }[];
  };
  weaponAttacks: {
    equipmentId: number;
    name: string;
    attackType: "melee" | "ranged";
    ability: Ability;
    isProficient: boolean;
    abilityModifier: number;
    proficiencyBonus: number;
    attackBonus: number;
    damage: {
      formula: string;
      base: string;
      modifier: number;
      damageType: string;
    };
    properties: string[];
    mastery: {
      name: string;
      slug: string;
    };
    range: number | null;
    attackModes: {
      mode: string;
      attackType: "melee" | "ranged";
      ability: Ability;
      isProficient: boolean;
      abilityModifier: number;
      proficiencyBonus: number;
      attackBonus: number;
      damage: {
        formula: string;
        base: string;
        modifier: number;
        damageType: string;
      };
      range: number | null;
    }[];
  }[];
  hitPoints: {
    max: number;
    current: number;
    temporary: number;
    hitDie: number;
    conModifier: number;
    calculation: string;
  } | null;
  savingThrows: {
    ability: Ability;
    isProficient: boolean;
    abilityModifier: number;
    proficiencyBonus: number;
    bonus: number;
    total: number;
    sources: {
      type: string;
      value: number;
    }[];
  }[];
  initiative: {
    ability: Ability;
    abilityModifier: number;
    bonus: number;
    total: number;
    sources: {
      type: string;
      ability: Ability;
      value: number;
    }[];
  } | null;
  passivePerception: {
    skill: string;
    ability: Ability;
    base: number;
    skillModifier: number;
    bonus: number;
    total: number;
    sources: {
      type: string;
      value: number;
    }[];
  } | null;
  movement: {
    baseSpeed: number;
    unit: string;
    sources: {
      type: string;
      name: string;
      value: number;
    }[];
  } | null;
  inventoryWeight: {
    total: number;
    unit: string;
    sources: {
      name?: string;
      weight?: number;
    }[];
  };
  spellcastingSummary: {
    canCastSpells: boolean;
    ability: Ability | null;
    abilityModifier: number | null;
    spellSaveDc: number | null;
    spellAttackBonus: number | null;
    selectedSpellsCount: number;
    selectedCantripsCount: number;
  };
  spellSlots: {
    level: number;
    total: number;
    used: number;
  }[];
  selectedSpells: {
    id?: number;
    name?: string;
    level?: number;
  }[];
  skills: {
    name: string;
    ability: Ability;
    isProficient: boolean;
    abilityModifier: number;
    proficiencyBonus: number;
    total: number;
  }[];
  abilityScoreRules: {
    source: string;
    allowedChoices: Ability[];
    bonusRules: {
      mode: string;
      options: {
        type: string;
        choices?: {
          bonus: number;
          count: number;
          mustBeDifferentFromBonus?: number;
        }[];
        basedOn?: string;
      }[];
    };
  } | null;
  classDetails: {
    id: number;
    name: string;
    slug: string;
    description: string;
    role: string;
    hitDie: number;
    primaryAttributes: Ability[];
    recommendedSkills: string[];
    savingThrows: Ability[];
    spellcasting: unknown | null;
    skillProficiencyChoices: {
      choose: number;
      options: string[];
    };
    weaponProficiencies: string[];
    armorTraining: string[];
    startingEquipmentOptions: {
      label: string;
      items: string[];
    }[];
    equipmentOptions: string[];
    subclasses: string[];
    featuresByLevel: {
      level: number;
      features: {
        name: string;
        description: string;
      }[];
    }[];
  } | null;
  speciesDetails: {
    id: number;
    name: string;
    slug: string;
    description: string;
    creatureType: string;
    size: string;
    speed: number;
    specialTraits: {
      name: string;
      description: string;
    }[];
    subspecies: {
      name: string;
      slug: string;
      description: string;
      specialTraits: {
        name: string;
        description: string;
      }[];
    }[];
  } | null;
  backgroundDetails: {
    id: number;
    name: string;
    slug: string;
    description: string;
    abilityScores: Ability[];
    feat: string;
    skillProficiencies: string[];
    toolProficiency: string;
    equipmentOptions: string[];
  } | null;
};

type Ability = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";

type AbilitySet = {
  STR: number;
  DEX: number;
  CON: number;
  INT: number;
  WIS: number;
  CHA: number;
};


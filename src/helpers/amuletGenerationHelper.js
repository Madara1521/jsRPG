import uniqid from 'uniqid'

import amu1 from '../Redux/reducers/amuletRingsImg/amulets/amu1.png'
import amu2 from '../Redux/reducers/amuletRingsImg/amulets/amu2.png'
import amu3 from '../Redux/reducers/amuletRingsImg/amulets/amu3.png'

export const legendaryAmulet = [
  {
    id: 1,
    item: {
      requirements: {
        requiredLevel: 10,
      },
      info: {
        id: uniqid(),
        rarity: 4,
        classItem: 'amulet',
        lootName: 'Nokozan Relic',
        // img: amu1,
        // strength: generationRandomInteger(10),
        // dexterity: generationRandomInteger(10),
        // vitality: generationRandomInteger(10),
        // energy: generationRandomInteger(10),
        // attackRatingBonus: generationRandomInteger(30),
      }
    }
  },
  {
    id: 2,
    item: {}
  },
  {
    id: 3,
    item: {}
  },
  {
    id: 4,
    item: {}
  },
  {
    id: 5,
    item: {}
  },
  {
    id: 6,
    item: {}
  },
  {
    id: 7,
    item: {}
  },
  {
    id: 8,
    item: {}
  },
  {
    id: 9,
    item: {}
  },
  {
    id: 10,
    item: {}
  },
  {
    id: 11,
    item: {}
  },
  {
    id: 12,
    item: {}
  },
]

const kitAmulet = [
  {
    id: 1,
    item: {
      requirements: {
        requiredLevel: 10,
      },
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'amulet',
        lootName: "Vidala's Snare",
        img: amu1,
        health: 15,
        coldResist: '20%',
        strength: null,
        dexterity: null,
        vitality: null,
        energy: null,
        attackRatingBonus: null,
      },
      kitBonus: {
        magicItemsBonus: '50%',
      }
    }
  },
  {
    id: 2,
    item: {
      requirements: {
        requiredLevel: 15,
      },
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'amulet',
        lootName: "Arcanna's Sign",
        img: amu1,
        manaRegeneration: '20%',
        mana: 15,
        health: null,
        coldResist: null,
        
        strength: null,
        dexterity: null,
        vitality: null,
        energy: null,
        attackRatingBonus: null,
      },
      kitBonus: {
        magicItemsBonus: '50%',
        fireResist: '20%'
      }
    }
  },
  {
    id: 3,
    item: {
      requirements: {
        requiredLevel: 11,
      },
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'amulet',
        lootName: "Arcanna's Sign",
        img: amu1,
        fastHitRecovery: '10%',
        attackerTakesLightningDamage: 5, 
        manaRegeneration: null,
        mana: null,
        health: null,
        coldResist: null,
        
        strength: null,
        dexterity: null,
        vitality: null,
        energy: null,
        attackRatingBonus: null,
      },
      kitBonus: {
        magicItemsBonus: '25%',
        attackRatingBonus: 50,
      }
    }
  },
  {
    id: 4,
    item: {
      requirements: {
        requiredLevel: 67,
      },
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'amulet',
        lootName: "Tal Rasha's Adjudication",
        img: amu1,
        sorceressSkills: '2',
        lightningDamage: '3-32',
        fasterCastRate: '10%',
        fastHitRecovery: null,
        attackerTakesLightningDamage: null, 
        manaRegeneration: null,
        mana: 42,
        health: 50,
        coldResist: null,
        
        strength: null,
        dexterity: null,
        vitality: null,
        energy: null,
        attackRatingBonus: null,
      },
      kitBonus: {
        magicItemsBonus: '25%',
        attackRatingBonus: 50,
      }
    }
  },
  {
    id: 5,
    item: {}
  },
  {
    id: 6,
    item: {}
  },
  {
    id: 7,
    item: {}
  },
  {
    id: 8,
    item: {}
  },
  {
    id: 9,
    item: {}
  },
  {
    id: 10,
    item: {}
  },
  {
    id: 11,
    item: {}
  },
  {
    id: 12,
    item: {}
  },
]
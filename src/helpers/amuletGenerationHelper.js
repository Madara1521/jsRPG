import uniqid from 'uniqid'

import amu1 from '../Redux/reducers/amuletRingsImg/amulets/amu1.png'
import amu2 from '../Redux/reducers/amuletRingsImg/amulets/amu2.png'
// import amu3 from '../Redux/reducers/amuletRingsImg/amulets/amu3.png'

const generationRandomInteger = (max) => {
  return Math.floor(Math.random() * max) + 1
}

const generationRandomRarityAmulet = () => {
  const randomValue = Math.random() * 100

  switch (true) {
    case randomValue < 88:
      return 1
    case randomValue < 98:
      return 2
    case randomValue < 99.7:
      return 3
    default:
      return 4
  }
}

// const generationRandomRarity = () => {
//   const randomValue = Math.random() * 100

//   switch (true) {
//     case randomValue < 60:
//       return 0
//     case randomValue < 88:
//       return 1
//     case randomValue < 98:
//       return 2
//     case randomValue < 99:
//       return 3
//     default:
//       return 4
//   }
// }


export const generationAmulet = (zoneLevel) => {
  const rarityItem = generationRandomRarityAmulet()
  if (rarityItem <= 2) {
    return {
      requirements: {
        requiredLevel: generationRandomInteger(zoneLevel),
      },
      info: {
        id: uniqid(),
        rarity: rarityItem,
        classItem: 'amulet',
        lootName: 'Recruit amulet',
        img: amu1,
        strength: generationRandomInteger(10),
        dexterity: generationRandomInteger(10),
        vitality: generationRandomInteger(10),
        energy: generationRandomInteger(10),
        attackRatingBonus: generationRandomInteger(30),
      }
    }
  }
  return {
    requirements: {
      requiredLevel: generationRandomInteger(zoneLevel + 3),
    },
    info: {
      id: uniqid(),
      rarity: rarityItem,
      classItem: 'amulet',
      lootName: 'Kings amulet',
      img: amu2,
      strength: generationRandomInteger(25),
      dexterity: generationRandomInteger(25),
      vitality: generationRandomInteger(25),
      energy: generationRandomInteger(25),
      attackRatingBonus: generationRandomInteger(100),
    }
  }
}

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

export const kitAmulet = [
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
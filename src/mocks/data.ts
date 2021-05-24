export const pickachu = [
  {
    id: 'basep-1',
    name: 'Pikachu',
    supertype: 'Pokémon',
    subtypes: ['Basic'],
    level: '16',
    hp: '60',
    types: ['Lightning'],
    evolvesTo: ['Raichu'],
    attacks: [
      {
        name: 'Growl',
        cost: ['Colorless'],
        convertedEnergyCost: 1,
        damage: '',
        text:
          "If the Defending Pokémon attacks Pikachu during your opponent's next turn, any damage done by the attack is reduced by 10 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
      },
      {
        name: 'Thundershock',
        cost: ['Lightning', 'Lightning'],
        convertedEnergyCost: 2,
        damage: '20',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
      },
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2',
      },
    ],
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    set: {
      id: 'basep',
      name: 'Wizards Black Star Promos',
      series: 'Base',
      printedTotal: 53,
      total: 53,
      legalities: {
        unlimited: 'Legal',
      },
      ptcgoCode: 'PR',
      releaseDate: '1999/07/01',
      updatedAt: '2020/08/14 09:35:00',
      images: {
        symbol: 'https://images.pokemontcg.io/basep/symbol.png',
        logo: 'https://images.pokemontcg.io/basep/logo.png',
      },
    },
    number: '1',
    artist: 'Keiji Kinebuchi',
    rarity: 'Promo',
    flavorText:
      'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
    nationalPokedexNumbers: [25],
    legalities: {
      unlimited: 'Legal',
    },
    images: {
      small: 'https://images.pokemontcg.io/basep/1.png',
      large: 'https://images.pokemontcg.io/basep/1_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/basep-1',
      updatedAt: '2021/05/17',
      prices: {
        '1stEditionHolofoil': {
          low: 23.99,
          mid: 35.64,
          high: 99.98,
          market: 53.31,
          directLow: null,
        },
      },
    },
  },
]

export const charmander = [
  {
    id: 'det1-4',
    name: 'Charmander',
    supertype: 'Pokémon',
    subtypes: ['Basic'],
    hp: '60',
    types: ['Fire'],
    evolvesTo: ['Charmeleon'],
    attacks: [
      {
        name: 'Reckless Charge',
        cost: ['Colorless'],
        convertedEnergyCost: 1,
        damage: '20',
        text: 'This Pokémon does 10 damage to itself.',
      },
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2',
      },
    ],
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    set: {
      id: 'det1',
      name: 'Detective Pikachu',
      series: 'Sun & Moon',
      printedTotal: 18,
      total: 18,
      legalities: {
        unlimited: 'Legal',
        standard: 'Legal',
        expanded: 'Legal',
      },
      ptcgoCode: 'DET',
      releaseDate: '2019/04/05',
      updatedAt: '2019/04/25 22:26:00',
      images: {
        symbol: 'https://images.pokemontcg.io/det1/symbol.png',
        logo: 'https://images.pokemontcg.io/det1/logo.png',
      },
    },
    number: '4',
    artist: 'MPC Film',
    rarity: 'Common',
    flavorText:
      "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly.",
    nationalPokedexNumbers: [4],
    legalities: {
      unlimited: 'Legal',
      standard: 'Legal',
      expanded: 'Legal',
    },
    images: {
      small: 'https://images.pokemontcg.io/det1/4.png',
      large: 'https://images.pokemontcg.io/det1/4_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/det1-4',
      updatedAt: '2021/05/17',
      prices: {
        holofoil: {
          low: 0.02,
          mid: 0.48,
          high: 9.95,
          market: 0.33,
          directLow: 0.33,
        },
      },
    },
  },
  {
    id: 'sm75-1',
    name: 'Charmander',
    supertype: 'Pokémon',
    subtypes: ['Basic'],
    hp: '70',
    types: ['Fire'],
    evolvesTo: ['Charmeleon'],
    attacks: [
      {
        name: 'Fire Fang',
        cost: ['Fire', 'Colorless'],
        convertedEnergyCost: 2,
        damage: '20',
        text: "Your opponent's Active Pokémon is now Burned.",
      },
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2',
      },
    ],
    retreatCost: ['Colorless', 'Colorless'],
    convertedRetreatCost: 2,
    set: {
      id: 'sm75',
      name: 'Dragon Majesty',
      series: 'Sun & Moon',
      printedTotal: 70,
      total: 78,
      legalities: {
        unlimited: 'Legal',
        expanded: 'Legal',
      },
      ptcgoCode: 'DRM',
      releaseDate: '2018/09/07',
      updatedAt: '2018/10/01 21:54:00',
      images: {
        symbol: 'https://images.pokemontcg.io/sm75/symbol.png',
        logo: 'https://images.pokemontcg.io/sm75/logo.png',
      },
    },
    number: '1',
    artist: 'tetsuya koizumi',
    rarity: 'Common',
    flavorText:
      'From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.',
    nationalPokedexNumbers: [4],
    legalities: {
      unlimited: 'Legal',
      expanded: 'Legal',
    },
    images: {
      small: 'https://images.pokemontcg.io/sm75/1.png',
      large: 'https://images.pokemontcg.io/sm75/1_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/sm75-1',
      updatedAt: '2021/05/17',
      prices: {
        normal: {
          low: 0.82,
          mid: 2.24,
          high: 4.99,
          market: 2.84,
          directLow: 3.3,
        },
        reverseHolofoil: {
          low: 15.48,
          mid: 29.46,
          high: 36.26,
          market: 13.35,
          directLow: null,
        },
      },
    },
  },
  {
    id: 'sm115-7',
    name: 'Charmander',
    supertype: 'Pokémon',
    subtypes: ['Basic'],
    hp: '70',
    types: ['Fire'],
    evolvesTo: ['Charmeleon'],
    attacks: [
      {
        name: 'Gnaw',
        cost: ['Fire'],
        convertedEnergyCost: 1,
        damage: '10',
        text: '',
      },
      {
        name: 'Flare',
        cost: ['Fire', 'Colorless'],
        convertedEnergyCost: 2,
        damage: '20',
        text: '',
      },
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2',
      },
    ],
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    set: {
      id: 'sm115',
      name: 'Hidden Fates',
      series: 'Sun & Moon',
      printedTotal: 68,
      total: 69,
      legalities: {
        unlimited: 'Legal',
        standard: 'Legal',
        expanded: 'Legal',
      },
      ptcgoCode: 'HIF',
      releaseDate: '2019/08/23',
      updatedAt: '2019/08/23 15:59:00',
      images: {
        symbol: 'https://images.pokemontcg.io/sm115/symbol.png',
        logo: 'https://images.pokemontcg.io/sm115/logo.png',
      },
    },
    number: '7',
    artist: 'Megumi Mizutani',
    rarity: 'Common',
    flavorText:
      "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly.",
    nationalPokedexNumbers: [4],
    legalities: {
      unlimited: 'Legal',
      standard: 'Legal',
      expanded: 'Legal',
    },
    images: {
      small: 'https://images.pokemontcg.io/sm115/7.png',
      large: 'https://images.pokemontcg.io/sm115/7_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/sm115-7',
      updatedAt: '2021/05/17',
      prices: {
        normal: {
          low: 0.03,
          mid: 0.2,
          high: 10.82,
          market: 0.18,
          directLow: 0.16,
        },
        reverseHolofoil: {
          low: 0.23,
          mid: 0.5,
          high: 3.99,
          market: 0.44,
          directLow: 1.69,
        },
      },
    },
  },
  {
    id: 'sm9-11',
    name: 'Charmander',
    supertype: 'Pokémon',
    subtypes: ['Basic'],
    hp: '50',
    types: ['Fire'],
    evolvesTo: ['Charmeleon'],
    attacks: [
      {
        name: 'Scratch',
        cost: ['Fire'],
        convertedEnergyCost: 1,
        damage: '10',
        text: '',
      },
      {
        name: 'Reprisal',
        cost: ['Colorless', 'Colorless'],
        convertedEnergyCost: 2,
        damage: '20×',
        text:
          'This attack does 20 damage for each damage counter on this Pokémon.',
      },
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2',
      },
    ],
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    set: {
      id: 'sm9',
      name: 'Team Up',
      series: 'Sun & Moon',
      printedTotal: 181,
      total: 196,
      legalities: {
        unlimited: 'Legal',
        standard: 'Legal',
        expanded: 'Legal',
      },
      ptcgoCode: 'TEU',
      releaseDate: '2019/02/01',
      updatedAt: '2020/08/14 09:35:00',
      images: {
        symbol: 'https://images.pokemontcg.io/sm9/symbol.png',
        logo: 'https://images.pokemontcg.io/sm9/logo.png',
      },
    },
    number: '11',
    artist: 'Naoyo Kimura',
    rarity: 'Common',
    flavorText:
      "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly.",
    nationalPokedexNumbers: [4],
    legalities: {
      unlimited: 'Legal',
      standard: 'Legal',
      expanded: 'Legal',
    },
    images: {
      small: 'https://images.pokemontcg.io/sm9/11.png',
      large: 'https://images.pokemontcg.io/sm9/11_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/sm9-11',
      updatedAt: '2021/05/17',
      prices: {
        normal: {
          low: 0.05,
          mid: 0.25,
          high: 1.08,
          market: 0.24,
          directLow: 0.23,
        },
        reverseHolofoil: {
          low: 0.25,
          mid: 0.5,
          high: 2.27,
          market: 0.56,
          directLow: 0.44,
        },
      },
    },
  },
  {
    id: 'sm9-12',
    name: 'Charmander',
    supertype: 'Pokémon',
    subtypes: ['Basic'],
    hp: '70',
    types: ['Fire'],
    evolvesTo: ['Charmeleon'],
    attacks: [
      {
        name: 'Ember',
        cost: ['Fire'],
        convertedEnergyCost: 1,
        damage: '30',
        text: 'Discard an Energy from this Pokémon.',
      },
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2',
      },
    ],
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    set: {
      id: 'sm9',
      name: 'Team Up',
      series: 'Sun & Moon',
      printedTotal: 181,
      total: 196,
      legalities: {
        unlimited: 'Legal',
        standard: 'Legal',
        expanded: 'Legal',
      },
      ptcgoCode: 'TEU',
      releaseDate: '2019/02/01',
      updatedAt: '2020/08/14 09:35:00',
      images: {
        symbol: 'https://images.pokemontcg.io/sm9/symbol.png',
        logo: 'https://images.pokemontcg.io/sm9/logo.png',
      },
    },
    number: '12',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    flavorText:
      "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly.",
    nationalPokedexNumbers: [4],
    legalities: {
      unlimited: 'Legal',
      standard: 'Legal',
      expanded: 'Legal',
    },
    images: {
      small: 'https://images.pokemontcg.io/sm9/12.png',
      large: 'https://images.pokemontcg.io/sm9/12_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/sm9-12',
      updatedAt: '2021/05/17',
      prices: {
        normal: {
          low: 0.05,
          mid: 0.25,
          high: 1.18,
          market: 0.27,
          directLow: 0.23,
        },
        reverseHolofoil: {
          low: 0.25,
          mid: 0.49,
          high: 4.99,
          market: 0.49,
          directLow: 0.49,
        },
      },
    },
  },
  {
    id: 'bw11-17',
    name: 'Charmander',
    supertype: 'Pokémon',
    subtypes: ['Basic'],
    hp: '70',
    types: ['Fire'],
    evolvesTo: ['Charmeleon'],
    attacks: [
      {
        name: 'Draw In',
        cost: ['Fire'],
        convertedEnergyCost: 1,
        damage: '',
        text:
          'Attach 2 Fire Energy cards from your discard pile to this Pokémon.',
      },
      {
        name: 'Flare',
        cost: ['Fire', 'Colorless'],
        convertedEnergyCost: 2,
        damage: '20',
        text: '',
      },
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2',
      },
    ],
    retreatCost: ['Colorless', 'Colorless'],
    convertedRetreatCost: 2,
    set: {
      id: 'bw11',
      name: 'Legendary Treasures',
      series: 'Black & White',
      printedTotal: 113,
      total: 115,
      legalities: {
        unlimited: 'Legal',
        expanded: 'Legal',
      },
      ptcgoCode: 'LTR',
      releaseDate: '2013/11/06',
      updatedAt: '2018/03/04 10:35:00',
      images: {
        symbol: 'https://images.pokemontcg.io/bw11/symbol.png',
        logo: 'https://images.pokemontcg.io/bw11/logo.png',
      },
    },
    number: '17',
    artist: 'match',
    rarity: 'Common',
    flavorText:
      'The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.',
    nationalPokedexNumbers: [4],
    legalities: {
      unlimited: 'Legal',
      expanded: 'Legal',
    },
    images: {
      small: 'https://images.pokemontcg.io/bw11/17.png',
      large: 'https://images.pokemontcg.io/bw11/17_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/bw11-17',
      updatedAt: '2021/05/17',
      prices: {
        normal: {
          low: 0.5,
          mid: 1.88,
          high: 5.0,
          market: 0.85,
          directLow: null,
        },
        reverseHolofoil: {
          low: 12.0,
          mid: 16.1,
          high: 39.96,
          market: 9.59,
          directLow: null,
        },
      },
    },
  },
]

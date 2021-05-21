import { rest } from 'msw'

export const handlers = [
  rest.get('/search', (req, res, ctx) => {
    console.log('sending mock data')
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          //  {
          //     id: 'pl1-1',
          //     name: 'Ampharos',
          //     supertype: 'Pokémon',
          //     subtypes: ['Stage 2'],
          //     level: '57',
          //     hp: '130',
          //     types: ['Lightning'],
          //     evolvesFrom: 'Flaaffy',
          //     abilities: [
          //       {
          //         name: 'Damage Bind',
          //         text:
          //           "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
          //         type: 'Poké-Body',
          //       },
          //     ],
          //     attacks: [
          //       {
          //         name: 'Gigavolt',
          //         cost: ['Lightning', 'Colorless'],
          //         convertedEnergyCost: 2,
          //         damage: '30+',
          //         text:
          //           'Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed.',
          //       },
          //       {
          //         name: 'Reflect Energy',
          //         cost: ['Lightning', 'Colorless', 'Colorless'],
          //         convertedEnergyCost: 3,
          //         damage: '70',
          //         text:
          //           'Move an Energy card attached to Ampharos to 1 of your Benched Pokémon.',
          //       },
          //     ],
          //     weaknesses: [
          //       {
          //         type: 'Fighting',
          //         value: '+30',
          //       },
          //     ],
          //     resistances: [
          //       {
          //         type: 'Metal',
          //         value: '-20',
          //       },
          //     ],
          //     retreatCost: ['Colorless', 'Colorless'],
          //     convertedRetreatCost: 2,
          //     set: {
          //       id: 'pl1',
          //       name: 'Platinum',
          //       series: 'Platinum',
          //       printedTotal: 127,
          //       total: 130,
          //       legalities: {
          //         unlimited: 'Legal',
          //       },
          //       ptcgoCode: 'PL',
          //       releaseDate: '2009/02/11',
          //       updatedAt: '2020/08/14 09:35:00',
          //       images: {
          //         symbol: 'https://images.pokemontcg.io/pl1/symbol.png',
          //         logo: 'https://images.pokemontcg.io/pl1/logo.png',
          //       },
          //     },
          //     number: '1',
          //     artist: 'Atsuko Nishida',
          //     rarity: 'Rare Holo',
          //     nationalPokedexNumbers: [181],
          //     legalities: {
          //       unlimited: 'Legal',
          //     },
          //     images: {
          //       small: 'https://images.pokemontcg.io/pl1/1.png',
          //       large: 'https://images.pokemontcg.io/pl1/1_hires.png',
          //     },
          //     tcgplayer: {
          //       url: 'https://prices.pokemontcg.io/tcgplayer/pl1-1',
          //       updatedAt: '2021/05/17',
          //       prices: {
          //         holofoil: {
          //           low: 6.75,
          //           mid: 8.0,
          //           high: 14.98,
          //           market: 6.38,
          //           directLow: null,
          //         },
          //         reverseHolofoil: {
          //           low: 13.91,
          //           mid: 14.0,
          //           high: 14.98,
          //           market: 2.16,
          //           directLow: null,
          //         },
          //       },
          //     },
          //   },
          {
            id: 'det1-1',
            name: 'Bulbasaur',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            hp: '60',
            types: ['Grass'],
            evolvesTo: ['Ivysaur'],
            attacks: [
              {
                name: 'Find a Friend',
                cost: ['Grass'],
                convertedEnergyCost: 1,
                damage: '',
                text:
                  'Search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.',
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
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
            number: '1',
            artist: 'MPC Film',
            rarity: 'Common',
            flavorText:
              'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.',
            nationalPokedexNumbers: [1],
            legalities: {
              unlimited: 'Legal',
              standard: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/det1/1.png',
              large: 'https://images.pokemontcg.io/det1/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/det1-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 0.03,
                  mid: 0.4,
                  high: 9.95,
                  market: 0.28,
                  directLow: 0.25,
                },
              },
            },
          },
          {
            id: 'mcd19-1',
            name: 'Caterpie',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            hp: '50',
            types: ['Grass'],
            evolvesTo: ['Metapod'],
            attacks: [
              {
                cost: ['Grass'],
                name: 'Surprise Attack',
                text: 'Flip a coin. If tails, this attack does nothing.',
                damage: '20',
                convertedEnergyCost: 1,
              },
            ],
            retreatCost: ['Colorless'],
            convertedRetreatCost: 1,
            set: {
              id: 'mcd19',
              name: "McDonald's Collection 2019",
              series: 'Other',
              printedTotal: 12,
              total: 12,
              legalities: {
                unlimited: 'Legal',
              },
              releaseDate: '2019/10/15',
              updatedAt: '2020/11/11 13:00:00',
              images: {
                symbol: 'https://images.pokemontcg.io/mcd19/symbol.png',
                logo: 'https://images.pokemontcg.io/mcd19/logo.png',
              },
            },
            number: '1',
            artist: 'Sekio',
            rarity: 'Promo',
            nationalPokedexNumbers: [10],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/mcd19/1.png',
              large: 'https://images.pokemontcg.io/mcd19/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/mcd19-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 8.99,
                  mid: 12.75,
                  high: 12.99,
                  market: 6.39,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'dv1-1',
            name: 'Dratini',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            hp: '40',
            types: ['Dragon'],
            evolvesTo: ['Dragonair'],
            attacks: [
              {
                name: 'Wrap',
                cost: ['Grass', 'Lightning'],
                convertedEnergyCost: 2,
                damage: '20',
                text:
                  'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
              },
            ],
            weaknesses: [
              {
                type: 'Dragon',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless'],
            convertedRetreatCost: 1,
            set: {
              id: 'dv1',
              name: 'Dragon Vault',
              series: 'Black & White',
              printedTotal: 20,
              total: 20,
              legalities: {
                unlimited: 'Legal',
                expanded: 'Legal',
              },
              ptcgoCode: 'DRV',
              releaseDate: '2012/10/05',
              updatedAt: '2019/01/28 16:44:00',
              images: {
                symbol: 'https://images.pokemontcg.io/dv1/symbol.png',
                logo: 'https://images.pokemontcg.io/dv1/logo.png',
              },
            },
            number: '1',
            artist: 'Masakazu Fukuda',
            rarity: 'Rare Holo',
            flavorText:
              'It is called the "Mirage Pokémon" because so few have seen it. Its shed skin has been found.',
            nationalPokedexNumbers: [147],
            legalities: {
              unlimited: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/dv1/1.png',
              large: 'https://images.pokemontcg.io/dv1/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/dv1-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 0.45,
                  mid: 0.99,
                  high: 4.99,
                  market: 1.06,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'xy5-1',
            name: 'Weedle',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            hp: '50',
            types: ['Grass'],
            evolvesTo: ['Kakuna'],
            attacks: [
              {
                name: 'Multiply',
                cost: ['Grass'],
                convertedEnergyCost: 1,
                damage: '',
                text:
                  'Search your deck for Weedle and put it onto your Bench. Shuffle your deck afterward.',
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless'],
            convertedRetreatCost: 1,
            set: {
              id: 'xy5',
              name: 'Primal Clash',
              series: 'XY',
              printedTotal: 160,
              total: 160,
              legalities: {
                unlimited: 'Legal',
                expanded: 'Legal',
              },
              ptcgoCode: 'PRC',
              releaseDate: '2015/02/04',
              updatedAt: '2020/05/01 16:06:00',
              images: {
                symbol: 'https://images.pokemontcg.io/xy5/symbol.png',
                logo: 'https://images.pokemontcg.io/xy5/logo.png',
              },
            },
            number: '1',
            artist: 'Midori Harada',
            rarity: 'Common',
            flavorText:
              'Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.',
            nationalPokedexNumbers: [13],
            legalities: {
              unlimited: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/xy5/1.png',
              large: 'https://images.pokemontcg.io/xy5/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/xy5-1',
              updatedAt: '2021/05/17',
              prices: {
                normal: {
                  low: 0.04,
                  mid: 0.23,
                  high: 1.0,
                  market: 0.11,
                  directLow: 0.1,
                },
                reverseHolofoil: {
                  low: 0.15,
                  mid: 0.38,
                  high: 1.95,
                  market: 0.23,
                  directLow: 0.29,
                },
              },
            },
          },
          {
            id: 'ex7-1',
            name: 'Azumarill',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            hp: '80',
            types: ['Water'],
            evolvesFrom: 'Marill',
            abilities: [
              {
                name: 'Froth',
                text:
                  'Once during your turn, when you play Azumarill from your hand to evolve 1 of your Active Pokémon, you may use this power. Each Defending Pokémon is now Paralyzed.',
                type: 'Poké-Power',
              },
            ],
            attacks: [
              {
                name: 'Water Punch',
                cost: ['Water', 'Colorless'],
                convertedEnergyCost: 2,
                damage: '20+',
                text:
                  'Flip a coin for each Water Energy attached to Azumarill. This attack does 20 damage plus 20 more damage for each heads.',
              },
            ],
            weaknesses: [
              {
                type: 'Lightning',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless'],
            convertedRetreatCost: 1,
            set: {
              id: 'ex7',
              name: 'Team Rocket Returns',
              series: 'EX',
              printedTotal: 109,
              total: 109,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'TRR',
              releaseDate: '2004/11/01',
              updatedAt: '2019/01/28 16:44:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ex7/symbol.png',
                logo: 'https://images.pokemontcg.io/ex7/logo.png',
              },
            },
            number: '1',
            artist: 'Sumiyoshi Kizuki',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [184],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ex7/1.png',
              large: 'https://images.pokemontcg.io/ex7/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ex7-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 2.71,
                  mid: 5.74,
                  high: 40.0,
                  market: 10.91,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 7.0,
                  mid: 8.99,
                  high: 60.0,
                  market: 4.26,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'ecard2-H1',
            name: 'Ampharos',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            hp: '100',
            types: ['Lightning'],
            evolvesFrom: 'Flaaffy',
            attacks: [
              {
                name: 'Thundershock',
                cost: ['Lightning'],
                convertedEnergyCost: 1,
                damage: '20',
                text:
                  'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
              },
              {
                name: 'Reflect Energy',
                cost: ['Lightning', 'Lightning', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '50',
                text:
                  'If you have any Benched Pokémon and if there are any basic Energy cards attached to Ampharos, take 1 of those Energy cards and attach it to 1 of those Pokémon.',
              },
            ],
            weaknesses: [
              {
                type: 'Fighting',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless'],
            convertedRetreatCost: 2,
            set: {
              id: 'ecard2',
              name: 'Aquapolis',
              series: 'E-Card',
              printedTotal: 186,
              total: 186,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'AQ',
              releaseDate: '2003/01/15',
              updatedAt: '2020/08/14 09:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ecard2/symbol.png',
                logo: 'https://images.pokemontcg.io/ecard2/logo.png',
              },
            },
            number: 'H1',
            artist: 'Shin-ichi Yoshida',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [181],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ecard2/H1.png',
              large: 'https://images.pokemontcg.io/ecard2/H1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ecard2-H1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 100.28,
                  mid: 140.98,
                  high: 167.03,
                  market: 141.91,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'ex3-1',
            name: 'Absol',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            hp: '70',
            types: ['Darkness'],
            attacks: [
              {
                name: 'Bad News',
                cost: ['Darkness'],
                convertedEnergyCost: 1,
                damage: '',
                text:
                  "If the number of cards in your opponent's hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left. Have your opponent discard the cards you chose.",
              },
              {
                name: 'Prize Count',
                cost: ['Darkness', 'Colorless'],
                convertedEnergyCost: 2,
                damage: '20+',
                text:
                  'If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage.',
              },
            ],
            weaknesses: [
              {
                type: 'Fighting',
                value: '×2',
              },
            ],
            resistances: [
              {
                type: 'Psychic',
                value: '-30',
              },
            ],
            retreatCost: ['Colorless'],
            convertedRetreatCost: 1,
            set: {
              id: 'ex3',
              name: 'Dragon',
              series: 'EX',
              printedTotal: 97,
              total: 97,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'DR',
              releaseDate: '2003/09/18',
              updatedAt: '2019/01/28 16:44:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ex3/symbol.png',
                logo: 'https://images.pokemontcg.io/ex3/logo.png',
              },
            },
            number: '1',
            artist: 'Naoyo Kimura',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [359],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ex3/1.png',
              large: 'https://images.pokemontcg.io/ex3/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ex3-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 22.98,
                  mid: 28.95,
                  high: 55.99,
                  market: 48.4,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 23.99,
                  mid: 30.0,
                  high: 39.49,
                  market: 24.95,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'hgss4-1',
            name: 'Aggron',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            hp: '140',
            types: ['Metal'],
            evolvesFrom: 'Lairon',
            attacks: [
              {
                name: 'Second Strike',
                cost: ['Metal', 'Metal', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '40',
                text:
                  'If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 40 more damage.',
              },
              {
                name: 'Guard Claw',
                cost: ['Metal', 'Metal', 'Colorless', 'Colorless'],
                convertedEnergyCost: 4,
                damage: '60',
                text:
                  "During your opponent's next turn, any damage done to Aggron by attacks is reduced by 20 (after applying Weakness and Resistance).",
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            resistances: [
              {
                type: 'Psychic',
                value: '-20',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 4,
            set: {
              id: 'hgss4',
              name: 'HS—Triumphant',
              series: 'HeartGold & SoulSilver',
              printedTotal: 102,
              total: 102,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'TM',
              releaseDate: '2010/11/03',
              updatedAt: '2018/03/04 10:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/hgss4/symbol.png',
                logo: 'https://images.pokemontcg.io/hgss4/logo.png',
              },
            },
            number: '1',
            artist: 'Kagemaru Himeno',
            rarity: 'Rare Holo',
            flavorText:
              'You can tell its age by the length of its iron horns. It claims an entire mountain as its territory.',
            nationalPokedexNumbers: [306],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/hgss4/1.png',
              large: 'https://images.pokemontcg.io/hgss4/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/hgss4-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 2.99,
                  mid: 3.91,
                  high: 5.49,
                  market: 2.35,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 3.95,
                  mid: 5.2,
                  high: 168.9,
                  market: 2.39,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'ex12-1',
            name: 'Aerodactyl',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            hp: '70',
            types: ['Colorless'],
            evolvesFrom: 'Mysterious Fossil',
            abilities: [
              {
                name: 'Reactive Protection',
                text:
                  "Any damage done to Aerodactyl by attacks from your opponent's Pokémon is reduced by 10 for each React Energy card attached to Aerodactyl (after applying Weakness and Resistance).",
                type: 'Poké-Body',
              },
            ],
            attacks: [
              {
                name: 'Power Blow',
                cost: ['Colorless'],
                convertedEnergyCost: 1,
                damage: '10+',
                text:
                  'Does 10 damage plus 10 more damage for each Energy attached to Aerodactyl.',
              },
              {
                name: 'Speed Stroke',
                cost: ['Colorless', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '40',
                text:
                  "During your opponent's next turn, prevent all effects, including damage, done to Aerodactyl by attacks from your opponent's Pokémon-ex.",
              },
            ],
            weaknesses: [
              {
                type: 'Lightning',
                value: '×2',
              },
            ],
            resistances: [
              {
                type: 'Fighting',
                value: '-30',
              },
            ],
            set: {
              id: 'ex12',
              name: 'Legend Maker',
              series: 'EX',
              printedTotal: 92,
              total: 93,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'LM',
              releaseDate: '2006/02/01',
              updatedAt: '2018/03/04 10:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ex12/symbol.png',
                logo: 'https://images.pokemontcg.io/ex12/logo.png',
              },
            },
            number: '1',
            artist: 'Hajime Kusajima',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [142],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ex12/1.png',
              large: 'https://images.pokemontcg.io/ex12/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ex12-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 10.0,
                  mid: 14.0,
                  high: 24.99,
                  market: 18.2,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 35.0,
                  mid: 40.0,
                  high: 45.0,
                  market: 4.37,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'base4-1',
            name: 'Alakazam',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            level: '42',
            hp: '80',
            types: ['Psychic'],
            evolvesFrom: 'Kadabra',
            abilities: [
              {
                name: 'Damage Swap',
                text:
                  "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
                type: 'Pokémon Power',
              },
            ],
            attacks: [
              {
                name: 'Confuse Ray',
                cost: ['Psychic', 'Psychic', 'Psychic'],
                convertedEnergyCost: 3,
                damage: '30',
                text:
                  'Flip a coin. If heads, the Defending Pokémon is now Confused.',
              },
            ],
            weaknesses: [
              {
                type: 'Psychic',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
            set: {
              id: 'base4',
              name: 'Base Set 2',
              series: 'Base',
              printedTotal: 130,
              total: 130,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'B2',
              releaseDate: '2000/02/24',
              updatedAt: '2020/08/14 09:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/base4/symbol.png',
                logo: 'https://images.pokemontcg.io/base4/logo.png',
              },
            },
            number: '1',
            artist: 'Ken Sugimori',
            rarity: 'Rare Holo',
            flavorText:
              'Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.',
            nationalPokedexNumbers: [65],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/base4/1.png',
              large: 'https://images.pokemontcg.io/base4/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/base4-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 15.0,
                  mid: 26.88,
                  high: 159.99,
                  market: 29.2,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'pl3-1',
            name: 'Absol G',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            level: '59',
            hp: '70',
            types: ['Darkness'],
            attacks: [
              {
                name: 'Feint Attack',
                cost: ['Darkness'],
                convertedEnergyCost: 1,
                damage: '',
                text:
                  "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
              },
              {
                name: 'Doom News',
                cost: ['Darkness', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '',
                text:
                  "Return all Energy cards attached to Absol G to your hand. The Defending Pokémon is Knocked Out at the end of your opponent's next turn.",
              },
            ],
            weaknesses: [
              {
                type: 'Fighting',
                value: '×2',
              },
            ],
            resistances: [
              {
                type: 'Psychic',
                value: '-20',
              },
            ],
            retreatCost: ['Colorless'],
            convertedRetreatCost: 1,
            set: {
              id: 'pl3',
              name: 'Supreme Victors',
              series: 'Platinum',
              printedTotal: 147,
              total: 150,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'SV',
              releaseDate: '2009/08/19',
              updatedAt: '2018/03/07 22:40:00',
              images: {
                symbol: 'https://images.pokemontcg.io/pl3/symbol.png',
                logo: 'https://images.pokemontcg.io/pl3/logo.png',
              },
            },
            number: '1',
            artist: 'Yusuke Ishikawa',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [359],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/pl3/1.png',
              large: 'https://images.pokemontcg.io/pl3/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/pl3-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 7.19,
                  mid: 8.12,
                  high: 9.05,
                  market: 4.44,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 2.75,
                  mid: 3.23,
                  high: 3.99,
                  market: 3.4,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'ru1-1',
            name: 'Venusaur',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            hp: '140',
            types: ['Grass'],
            evolvesFrom: 'Ivysaur',
            attacks: [
              {
                name: 'Giga Drain',
                cost: ['Grass', 'Grass', 'Colorless', 'Colorless'],
                convertedEnergyCost: 4,
                damage: '50',
                text:
                  'Remove from Venusaur the number of damage counters equal to the damage you did to the Defending Pokémon.',
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 4,
            set: {
              id: 'ru1',
              name: 'Pokémon Rumble',
              series: 'Other',
              printedTotal: 16,
              total: 16,
              legalities: {
                unlimited: 'Legal',
              },
              releaseDate: '2009/12/02',
              updatedAt: '2019/01/28 16:44:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ru1/symbol.png',
                logo: 'https://images.pokemontcg.io/ru1/logo.png',
              },
            },
            number: '1',
            artist: 'Pokemon Rumble',
            nationalPokedexNumbers: [3],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ru1/1.png',
              large: 'https://images.pokemontcg.io/ru1/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ru1-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 38.0,
                  mid: 46.5,
                  high: 55.0,
                  market: 39.0,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'hgss1-1',
            name: 'Arcanine',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            hp: '110',
            types: ['Fire'],
            evolvesFrom: 'Growlithe',
            attacks: [
              {
                name: 'Sharp Fang',
                cost: ['Fire', 'Colorless'],
                convertedEnergyCost: 2,
                damage: '50',
                text: '',
              },
              {
                name: 'Fire Mane',
                cost: ['Fire', 'Colorless', 'Colorless', 'Colorless'],
                convertedEnergyCost: 4,
                damage: '90',
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
              id: 'hgss1',
              name: 'HeartGold & SoulSilver',
              series: 'HeartGold & SoulSilver',
              printedTotal: 123,
              total: 123,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'HS',
              releaseDate: '2010/02/10',
              updatedAt: '2018/03/04 10:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/hgss1/symbol.png',
                logo: 'https://images.pokemontcg.io/hgss1/logo.png',
              },
            },
            number: '1',
            artist: 'Naoki Saito',
            rarity: 'Rare Holo',
            flavorText:
              'This legendary Chinese Pokémon is considered magnificent. Many people are enchanted by its grand mane.',
            nationalPokedexNumbers: [59],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/hgss1/1.png',
              large: 'https://images.pokemontcg.io/hgss1/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/hgss1-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 23.5,
                  mid: 31.54,
                  high: 42.99,
                  market: 31.19,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 42.91,
                  mid: 61.45,
                  high: 79.99,
                  market: 8.88,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'dp3-1',
            name: 'Ampharos',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            level: '52',
            hp: '130',
            types: ['Lightning'],
            evolvesFrom: 'Flaaffy',
            abilities: [
              {
                name: 'Jamming',
                text:
                  "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
                type: 'Poké-Body',
              },
            ],
            attacks: [
              {
                name: 'Cluster Bolt',
                cost: ['Lightning', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '70',
                text:
                  "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
              },
            ],
            weaknesses: [
              {
                type: 'Fighting',
                value: '+30',
              },
            ],
            resistances: [
              {
                type: 'Metal',
                value: '-20',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
            set: {
              id: 'dp3',
              name: 'Secret Wonders',
              series: 'Diamond & Pearl',
              printedTotal: 132,
              total: 132,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'SW',
              releaseDate: '2007/11/01',
              updatedAt: '2018/03/04 10:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/dp3/symbol.png',
                logo: 'https://images.pokemontcg.io/dp3/logo.png',
              },
            },
            number: '1',
            artist: 'Kouki Saitou',
            rarity: 'Rare Holo',
            flavorText:
              "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
            nationalPokedexNumbers: [181],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/dp3/1.png',
              large: 'https://images.pokemontcg.io/dp3/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/dp3-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 7.96,
                  mid: 14.07,
                  high: 20.18,
                  market: 6.8,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 5.0,
                  mid: 12.5,
                  high: 19.99,
                  market: 6.3,
                  directLow: 2.48,
                },
              },
            },
          },
          {
            id: 'ex11-1',
            name: 'Beedrill δ',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            hp: '90',
            types: ['Grass', 'Metal'],
            evolvesFrom: 'Kakuna',
            rules: ['This Pokémon is both Grass Metal type.'],
            abilities: [
              {
                name: 'Final Sting',
                text:
                  "Once during your turn (before your attack), you may Knock Out Beedrill. If you do, choose 1 of your opponent's Defending Pokémon. That Pokémon is now Paralyzed and Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns. This power can't be used if Beedrill is affected by a Special Condition.",
                type: 'Poké-Power',
              },
            ],
            attacks: [
              {
                name: 'Super Slash',
                cost: ['Grass', 'Metal', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '50+',
                text:
                  'If the Defending Pokémon is an Evolved Pokémon, this attack does 50 damage plus 30 more damage.',
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            set: {
              id: 'ex11',
              name: 'Delta Species',
              series: 'EX',
              printedTotal: 113,
              total: 114,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'DS',
              releaseDate: '2005/10/31',
              updatedAt: '2020/05/01 16:06:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ex11/symbol.png',
                logo: 'https://images.pokemontcg.io/ex11/logo.png',
              },
            },
            number: '1',
            artist: 'Masakazu Fukuda',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [15],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ex11/1.png',
              large: 'https://images.pokemontcg.io/ex11/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ex11-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 5.47,
                  mid: 9.99,
                  high: 19.99,
                  market: 10.82,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 12.98,
                  mid: 30.0,
                  high: 109.99,
                  market: 25.18,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'gym1-1',
            name: "Blaine's Moltres",
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            level: '44',
            hp: '90',
            types: ['Fire'],
            attacks: [
              {
                name: 'Phoenix Flame',
                cost: ['Fire', 'Fire', 'Fire', 'Fire', 'Fire'],
                convertedEnergyCost: 5,
                damage: '90',
                text:
                  "Flip a coin. If tails, shuffle Blaine's Moltres and all cards attached to it into your deck (after doing damage).",
              },
            ],
            resistances: [
              {
                type: 'Fighting',
                value: '-30',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
            set: {
              id: 'gym1',
              name: 'Gym Heroes',
              series: 'Gym',
              printedTotal: 132,
              total: 132,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'G1',
              releaseDate: '2000/08/14',
              updatedAt: '2020/08/14 09:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/gym1/symbol.png',
                logo: 'https://images.pokemontcg.io/gym1/logo.png',
              },
            },
            number: '1',
            artist: 'Ken Sugimori',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [146],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/gym1/1.png',
              large: 'https://images.pokemontcg.io/gym1/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/gym1-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 48.5,
                  mid: 79.99,
                  high: 279.0,
                  market: 72.75,
                  directLow: null,
                },
                '1stEditionHolofoil': {
                  low: 249.96,
                  mid: 249.99,
                  high: 400.99,
                  market: 274.95,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'base3-1',
            name: 'Aerodactyl',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            level: '28',
            hp: '60',
            types: ['Fighting'],
            evolvesFrom: 'Mysterious Fossil',
            abilities: [
              {
                name: 'Prehistoric Power',
                text:
                  'No more Evolution cards can be played. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.',
                type: 'Pokémon Power',
              },
            ],
            attacks: [
              {
                name: 'Wing Attack',
                cost: ['Colorless', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '30',
                text: '',
              },
            ],
            weaknesses: [
              {
                type: 'Grass',
                value: '×2',
              },
            ],
            resistances: [
              {
                type: 'Fighting',
                value: '-30',
              },
            ],
            retreatCost: ['Colorless', 'Colorless'],
            convertedRetreatCost: 2,
            set: {
              id: 'base3',
              name: 'Fossil',
              series: 'Base',
              printedTotal: 62,
              total: 62,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'FO',
              releaseDate: '1999/10/10',
              updatedAt: '2020/08/14 09:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/base3/symbol.png',
                logo: 'https://images.pokemontcg.io/base3/logo.png',
              },
            },
            number: '1',
            artist: 'Kagemaru Himeno',
            rarity: 'Rare Holo',
            flavorText:
              "A ferocious prehistoric Pokémon that goes for the enemy's throat with its serrated saw-like fangs.",
            nationalPokedexNumbers: [142],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/base3/1.png',
              large: 'https://images.pokemontcg.io/base3/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/base3-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 12.0,
                  mid: 20.0,
                  high: 100.0,
                  market: 25.28,
                  directLow: null,
                },
                '1stEditionHolofoil': {
                  low: 39.37,
                  mid: 88.0,
                  high: 140.0,
                  market: 110.0,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'sm9-1',
            name: 'Celebi & Venusaur-GX',
            supertype: 'Pokémon',
            subtypes: ['Basic', 'TAG TEAM', 'GX'],
            hp: '270',
            types: ['Grass'],
            rules: [
              'TAG TEAM rule: When your TAG TEAM is Knocked Out, your opponent takes 3 Prize cards.',
            ],
            attacks: [
              {
                name: 'Pollen Hazard',
                cost: ['Grass', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '50',
                text:
                  "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
              },
              {
                name: 'Solar Beam',
                cost: ['Grass', 'Grass', 'Colorless', 'Colorless'],
                convertedEnergyCost: 4,
                damage: '150',
                text: '',
              },
              {
                name: 'Evergreen-GX',
                cost: ['Grass', 'Grass', 'Colorless', 'Colorless'],
                convertedEnergyCost: 4,
                damage: '180',
                text:
                  "Heal all damage from this Pokémon. If this Pokémon has at least 1 extra Grass Energy attached to it (in addition to this attack's cost), shuffle all cards from your discard pile into your deck. (You can't use more than 1 GX attack in a game.)",
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 4,
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
            number: '1',
            artist: 'Mitsuhiro Arita',
            rarity: 'Rare Holo GX',
            nationalPokedexNumbers: [3, 251],
            legalities: {
              unlimited: 'Legal',
              standard: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/sm9/1.png',
              large: 'https://images.pokemontcg.io/sm9/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/sm9-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 4.5,
                  mid: 6.76,
                  high: 10.43,
                  market: 6.28,
                  directLow: 7.07,
                },
              },
            },
          },
          {
            id: 'xy2-1',
            name: 'Caterpie',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            hp: '40',
            types: ['Grass'],
            evolvesTo: ['Metapod'],
            abilities: [
              {
                name: 'Adaptive Evolution',
                text:
                  'This Pokémon can evolve during your first turn or the turn you play it.',
                type: 'Ability',
              },
            ],
            attacks: [
              {
                name: 'Bug Bite',
                cost: ['Grass'],
                convertedEnergyCost: 1,
                damage: '10',
                text: '',
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless'],
            convertedRetreatCost: 1,
            set: {
              id: 'xy2',
              name: 'Flashfire',
              series: 'XY',
              printedTotal: 106,
              total: 109,
              legalities: {
                unlimited: 'Legal',
                expanded: 'Legal',
              },
              ptcgoCode: 'FLF',
              releaseDate: '2014/05/07',
              updatedAt: '2018/03/04 10:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/xy2/symbol.png',
                logo: 'https://images.pokemontcg.io/xy2/logo.png',
              },
            },
            number: '1',
            artist: 'Sumiyoshi Kizuki',
            rarity: 'Common',
            flavorText:
              'For protection, it releases a horrible stench from the antennae on its head to drive away enemies.',
            nationalPokedexNumbers: [10],
            legalities: {
              unlimited: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/xy2/1.png',
              large: 'https://images.pokemontcg.io/xy2/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/xy2-1',
              updatedAt: '2021/05/17',
              prices: {
                normal: {
                  low: 0.08,
                  mid: 0.25,
                  high: 1.25,
                  market: 0.15,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 0.2,
                  mid: 0.39,
                  high: 1.95,
                  market: 0.28,
                  directLow: 0.24,
                },
              },
            },
          },
          {
            id: 'pop6-1',
            name: 'Bastiodon',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            level: '51',
            hp: '130',
            types: ['Metal'],
            evolvesFrom: 'Shieldon',
            abilities: [
              {
                name: 'Protective Wall',
                text:
                  "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
                type: 'Poké-Body',
              },
            ],
            attacks: [
              {
                name: 'Anger Revenge',
                cost: ['Metal', 'Metal', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '60',
                text:
                  "If Bastiodon was damaged by an attack during your opponent's last turn, this attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '+40',
              },
            ],
            resistances: [
              {
                type: 'Psychic',
                value: '-20',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
            set: {
              id: 'pop6',
              name: 'POP Series 6',
              series: 'POP',
              printedTotal: 17,
              total: 17,
              legalities: {
                unlimited: 'Legal',
              },
              releaseDate: '2007/09/01',
              updatedAt: '2020/05/01 16:06:00',
              images: {
                symbol: 'https://images.pokemontcg.io/pop6/symbol.png',
                logo: 'https://images.pokemontcg.io/pop6/logo.png',
              },
            },
            number: '1',
            artist: 'Kazuyuki Kano',
            rarity: 'Rare',
            flavorText:
              'Any frontal attack is repulsed. It is a docile Pokémon that feeds on grass and berries.',
            nationalPokedexNumbers: [411],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/pop6/1.png',
              large: 'https://images.pokemontcg.io/pop6/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/pop6-1',
              updatedAt: '2021/05/17',
              prices: {
                normal: {
                  low: 1.15,
                  mid: 1.8,
                  high: 3.5,
                  market: 1.47,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'hgss4-2',
            name: 'Altaria',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            hp: '90',
            types: ['Colorless'],
            evolvesFrom: 'Swablu',
            attacks: [
              {
                name: 'Midnight Eyes',
                cost: ['Colorless'],
                convertedEnergyCost: 1,
                damage: '20',
                text: 'The Defending Pokémon is now Asleep.',
              },
              {
                name: 'Stadium Power',
                cost: ['Colorless', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '40+',
                text:
                  'If there is any Stadium card in play, this attack does 40 damage plus 30 more damage.',
              },
            ],
            weaknesses: [
              {
                type: 'Colorless',
                value: '×2',
              },
            ],
            resistances: [
              {
                type: 'Fighting',
                value: '-20',
              },
            ],
            set: {
              id: 'hgss4',
              name: 'HS—Triumphant',
              series: 'HeartGold & SoulSilver',
              printedTotal: 102,
              total: 102,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'TM',
              releaseDate: '2010/11/03',
              updatedAt: '2018/03/04 10:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/hgss4/symbol.png',
                logo: 'https://images.pokemontcg.io/hgss4/logo.png',
              },
            },
            number: '2',
            artist: 'Ryo Ueda',
            rarity: 'Rare Holo',
            flavorText:
              "It flies gracefully through the sky. Its melodic humming makes you feel like you're in a dream.",
            nationalPokedexNumbers: [334],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/hgss4/2.png',
              large: 'https://images.pokemontcg.io/hgss4/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/hgss4-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 1.0,
                  mid: 3.0,
                  high: 4.01,
                  market: 1.36,
                  directLow: 3.98,
                },
                reverseHolofoil: {
                  low: 0.89,
                  mid: 1.43,
                  high: 2.99,
                  market: 0.84,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'ecard2-H2',
            name: 'Arcanine',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            hp: '90',
            types: ['Fire'],
            evolvesFrom: 'Growlithe',
            abilities: [
              {
                name: 'Extreme Speed',
                text:
                  'You pay Colorless less to retreat Arcanine for each Energy attached to it.',
                type: 'Poké-Body',
              },
            ],
            attacks: [
              {
                name: 'Fire Blow',
                cost: ['Colorless', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '30+',
                text:
                  'You may discard any number of Fire Energy cards attached to Arcanine when you use this attack. If you do, flip a number of coins equal to the number of Fire Energy cards you discarded. This attack does 30 damage plus 30 more damage for each heads.',
              },
            ],
            weaknesses: [
              {
                type: 'Water',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
            set: {
              id: 'ecard2',
              name: 'Aquapolis',
              series: 'E-Card',
              printedTotal: 186,
              total: 186,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'AQ',
              releaseDate: '2003/01/15',
              updatedAt: '2020/08/14 09:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ecard2/symbol.png',
                logo: 'https://images.pokemontcg.io/ecard2/logo.png',
              },
            },
            number: 'H2',
            artist: 'Kyoko Umemoto',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [59],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ecard2/H2.png',
              large: 'https://images.pokemontcg.io/ecard2/H2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ecard2-H2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 120.3,
                  mid: 227.86,
                  high: 499.99,
                  market: 179.49,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'xy2-2',
            name: 'Metapod',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            hp: '70',
            types: ['Grass'],
            evolvesFrom: 'Caterpie',
            evolvesTo: ['Butterfree'],
            abilities: [
              {
                name: 'Adaptive Evolution',
                text:
                  'This Pokémon can evolve during your first turn or the turn you play it.',
                type: 'Ability',
              },
            ],
            attacks: [
              {
                name: 'Harden',
                cost: ['Colorless', 'Colorless'],
                convertedEnergyCost: 2,
                damage: '',
                text:
                  "During your opponent's next turn, if this Pokémon would be damaged by an attack, prevent that attack's damage done to this Pokémon if that damage is 60 or less.",
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless'],
            convertedRetreatCost: 2,
            set: {
              id: 'xy2',
              name: 'Flashfire',
              series: 'XY',
              printedTotal: 106,
              total: 109,
              legalities: {
                unlimited: 'Legal',
                expanded: 'Legal',
              },
              ptcgoCode: 'FLF',
              releaseDate: '2014/05/07',
              updatedAt: '2018/03/04 10:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/xy2/symbol.png',
                logo: 'https://images.pokemontcg.io/xy2/logo.png',
              },
            },
            number: '2',
            artist: 'kawayoo',
            rarity: 'Uncommon',
            flavorText:
              'A steel-hard shell protects its tender body. It quietly endures hardships while awaiting evolution.',
            nationalPokedexNumbers: [11],
            legalities: {
              unlimited: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/xy2/2.png',
              large: 'https://images.pokemontcg.io/xy2/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/xy2-2',
              updatedAt: '2021/05/17',
              prices: {
                normal: {
                  low: 0.1,
                  mid: 0.25,
                  high: 0.99,
                  market: 0.16,
                  directLow: 0.14,
                },
                reverseHolofoil: {
                  low: 0.25,
                  mid: 0.47,
                  high: 1.95,
                  market: 0.45,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'pl1-2',
            name: 'Blastoise',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            level: '60',
            hp: '130',
            types: ['Water'],
            evolvesFrom: 'Wartortle',
            abilities: [
              {
                name: 'Dig Well',
                text:
                  "Once during your turn (before your attack), you may look at the top 3 cards of your deck, choose as many Water Energy cards as you like, and attach them to your Pokémon in any way you like. Discard the other cards. This power can't be used if Blastoise is affected by a Special Condition.",
                type: 'Poké-Power',
              },
            ],
            attacks: [
              {
                name: 'Aqua Press',
                cost: ['Water', 'Colorless'],
                convertedEnergyCost: 2,
                damage: '20+',
                text:
                  "Does 20 damage plus 10 more damage for each Energy attached to all Pokémon (both yours and your opponent's).",
              },
              {
                name: 'Double Launcher',
                cost: ['Water', 'Water', 'Colorless', 'Colorless'],
                convertedEnergyCost: 4,
                damage: '',
                text:
                  "Discard 2 Energy attached to Blastoise. Choose 2 of your opponent's Benched Pokémon. This attack does 60 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) Blastoise can't use Double Launcher during your next turn.",
              },
            ],
            weaknesses: [
              {
                type: 'Lightning',
                value: '+30',
              },
            ],
            retreatCost: ['Colorless', 'Colorless'],
            convertedRetreatCost: 2,
            set: {
              id: 'pl1',
              name: 'Platinum',
              series: 'Platinum',
              printedTotal: 127,
              total: 130,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'PL',
              releaseDate: '2009/02/11',
              updatedAt: '2020/08/14 09:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/pl1/symbol.png',
                logo: 'https://images.pokemontcg.io/pl1/logo.png',
              },
            },
            number: '2',
            artist: 'Kagemaru Himeno',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [9],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/pl1/2.png',
              large: 'https://images.pokemontcg.io/pl1/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/pl1-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 10.0,
                  mid: 14.49,
                  high: 19.99,
                  market: 18.3,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 39.95,
                  mid: 39.99,
                  high: 49.98,
                  market: 11.36,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'base4-2',
            name: 'Blastoise',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            level: '52',
            hp: '100',
            types: ['Water'],
            evolvesFrom: 'Wartortle',
            abilities: [
              {
                name: 'Rain Dance',
                text:
                  "As often as you like during your turn (before your attack), you may attach 1 Water Energy card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
                type: 'Pokémon Power',
              },
            ],
            attacks: [
              {
                name: 'Hydro Pump',
                cost: ['Water', 'Water', 'Water'],
                convertedEnergyCost: 3,
                damage: '40+',
                text:
                  "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
              },
            ],
            weaknesses: [
              {
                type: 'Lightning',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
            set: {
              id: 'base4',
              name: 'Base Set 2',
              series: 'Base',
              printedTotal: 130,
              total: 130,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'B2',
              releaseDate: '2000/02/24',
              updatedAt: '2020/08/14 09:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/base4/symbol.png',
                logo: 'https://images.pokemontcg.io/base4/logo.png',
              },
            },
            number: '2',
            artist: 'Ken Sugimori',
            rarity: 'Rare Holo',
            flavorText:
              'A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.',
            nationalPokedexNumbers: [9],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/base4/2.png',
              large: 'https://images.pokemontcg.io/base4/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/base4-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 54.8,
                  mid: 90.0,
                  high: 224.99,
                  market: 126.93,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'dp3-2',
            name: 'Blastoise',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            level: '52',
            hp: '120',
            types: ['Water'],
            evolvesFrom: 'Wartortle',
            abilities: [
              {
                name: 'Waterlog',
                text:
                  "Once during your turn (before your attack), you may attach as many basic Water Energy cards from your hand to any of your Pokémon in any way you like. If you do, your turn ends. This power can't be used if Blastoise is affected by a Special Condition.",
                type: 'Poké-Power',
              },
            ],
            attacks: [
              {
                name: 'Hydro Pump',
                cost: ['Water', 'Water', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '50+',
                text:
                  "Does 50 damage plus 20 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
              },
            ],
            weaknesses: [
              {
                type: 'Lightning',
                value: '+30',
              },
            ],
            retreatCost: ['Colorless', 'Colorless'],
            convertedRetreatCost: 2,
            set: {
              id: 'dp3',
              name: 'Secret Wonders',
              series: 'Diamond & Pearl',
              printedTotal: 132,
              total: 132,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'SW',
              releaseDate: '2007/11/01',
              updatedAt: '2018/03/04 10:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/dp3/symbol.png',
                logo: 'https://images.pokemontcg.io/dp3/logo.png',
              },
            },
            number: '2',
            artist: 'Daisuke Ito',
            rarity: 'Rare Holo',
            flavorText:
              'The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.',
            nationalPokedexNumbers: [9],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/dp3/2.png',
              large: 'https://images.pokemontcg.io/dp3/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/dp3-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 44.25,
                  mid: 48.67,
                  high: 49.66,
                  market: 23.26,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 21.29,
                  mid: 29.99,
                  high: 47.66,
                  market: 22.15,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'base3-2',
            name: 'Articuno',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            level: '35',
            hp: '70',
            types: ['Water'],
            attacks: [
              {
                name: 'Freeze Dry',
                cost: ['Water', 'Water', 'Water'],
                convertedEnergyCost: 3,
                damage: '30',
                text:
                  'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
              },
              {
                name: 'Blizzard',
                cost: ['Water', 'Water', 'Water', 'Water'],
                convertedEnergyCost: 4,
                damage: '50',
                text:
                  "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
              },
            ],
            resistances: [
              {
                type: 'Fighting',
                value: '-30',
              },
            ],
            retreatCost: ['Colorless', 'Colorless'],
            convertedRetreatCost: 2,
            set: {
              id: 'base3',
              name: 'Fossil',
              series: 'Base',
              printedTotal: 62,
              total: 62,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'FO',
              releaseDate: '1999/10/10',
              updatedAt: '2020/08/14 09:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/base3/symbol.png',
                logo: 'https://images.pokemontcg.io/base3/logo.png',
              },
            },
            number: '2',
            artist: 'Mitsuhiro Arita',
            rarity: 'Rare Holo',
            flavorText:
              'A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.',
            nationalPokedexNumbers: [144],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/base3/2.png',
              large: 'https://images.pokemontcg.io/base3/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/base3-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 30.0,
                  mid: 36.07,
                  high: 58.45,
                  market: 43.22,
                  directLow: null,
                },
                '1stEditionHolofoil': {
                  low: 91.89,
                  mid: 129.6,
                  high: 249.99,
                  market: 210.48,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'pl3-2',
            name: 'Blaziken FB',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            level: '50',
            hp: '80',
            types: ['Fire'],
            attacks: [
              {
                name: 'Luring Flame',
                cost: ['Fire'],
                convertedEnergyCost: 1,
                damage: '',
                text:
                  "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Burned.",
              },
              {
                name: 'Vapor Kick',
                cost: ['Fire', 'Colorless'],
                convertedEnergyCost: 2,
                damage: '30+',
                text:
                  'If your opponent has any Water Pokémon in play, this attack does 30 damage plus 30 more damage.',
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
              id: 'pl3',
              name: 'Supreme Victors',
              series: 'Platinum',
              printedTotal: 147,
              total: 150,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'SV',
              releaseDate: '2009/08/19',
              updatedAt: '2018/03/07 22:40:00',
              images: {
                symbol: 'https://images.pokemontcg.io/pl3/symbol.png',
                logo: 'https://images.pokemontcg.io/pl3/logo.png',
              },
            },
            number: '2',
            artist: 'Motofumi Fujiwara',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [257],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/pl3/2.png',
              large: 'https://images.pokemontcg.io/pl3/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/pl3-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 6.22,
                  mid: 7.99,
                  high: 13.81,
                  market: 8.5,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 6.15,
                  mid: 8.03,
                  high: 9.91,
                  market: 5.46,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'pop6-2',
            name: 'Lucario',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            level: '30',
            hp: '90',
            types: ['Fighting'],
            evolvesFrom: 'Riolu',
            attacks: [
              {
                name: 'Feint',
                cost: ['Colorless'],
                convertedEnergyCost: 1,
                damage: '30',
                text: "This attack's damage isn't affected by Resistance.",
              },
              {
                name: 'Aura Sphere',
                cost: ['Fighting', 'Fighting'],
                convertedEnergyCost: 2,
                damage: '40',
                text:
                  "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
              },
            ],
            weaknesses: [
              {
                type: 'Psychic',
                value: '+20',
              },
            ],
            retreatCost: ['Colorless'],
            convertedRetreatCost: 1,
            set: {
              id: 'pop6',
              name: 'POP Series 6',
              series: 'POP',
              printedTotal: 17,
              total: 17,
              legalities: {
                unlimited: 'Legal',
              },
              releaseDate: '2007/09/01',
              updatedAt: '2020/05/01 16:06:00',
              images: {
                symbol: 'https://images.pokemontcg.io/pop6/symbol.png',
                logo: 'https://images.pokemontcg.io/pop6/logo.png',
              },
            },
            number: '2',
            artist: 'Kouki Saitou',
            rarity: 'Rare',
            flavorText:
              'It has the ability to sense the auras of all things. It understands human speech.',
            nationalPokedexNumbers: [448],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/pop6/2.png',
              large: 'https://images.pokemontcg.io/pop6/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/pop6-2',
              updatedAt: '2021/05/17',
              prices: {
                normal: {
                  low: 1.67,
                  mid: 2.2,
                  high: 2.99,
                  market: 2.34,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'ex3-2',
            name: 'Altaria',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            hp: '80',
            types: ['Colorless'],
            evolvesFrom: 'Swablu',
            attacks: [
              {
                name: 'Dragon Dance',
                cost: ['Colorless'],
                convertedEnergyCost: 1,
                damage: '',
                text:
                  'During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, this attack does 40 more damage (before applying Weakness and Resistance).',
              },
              {
                name: 'Dragon Song',
                cost: ['Water', 'Lightning'],
                convertedEnergyCost: 2,
                damage: '30',
                text: 'Each Defending Pokémon is now Asleep.',
              },
            ],
            weaknesses: [
              {
                type: 'Colorless',
                value: '×2',
              },
            ],
            resistances: [
              {
                type: 'Grass',
                value: '-30',
              },
              {
                type: 'Fighting',
                value: '-30',
              },
            ],
            retreatCost: ['Colorless'],
            convertedRetreatCost: 1,
            set: {
              id: 'ex3',
              name: 'Dragon',
              series: 'EX',
              printedTotal: 97,
              total: 97,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'DR',
              releaseDate: '2003/09/18',
              updatedAt: '2019/01/28 16:44:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ex3/symbol.png',
                logo: 'https://images.pokemontcg.io/ex3/logo.png',
              },
            },
            number: '2',
            artist: 'Atsuko Nishida',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [334],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ex3/2.png',
              large: 'https://images.pokemontcg.io/ex3/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ex3-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 20.99,
                  mid: 24.59,
                  high: 31.3,
                  market: 23.12,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 19.9,
                  mid: 19.99,
                  high: 25.0,
                  market: 12.47,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'ex11-2',
            name: 'Crobat δ',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            hp: '90',
            types: ['Grass', 'Metal'],
            evolvesFrom: 'Golbat',
            rules: ['This Pokémon is both Grass Metal type.'],
            attacks: [
              {
                name: 'Radar Jam',
                cost: ['Colorless', 'Colorless'],
                convertedEnergyCost: 2,
                damage: '30',
                text:
                  "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
              },
              {
                name: 'Target Attack',
                cost: ['Grass', 'Metal', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '',
                text:
                  "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. If that Pokémon already has damage counters on it, this attack does 60 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
              },
            ],
            weaknesses: [
              {
                type: 'Psychic',
                value: '×2',
              },
            ],
            set: {
              id: 'ex11',
              name: 'Delta Species',
              series: 'EX',
              printedTotal: 113,
              total: 114,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'DS',
              releaseDate: '2005/10/31',
              updatedAt: '2020/05/01 16:06:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ex11/symbol.png',
                logo: 'https://images.pokemontcg.io/ex11/logo.png',
              },
            },
            number: '2',
            artist: 'Ryo Ueda',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [169],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ex11/2.png',
              large: 'https://images.pokemontcg.io/ex11/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ex11-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 6.5,
                  mid: 8.44,
                  high: 12.0,
                  market: 4.98,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 14.99,
                  mid: 15.0,
                  high: 640.71,
                  market: 6.49,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'gym1-2',
            name: "Brock's Rhydon",
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            level: '38',
            hp: '80',
            types: ['Fighting'],
            evolvesFrom: "Brock's Rhyhorn",
            evolvesTo: ['Rhyperior'],
            abilities: [
              {
                name: 'Bench Guard',
                text:
                  "As long as Brock's Rhydon is Benched, whenever 1 of your Benched Pokémon is damaged, you may do 10 of that damage to Brock's Rhydon instead. (If more than 1 of your Benched Pokémon is damaged at the same time, you may use this power once for each of them.)",
                type: 'Pokémon Power',
              },
            ],
            attacks: [
              {
                name: 'Lariat',
                cost: ['Fighting', 'Fighting', 'Colorless', 'Colorless'],
                convertedEnergyCost: 4,
                damage: '70',
                text: 'Flip a coin. If tails, this attack does nothing.',
              },
            ],
            weaknesses: [
              {
                type: 'Grass',
                value: '×2',
              },
            ],
            resistances: [
              {
                type: 'Lightning',
                value: '-30',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
            set: {
              id: 'gym1',
              name: 'Gym Heroes',
              series: 'Gym',
              printedTotal: 132,
              total: 132,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'G1',
              releaseDate: '2000/08/14',
              updatedAt: '2020/08/14 09:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/gym1/symbol.png',
                logo: 'https://images.pokemontcg.io/gym1/logo.png',
              },
            },
            number: '2',
            artist: 'Ken Sugimori',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [112],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/gym1/2.png',
              large: 'https://images.pokemontcg.io/gym1/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/gym1-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 9.99,
                  mid: 19.99,
                  high: 1009.0,
                  market: 19.14,
                  directLow: null,
                },
                '1stEditionHolofoil': {
                  low: 79.99,
                  mid: 98.99,
                  high: 129.99,
                  market: 98.0,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'sm9-2',
            name: 'Weedle',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            hp: '40',
            types: ['Grass'],
            evolvesTo: ['Kakuna'],
            attacks: [
              {
                name: 'Tangle Drag',
                cost: ['Grass'],
                convertedEnergyCost: 1,
                damage: '',
                text:
                  "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
              },
              {
                name: 'Bug Bite',
                cost: ['Grass'],
                convertedEnergyCost: 1,
                damage: '10',
                text: '',
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
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
            number: '2',
            artist: 'Shibuzoh.',
            rarity: 'Common',
            flavorText:
              'Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.',
            nationalPokedexNumbers: [13],
            legalities: {
              unlimited: 'Legal',
              standard: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/sm9/2.png',
              large: 'https://images.pokemontcg.io/sm9/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/sm9-2',
              updatedAt: '2021/05/17',
              prices: {
                normal: {
                  low: 0.02,
                  mid: 0.23,
                  high: 0.99,
                  market: 0.13,
                  directLow: 0.11,
                },
                reverseHolofoil: {
                  low: 0.2,
                  mid: 0.38,
                  high: 1.41,
                  market: 0.3,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'mcd19-2',
            name: 'Alolan Exeggutor',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            hp: '160',
            types: ['Grass'],
            evolvesFrom: 'Exeggcute',
            attacks: [
              {
                cost: ['Grass'],
                name: 'Tropical Shake',
                text:
                  "This attack does 20 more damage for each type of basic Energy card in your discard pile. You can't add more than 100 damage in this way.",
                damage: '20+',
                convertedEnergyCost: 1,
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
            set: {
              id: 'mcd19',
              name: "McDonald's Collection 2019",
              series: 'Other',
              printedTotal: 12,
              total: 12,
              legalities: {
                unlimited: 'Legal',
              },
              releaseDate: '2019/10/15',
              updatedAt: '2020/11/11 13:00:00',
              images: {
                symbol: 'https://images.pokemontcg.io/mcd19/symbol.png',
                logo: 'https://images.pokemontcg.io/mcd19/logo.png',
              },
            },
            number: '2',
            artist: 'Satoshi Shirai',
            rarity: 'Promo',
            nationalPokedexNumbers: [103],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/mcd19/2.png',
              large: 'https://images.pokemontcg.io/mcd19/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/mcd19-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 1.45,
                  mid: 2.08,
                  high: 4.73,
                  market: 2.91,
                  directLow: 1.72,
                },
              },
            },
          },
          {
            id: 'ru1-2',
            name: 'Cherrim',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            hp: '80',
            types: ['Grass'],
            evolvesFrom: 'Cherubi',
            attacks: [
              {
                name: 'Solarbeam',
                cost: ['Grass', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '60',
                text: '',
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            resistances: [
              {
                type: 'Water',
                value: '-20',
              },
            ],
            retreatCost: ['Colorless'],
            convertedRetreatCost: 1,
            set: {
              id: 'ru1',
              name: 'Pokémon Rumble',
              series: 'Other',
              printedTotal: 16,
              total: 16,
              legalities: {
                unlimited: 'Legal',
              },
              releaseDate: '2009/12/02',
              updatedAt: '2019/01/28 16:44:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ru1/symbol.png',
                logo: 'https://images.pokemontcg.io/ru1/logo.png',
              },
            },
            number: '2',
            artist: 'Pokemon Rumble',
            nationalPokedexNumbers: [421],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ru1/2.png',
              large: 'https://images.pokemontcg.io/ru1/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ru1-2',
              updatedAt: '2021/05/17',
              prices: {
                normal: {
                  low: 12.95,
                  mid: 13.94,
                  high: 20.0,
                  market: 10.0,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'hgss1-2',
            name: 'Azumarill',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            hp: '90',
            types: ['Water'],
            evolvesFrom: 'Marill',
            attacks: [
              {
                name: 'Waterfall',
                cost: ['Water', 'Water'],
                convertedEnergyCost: 2,
                damage: '40',
                text: '',
              },
              {
                name: 'Bubblebeam',
                cost: ['Water', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '60',
                text:
                  'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
              },
            ],
            weaknesses: [
              {
                type: 'Lightning',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless'],
            convertedRetreatCost: 2,
            set: {
              id: 'hgss1',
              name: 'HeartGold & SoulSilver',
              series: 'HeartGold & SoulSilver',
              printedTotal: 123,
              total: 123,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'HS',
              releaseDate: '2010/02/10',
              updatedAt: '2018/03/04 10:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/hgss1/symbol.png',
                logo: 'https://images.pokemontcg.io/hgss1/logo.png',
              },
            },
            number: '2',
            artist: 'Kouki Saitou',
            rarity: 'Rare Holo',
            flavorText:
              'When it plays in water, it rolls up its elongated ears to prevent their insides from getting wet.',
            nationalPokedexNumbers: [184],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/hgss1/2.png',
              large: 'https://images.pokemontcg.io/hgss1/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/hgss1-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 0.7,
                  mid: 1.25,
                  high: 7.0,
                  market: 2.45,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 1.49,
                  mid: 6.39,
                  high: 7.99,
                  market: 1.27,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'xy5-2',
            name: 'Kakuna',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            hp: '80',
            types: ['Grass'],
            evolvesFrom: 'Weedle',
            evolvesTo: ['Beedrill'],
            attacks: [
              {
                name: 'Bug Bite',
                cost: ['Grass'],
                convertedEnergyCost: 1,
                damage: '20',
                text: '',
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
            set: {
              id: 'xy5',
              name: 'Primal Clash',
              series: 'XY',
              printedTotal: 160,
              total: 160,
              legalities: {
                unlimited: 'Legal',
                expanded: 'Legal',
              },
              ptcgoCode: 'PRC',
              releaseDate: '2015/02/04',
              updatedAt: '2020/05/01 16:06:00',
              images: {
                symbol: 'https://images.pokemontcg.io/xy5/symbol.png',
                logo: 'https://images.pokemontcg.io/xy5/logo.png',
              },
            },
            number: '2',
            artist: 'Kagemaru Himeno',
            rarity: 'Uncommon',
            flavorText:
              'While awaiting evolution, it hides from predators under leaves and in nooks of branches.',
            nationalPokedexNumbers: [14],
            legalities: {
              unlimited: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/xy5/2.png',
              large: 'https://images.pokemontcg.io/xy5/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/xy5-2',
              updatedAt: '2021/05/17',
              prices: {
                normal: {
                  low: 0.06,
                  mid: 0.25,
                  high: 1.25,
                  market: 0.14,
                  directLow: 0.12,
                },
                reverseHolofoil: {
                  low: 0.04,
                  mid: 0.39,
                  high: 1.95,
                  market: 0.23,
                  directLow: 0.2,
                },
              },
            },
          },
          {
            id: 'ex7-2',
            name: 'Dark Ampharos',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            hp: '120',
            types: ['Lightning', 'Darkness'],
            evolvesFrom: 'Dark Flaaffy',
            rules: ['This Pokémon is both Lightning Darkness type.'],
            abilities: [
              {
                name: 'Darkest Impulse',
                text:
                  "As long as Dark Ampharos is in play, whenever your opponent plays an Evolution card from his or her hand to evolve 1 of his or her Pokémon, put 2 damage counters on that Pokémon. You can't use more than 1 Darkest Impulse Poké-Body each turn.",
                type: 'Poké-Body',
              },
            ],
            attacks: [
              {
                name: 'Ram',
                cost: ['Colorless', 'Colorless'],
                convertedEnergyCost: 2,
                damage: '30',
                text: '',
              },
              {
                name: 'Shock Bolt',
                cost: ['Lightning', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '70',
                text: 'Discard all Lightning Energy attached to Dark Ampharos.',
              },
            ],
            weaknesses: [
              {
                type: 'Fighting',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless'],
            convertedRetreatCost: 2,
            set: {
              id: 'ex7',
              name: 'Team Rocket Returns',
              series: 'EX',
              printedTotal: 109,
              total: 109,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'TRR',
              releaseDate: '2004/11/01',
              updatedAt: '2019/01/28 16:44:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ex7/symbol.png',
                logo: 'https://images.pokemontcg.io/ex7/logo.png',
              },
            },
            number: '2',
            artist: 'Emi Miwa',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [181],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ex7/2.png',
              large: 'https://images.pokemontcg.io/ex7/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ex7-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 30.0,
                  mid: 45.5,
                  high: 100.0,
                  market: 37.25,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 41.94,
                  mid: 54.49,
                  high: 69.99,
                  market: 67.95,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'det1-2',
            name: 'Ludicolo',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            hp: '140',
            types: ['Grass'],
            evolvesFrom: 'Lombre',
            abilities: [
              {
                name: 'Table Service',
                text:
                  'Once during your turn (before your attack), you may heal 30 damage from 1 of your Pokémon.',
                type: 'Ability',
              },
            ],
            attacks: [
              {
                name: 'Punch and Run',
                cost: ['Grass', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '70',
                text: 'Switch this Pokémon with 1 of your Benched Pokémon.',
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
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
            number: '2',
            artist: 'Framestore',
            rarity: 'Rare',
            flavorText:
              "If it hears festive music, all its muscles fill with energy. It can't help breaking out into a dance.",
            nationalPokedexNumbers: [272],
            legalities: {
              unlimited: 'Legal',
              standard: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/det1/2.png',
              large: 'https://images.pokemontcg.io/det1/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/det1-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 0.18,
                  mid: 0.78,
                  high: 2.86,
                  market: 0.78,
                  directLow: 0.94,
                },
              },
            },
          },
          {
            id: 'ex12-2',
            name: 'Aggron',
            supertype: 'Pokémon',
            subtypes: ['Stage 2'],
            hp: '110',
            types: ['Metal'],
            evolvesFrom: 'Lairon',
            attacks: [
              {
                name: 'Heavy Blow',
                cost: ['Fighting', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '70-',
                text:
                  'Does 70 damage minus 10 damage for each damage counter on Aggron. If Aggron has any React Energy cards attached to it, this attack does 70 damage instead.',
              },
              {
                name: 'Bound Crush',
                cost: ['Fighting', 'Metal', 'Colorless', 'Colorless'],
                convertedEnergyCost: 4,
                damage: '',
                text:
                  "Choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) During your next turn, Aggron can't use Bound Crush.",
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            resistances: [
              {
                type: 'Grass',
                value: '-30',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 4,
            set: {
              id: 'ex12',
              name: 'Legend Maker',
              series: 'EX',
              printedTotal: 92,
              total: 93,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'LM',
              releaseDate: '2006/02/01',
              updatedAt: '2018/03/04 10:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ex12/symbol.png',
                logo: 'https://images.pokemontcg.io/ex12/logo.png',
              },
            },
            number: '2',
            artist: 'Hisao Nakamura',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [306],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ex12/2.png',
              large: 'https://images.pokemontcg.io/ex12/2_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ex12-2',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 7.0,
                  mid: 15.0,
                  high: 17.0,
                  market: 16.06,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 14.98,
                  mid: 18.69,
                  high: 22.4,
                  market: 15.28,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'xy11-1',
            name: 'Tangela',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            hp: '80',
            types: ['Grass'],
            evolvesTo: ['Tangrowth'],
            attacks: [
              {
                name: 'Slam',
                cost: ['Grass', 'Colorless'],
                convertedEnergyCost: 2,
                damage: '30×',
                text:
                  'Flip 2 coins. This attack does 30 damage times the number of heads.',
              },
              {
                name: 'Mega Drain',
                cost: ['Grass', 'Grass', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '40',
                text: 'Heal 20 damage from this Pokémon.',
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
            set: {
              id: 'xy11',
              name: 'Steam Siege',
              series: 'XY',
              printedTotal: 114,
              total: 116,
              legalities: {
                unlimited: 'Legal',
                expanded: 'Legal',
              },
              ptcgoCode: 'STS',
              releaseDate: '2016/08/03',
              updatedAt: '2019/04/10 19:59:00',
              images: {
                symbol: 'https://images.pokemontcg.io/xy11/symbol.png',
                logo: 'https://images.pokemontcg.io/xy11/logo.png',
              },
            },
            number: '1',
            artist: 'OOYAMA',
            rarity: 'Common',
            flavorText:
              'It tangles any moving thing with its vines. Their subtle shaking is ticklish if you get ensnared.',
            nationalPokedexNumbers: [114],
            legalities: {
              unlimited: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/xy11/1.png',
              large: 'https://images.pokemontcg.io/xy11/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/xy11-1',
              updatedAt: '2021/05/17',
              prices: {
                normal: {
                  low: 0.01,
                  mid: 0.2,
                  high: 1.0,
                  market: 0.1,
                  directLow: 0.1,
                },
                reverseHolofoil: {
                  low: 0.07,
                  mid: 0.3,
                  high: 1.18,
                  market: 0.22,
                  directLow: 0.25,
                },
              },
            },
          },
          {
            id: 'sm12-1',
            name: 'Venusaur & Snivy-GX',
            supertype: 'Pokémon',
            subtypes: ['Basic', 'TAG TEAM', 'GX'],
            hp: '270',
            types: ['Grass'],
            evolvesTo: ['Servine'],
            rules: [
              'TAG TEAM rule: When your TAG TEAM is Knocked Out, your opponent takes 3 Prize cards.',
            ],
            abilities: [
              {
                name: 'Shining Vine',
                text:
                  "Once during your turn, if this Pokémon is your Active Pokémon, when you attach a Grass Energy card from your hand to it, you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
                type: 'Ability',
              },
            ],
            attacks: [
              {
                name: 'Forest Dump',
                cost: ['Grass', 'Colorless', 'Colorless', 'Colorless'],
                convertedEnergyCost: 4,
                damage: '160',
                text: '',
              },
              {
                name: 'Solar Plant-GX',
                cost: ['Colorless', 'Colorless', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '',
                text:
                  "This attack does 50 damage to each of your opponent's Pokémon. If this Pokémon has at least 2 extra Energy attached to it (in addition to this attack's cost), heal all damage from all of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
            set: {
              id: 'sm12',
              name: 'Cosmic Eclipse',
              series: 'Sun & Moon',
              printedTotal: 236,
              total: 271,
              legalities: {
                unlimited: 'Legal',
                standard: 'Legal',
                expanded: 'Legal',
              },
              ptcgoCode: 'CEC',
              releaseDate: '2019/11/01',
              updatedAt: '2020/08/14 09:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/sm12/symbol.png',
                logo: 'https://images.pokemontcg.io/sm12/logo.png',
              },
            },
            number: '1',
            artist: 'Mitsuhiro Arita',
            rarity: 'Rare Holo GX',
            nationalPokedexNumbers: [3, 495],
            legalities: {
              unlimited: 'Legal',
              standard: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/sm12/1.png',
              large: 'https://images.pokemontcg.io/sm12/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/sm12-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 2.8,
                  mid: 4.94,
                  high: 9.99,
                  market: 3.94,
                  directLow: 4.69,
                },
              },
            },
          },
          {
            id: 'ex14-1',
            name: 'Banette',
            supertype: 'Pokémon',
            subtypes: ['Stage 1'],
            hp: '70',
            types: ['Psychic'],
            evolvesFrom: 'Shuppet',
            abilities: [
              {
                name: 'Safeguard',
                text:
                  "Prevent all effects of attacks, including damage, done to Banette by your opponent's Pokémon-ex.",
                type: 'Poké-Body',
              },
            ],
            attacks: [
              {
                name: 'Night Murmurs',
                cost: ['Psychic', 'Colorless'],
                convertedEnergyCost: 2,
                damage: '30',
                text:
                  'If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused.',
              },
            ],
            weaknesses: [
              {
                type: 'Darkness',
                value: '×2',
              },
            ],
            resistances: [
              {
                type: 'Fighting',
                value: '-30',
              },
            ],
            retreatCost: ['Colorless'],
            convertedRetreatCost: 1,
            set: {
              id: 'ex14',
              name: 'Crystal Guardians',
              series: 'EX',
              printedTotal: 100,
              total: 100,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'CG',
              releaseDate: '2006/08/01',
              updatedAt: '2018/03/04 10:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/ex14/symbol.png',
                logo: 'https://images.pokemontcg.io/ex14/logo.png',
              },
            },
            number: '1',
            artist: 'Kyoko Umemoto',
            rarity: 'Rare Holo',
            nationalPokedexNumbers: [354],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/ex14/1.png',
              large: 'https://images.pokemontcg.io/ex14/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/ex14-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 1.75,
                  mid: 2.85,
                  high: 11.69,
                  market: 2.37,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 2.5,
                  mid: 4.31,
                  high: 19.99,
                  market: 4.16,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'swsh35-1',
            name: 'Venusaur V',
            supertype: 'Pokémon',
            subtypes: ['Basic', 'V'],
            hp: '220',
            types: ['Grass'],
            rules: [
              'V rule: When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards.',
            ],
            attacks: [
              {
                name: 'Pollen Bomb',
                cost: ['Grass', 'Grass', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '80',
                text:
                  "Your opponent's Active Pokémon is now Asleep and Poisoned.",
              },
              {
                name: 'Solar Typhoon',
                cost: ['Grass', 'Grass', 'Grass', 'Colorless'],
                convertedEnergyCost: 4,
                damage: '220',
                text:
                  "During your next turn, this Pokémon can't use Solar Typhoon.",
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless', 'Colorless', 'Colorless'],
            convertedRetreatCost: 3,
            set: {
              id: 'swsh35',
              name: "Champion's Path",
              series: 'Sword & Shield',
              printedTotal: 73,
              total: 80,
              legalities: {
                unlimited: 'Legal',
                standard: 'Legal',
                expanded: 'Legal',
              },
              ptcgoCode: 'CPA',
              releaseDate: '2020/09/25',
              updatedAt: '2020/10/25 13:45:00',
              images: {
                symbol: 'https://images.pokemontcg.io/swsh35/symbol.png',
                logo: 'https://images.pokemontcg.io/swsh35/logo.png',
              },
            },
            number: '1',
            artist: 'PLANETA Mochizuki',
            rarity: 'Rare Holo V',
            nationalPokedexNumbers: [3],
            legalities: {
              unlimited: 'Legal',
              standard: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/swsh35/1.png',
              large: 'https://images.pokemontcg.io/swsh35/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/swsh35-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 1.0,
                  mid: 2.46,
                  high: 19.95,
                  market: 2.1,
                  directLow: 3.16,
                },
              },
            },
          },
          {
            id: 'bw10-1',
            name: 'Surskit',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            hp: '50',
            types: ['Grass'],
            evolvesTo: ['Masquerain'],
            attacks: [
              {
                name: 'Sweet Scent',
                cost: ['Grass'],
                convertedEnergyCost: 1,
                damage: '',
                text: 'Heal 20 damage from 1 of your Pokémon.',
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '×2',
              },
            ],
            retreatCost: ['Colorless'],
            convertedRetreatCost: 1,
            set: {
              id: 'bw10',
              name: 'Plasma Blast',
              series: 'Black & White',
              printedTotal: 101,
              total: 105,
              legalities: {
                unlimited: 'Legal',
                expanded: 'Legal',
              },
              ptcgoCode: 'PLB',
              releaseDate: '2013/08/14',
              updatedAt: '2018/03/04 10:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/bw10/symbol.png',
                logo: 'https://images.pokemontcg.io/bw10/logo.png',
              },
            },
            number: '1',
            artist: 'Naoyo Kimura',
            rarity: 'Common',
            flavorText:
              'It appears as if it is skating on water. It draws prey with a sweet scent from the tip of its head.',
            nationalPokedexNumbers: [283],
            legalities: {
              unlimited: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/bw10/1.png',
              large: 'https://images.pokemontcg.io/bw10/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/bw10-1',
              updatedAt: '2021/05/17',
              prices: {
                normal: {
                  low: 0.05,
                  mid: 0.25,
                  high: 1.13,
                  market: 0.17,
                  directLow: 0.1,
                },
                reverseHolofoil: {
                  low: 0.14,
                  mid: 0.38,
                  high: 2.0,
                  market: 0.35,
                  directLow: 0.2,
                },
              },
            },
          },
          {
            id: 'dp1-1',
            name: 'Dialga',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            level: '68',
            hp: '90',
            types: ['Metal'],
            attacks: [
              {
                name: 'Time Bellow',
                cost: ['Metal'],
                convertedEnergyCost: 1,
                damage: '10',
                text: 'Draw a card.',
              },
              {
                name: 'Flash Cannon',
                cost: ['Metal', 'Metal', 'Colorless'],
                convertedEnergyCost: 3,
                damage: '40',
                text:
                  "You may return all Energy cards attached to Dialga to your hand. If you do, remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck.",
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
                value: '+20',
              },
            ],
            resistances: [
              {
                type: 'Psychic',
                value: '-20',
              },
            ],
            retreatCost: ['Colorless', 'Colorless'],
            convertedRetreatCost: 2,
            set: {
              id: 'dp1',
              name: 'Diamond & Pearl',
              series: 'Diamond & Pearl',
              printedTotal: 130,
              total: 130,
              legalities: {
                unlimited: 'Legal',
              },
              ptcgoCode: 'DP',
              releaseDate: '2007/05/01',
              updatedAt: '2020/08/14 09:35:00',
              images: {
                symbol: 'https://images.pokemontcg.io/dp1/symbol.png',
                logo: 'https://images.pokemontcg.io/dp1/logo.png',
              },
            },
            number: '1',
            artist: 'Nakaoka',
            rarity: 'Rare Holo',
            flavorText:
              'It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.',
            nationalPokedexNumbers: [483],
            legalities: {
              unlimited: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/dp1/1.png',
              large: 'https://images.pokemontcg.io/dp1/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/dp1-1',
              updatedAt: '2021/05/17',
              prices: {
                holofoil: {
                  low: 5.99,
                  mid: 7.61,
                  high: 19.99,
                  market: 7.94,
                  directLow: null,
                },
                reverseHolofoil: {
                  low: 0.73,
                  mid: 5.15,
                  high: 5.67,
                  market: 1.36,
                  directLow: null,
                },
              },
            },
          },
          {
            id: 'sm115-1',
            name: 'Caterpie',
            supertype: 'Pokémon',
            subtypes: ['Basic'],
            hp: '60',
            types: ['Grass'],
            evolvesTo: ['Metapod'],
            attacks: [
              {
                name: 'Tackle',
                cost: ['Grass'],
                convertedEnergyCost: 1,
                damage: '10',
                text: '',
              },
            ],
            weaknesses: [
              {
                type: 'Fire',
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
            number: '1',
            artist: 'tetsuya koizumi',
            rarity: 'Common',
            flavorText:
              'Perhaps because it would like to grow up quickly, it has a voracious appetite, eating a hundred leaves a day.',
            nationalPokedexNumbers: [10],
            legalities: {
              unlimited: 'Legal',
              standard: 'Legal',
              expanded: 'Legal',
            },
            images: {
              small: 'https://images.pokemontcg.io/sm115/1.png',
              large: 'https://images.pokemontcg.io/sm115/1_hires.png',
            },
            tcgplayer: {
              url: 'https://prices.pokemontcg.io/tcgplayer/sm115-1',
              updatedAt: '2021/05/17',
              prices: {
                normal: {
                  low: 0.02,
                  mid: 0.14,
                  high: 10.81,
                  market: 0.1,
                  directLow: 0.1,
                },
                reverseHolofoil: {
                  low: 0.1,
                  mid: 0.36,
                  high: 1.99,
                  market: 0.33,
                  directLow: 0.38,
                },
              },
            },
          },
        ],
        page: 1,
        pageSize: 48,
        count: 48,
        totalCount: 13438,
      })
    )
  }),
]

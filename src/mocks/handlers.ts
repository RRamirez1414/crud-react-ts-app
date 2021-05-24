import { rest } from 'msw'
import { charmander, pickachu } from './data'

export const handlers = [
  rest.get('https://api.pokemontcg.io/v2/cards', (req, res, ctx) => {
    if (req.url.search.includes('name:charmander')) {
      //data count is reduced for mocking purposes
      return res(
        ctx.status(200),
        ctx.json({
          data: charmander,
          page: 1,
          pageSize: 48,
          count: 6,
          totalCount: 6,
        })
      )
    }

    if (req.url.search.includes('id:basep-1')) {
      return res(
        ctx.status(200),
        ctx.json({
          data: pickachu,
          page: 1,
          pageSize: 48,
          count: 1,
          totalCount: 1,
        })
      )
    }
  }),
]

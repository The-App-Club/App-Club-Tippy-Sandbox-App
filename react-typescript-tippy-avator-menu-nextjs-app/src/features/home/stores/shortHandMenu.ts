import { atom } from 'recoil'
import { z } from 'zod'

export const ShortHandMenuSchema = z.object({
  opened: z.boolean(),
  animation: z.enum(['initial', 'start', 'end']),
  menuId: z.string().nullish(),
})

export type ShortHandMenu = z.infer<typeof ShortHandMenuSchema>

const shortHandMenuState = atom<ShortHandMenu>({
  key: 'shortHandMenu',
  default: {
    opened: false,
    animation: 'initial',
    menuId: null,
  },
})

export { shortHandMenuState }

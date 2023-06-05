// IMPORTING PACKAGES/MODULES
import { atom } from 'recoil'

// STORING MODAL TYPE
export const darkThemeAtom = atom({
  key: 'darkTheme',
  default: true,
})
export const reportAtom = atom({
  key: 'recentReport',
  default: null,
})
export const regionsAtom = atom({
  key: 'regions',
  default: null,
})

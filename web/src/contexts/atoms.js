// IMPORTING PACKAGES/MODULES
import { atom } from 'recoil'

import global from './global'

// STORING MODAL TYPE
export const reportAtom = atom({
  key: 'recentReport',
  default: null,
})
export const accountAtom = atom({
  key: 'account',
  default: null,
})
export const regionsAtom = atom({
  key: 'regions',
  default: null,
})
export const darkThemeAtom = atom({
  key: 'darkTheme',
  default: global.isDarkTheme,
})
export const userReportsAtom = atom({
  key: 'userReports',
  default: null,
})

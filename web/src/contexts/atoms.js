// IMPORTING PACKAGES/MODULES
import { atom } from 'recoil'

import global from './global'

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
export const darkModeAtom = atom({
  key: 'darkTheme',
  default: global.isDarkMode,
})
export const modalTypeAtom = atom({
  key: 'modalType',
  default: null,
})
export const userReportsAtom = atom({
  key: 'userReports',
  default: null,
})
export const reportLoadingAtom = atom({
  key: 'recentReportLoading',
  default: false,
})

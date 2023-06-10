// IMPORTING PACKAGES/MODULES
import { initializeApp, getApp, getApps } from 'firebase/app'
import * as firebaseAuth from 'firebase/auth'

import { createAuth } from '@redwoodjs/auth-firebase-web'

const firebaseConfig = {
  apiKey: 'AIzaSyA3aHw_Ci2dk0XvKiyEHhXe9xINzForu7g',
  authDomain: 'tracepath-dev.firebaseapp.com',
}

const firebaseApp = ((config) => {
  const apps = getApps()
  if (!apps.length) initializeApp(config)
  return getApp()
})(firebaseConfig)

export const firebaseClient = {
  firebaseAuth,
  firebaseApp,
}

export const { AuthProvider, useAuth } = createAuth(firebaseClient)

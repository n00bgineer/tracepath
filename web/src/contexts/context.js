// IMPORTING PACKAGES/MODULES
import React, { createContext, useContext } from 'react'

import { useRecoilState } from 'recoil'

import { useMutation } from '@redwoodjs/web'

import Events from 'src/analytics/analytics'
import { UPDATE_USER_MUTATION } from 'src/components/User/EditUserCell'
import { CREATE_USER_MUTATION } from 'src/components/User/NewUser'
import { CREATE_GOOGLE_USER_MUTATION } from 'src/components/User/NewUser'

import { accountAtom } from './atoms'

// CREATING GLOBAL CONTEXT
const AppContext = createContext()

// CUSTOM HOOK(S)
/**
 * @name useAppContext
 * @description METHOD TO RETURN CONTEXT
 * @returns {Object} Context
 */
export const useAppContext = () => {
  return useContext(AppContext)
}

// COMPONENTS
/**
 * @name AppContextProvider
 * @description COMPONENTS TO PASS AUTH CONTEXT
 * @param {*} props COMPONENT PROPS
 * @returns <AppContextProvider/> (JSX)
 */
const Context = ({ children }) => {
  // GETTING ATOMIC STATES
  const [account, setAccount] = useRecoilState(accountAtom)

  // EXECUTING GQL MUTATION
  // MUTATION FOR CREATING NEW USER
  const [createUser] = useMutation(CREATE_USER_MUTATION, {
    // ON SUCCESSFUL EXECUTION OF MUTATION
    onCompleted: (res) => {
      setAccount(res.createUser)
      Events.auth.identify(res.createUser.id)
      Events.auth.set({
        $name: res.createUser.username,
        $email: res.createUser.email,
      })
    },
    // WHEN AN ERROR HAS OCCURED WHILE EXECUTION OF MUTATION
    onError: (error) => {
      console.error('ERROR OCCURED WHILE SIGNING UP')
      console.error(error)
    },
  })

  // MUTATION FOR CREATING NEW GOOGLE USER
  const [createGoogleUser] = useMutation(CREATE_GOOGLE_USER_MUTATION, {
    // ON SUCCESSFUL EXECUTION OF MUTATION
    onCompleted: (res) => setAccount(res.createGoogleUser),
    // WHEN AN ERROR HAS OCCURED WHILE EXECUTION OF MUTATION
    onError: (error) => {
      console.error('ERROR OCCURED WHILE SIGNING UP')
      console.error(error)
    },
  })

  // MUTATION FOR UPDATING NEW USER
  const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: (res) => setAccount(res.updateUser),
    onError: (error) => {
      console.error('ERROR OCCURED WHILE SIGNING IN')
      console.error(error)
    },
  })

  // METHODS
  /**
   * @name signinUser
   * @description METHOD TO SIGNIN
   * @param {*} id USER GUID
   * @param {*} input FIELDS TO BE UPDATED
   * @returns {undefined} undefined
   */
  const signinUser = (id, input) => updateUser({ variables: { id, input } })

  /**
   * @name signupUser
   * @description METHOD TO SIGNUP
   * @param {*} input INPUT FOT SIGNING UP
   * @returns {undefined} undefined
   */
  const signupUser = (input) => {
    createUser({ variables: { input } })
  }

  /**
   * @name signinGoogleUser
   * @description METHOD TO SIGNIN GOOGLE USER
   * @param {*} input INPUT FOT SIGNING UP
   * @returns {undefined} undefined
   */
  const signinGoogleUser = (input) => {
    createGoogleUser({ variables: { input } })
  }

  const ContextVal = {
    signinUser: signinUser,
    signupUser: signupUser,
    signinGoogleUser: signinGoogleUser,
  }

  return (
    <AppContext.Provider value={ContextVal}>{children}</AppContext.Provider>
  )
}

export default Context

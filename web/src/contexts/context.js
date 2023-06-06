// IMPORTING PACKAGES/MODULES
import React, { createContext, useContext } from 'react'

import { useRecoilState } from 'recoil'

import { useMutation } from '@redwoodjs/web'

import { UPDATE_USER_MUTATION } from 'src/components/User/EditUserCell'
import { CREATE_USER_MUTATION } from 'src/components/User/NewUser'

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
      // UPDATING USER STATE
      setAccount(res.createUser)
    },
    // WHEN AN ERROR HAS OCCURED WHILE EXECUTION OF MUTATION
    onError: (error) => {
      console.error('ERROR OCCURED WHILE SIGNING UP')
      console.error(error)
    },
  })

  // MUTATION FOR UPDATING NEW USER
  const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: (res) => {
      // UPDATING USER STATE
      setAccount(res.createUser)
    },
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
   */
  const signinUser = async (id, input) => {
    await createUser({ variables: { input } })
  }

  /**
   * @name signupUser
   * @description METHOD TO SIGNUP
   * @param {*} id USER ID
   * @param {*} input INPUT FOT SIGNING UP
   */
  const signupUser = async (id, input) => {
    await updateUser({ variables: { id, input } })
  }

  const ContextVal = {
    account: account,
    setAccount: setAccount,
    signinUser: signinUser,
    signupUser: signupUser,
  }

  return (
    <AppContext.Provider value={ContextVal}>{children}</AppContext.Provider>
  )
}

export default Context

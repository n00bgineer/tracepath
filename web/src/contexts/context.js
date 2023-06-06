// IMPORTING PACKAGES/MODULES
import React, { createContext, useContext } from 'react'

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
  const signinUser = async (id, input) => {}
  const signupUser = async (input) => {}

  const ContextVal = {
    signinUser: signinUser,
    signupUser: signupUser,
  }

  return (
    <AppContext.Provider value={ContextVal}>{children}</AppContext.Provider>
  )
}

export default Context

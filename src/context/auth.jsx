import { createContext, useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

import { auth } from '../services/firebaseConfig'

export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = ({ children }) => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)


  useEffect(() => {

    if(user){
      sessionStorage.setItem('@AuthFirebase:token', user.user.accessToken)
      sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user))
    }
  },[user])
   

  

  return (
    <AuthGoogleContext.Provider
      value={{
        signInWithGoogle,
        user,
        error,
        loading
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  )
}

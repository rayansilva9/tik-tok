import { useContext } from 'react'
import Feed from '../../components/Feed/feed'
import NavBar from '../../components/Header/navBar'
import  '../../GlobalStyle.css'
import { AuthGoogleContext } from '../../context/auth'

export const Home = () => {
  const { signInWithGoogle, user, loading, error } =
    useContext(AuthGoogleContext)
  console.log(user)

  return (
   <div>
      <NavBar />
      <Feed />
   </div>
  )
}

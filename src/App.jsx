import { AuthGoogleProvider } from './context/auth'
import { Home } from './pages/home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import NewPost from './components/Feed/newPost'
import { DeleteVideosProvider } from './context/deleteVideos'

const App = () => {
  return (
    <AuthGoogleProvider>
      <DeleteVideosProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/login' element={< Login/>}/>
        <Route path='/home' element={< Home/>}/>
        <Route path='/home/upload' element={< NewPost/>}/>
      </Routes>
      </BrowserRouter>
      </DeleteVideosProvider>
    </AuthGoogleProvider>
  )
}

export default App

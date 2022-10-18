import { Avatar, Box, Button, Divider, Paper } from '@mui/material'
import { Stack } from '@mui/system'
import { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthGoogleContext } from '../../context/auth'
import BtnMenu from './btnMenu'
import SearchBar from './searchBar'

const NavBar = () => {
  const { signInWithGoogle, user, loading, error } =
    useContext(AuthGoogleContext)

  return (
    <>
      <Stack
        sx={{
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
          position: 'fixed',
          pl:1,
          pr:1,
          zIndex: 999,
          background: 'white',
          height: '60px',
          maxWidth: '100vw',
          minWidth: '100vw',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: {
            xs: 'space-between',
            sm: 'space-between',
            md: 'space-around'
          },
          boxShadow: '1px 1px 6px 0px rgba(0,0,0,0.20)'
        }}
      >
        <Box
          sx={
            {
              // display:{xs: 'none', sm:'inline',},
            }
          }
        >
          <p>Logo</p>
        </Box>
        <SearchBar />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: { xs: 0, sm: 1, md: 2 }
          }}
        >
           <Link to="/home/upload"> 
            <Button
              variant="outlined"
              sx={{
                display:user ? { xs: 'none', sm: 'inline' } : 'none',
                background: '#f1f1f1'
              }}
            >
              Enviar
            </Button>
          </Link> 
          <Link to="/login">
            <Button
              size="small"
              variant="contained"
              onClick={() => {}}
              sx={{
                display: user ? 'none' : 'inline',
                background: 'blue'
              }}
            >
              Entrar
            </Button>
          </Link>

          <BtnMenu />
          <Avatar sx={{display: user ? 'inline' : 'none'}} src={user ? user.user.photoURL : ''} />
        </Box>
      </Stack>
      <Divider />
    </>
  )
}

export default NavBar

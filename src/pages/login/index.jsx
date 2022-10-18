import { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthGoogleContext } from '../../context/auth'

import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Login = () => {

  const { signInWithGoogle, user, loading, error } =
  useContext(AuthGoogleContext)
  

  if (!user) {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={() => {}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              onClick={()=>{signInWithGoogle()}}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign With google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/home'>
                
                  Forgot password?
                
                </Link>
              </Grid>
              <Grid item>
                <a href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </a>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    )
  } else {
    return <Navigate to='/home'/>
  }
}

export default Login

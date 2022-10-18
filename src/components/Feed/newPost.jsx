import {
  Button,
  IconButton,
  Snackbar,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { useRef, useState, useContext, Fragment } from 'react'
import { db, storage } from '../../services/firebaseConfig'
import { AuthGoogleContext } from '../../context/auth'

import CloseIcon from '@mui/icons-material/Close'
import { Link, Navigate } from 'react-router-dom'

const NewPost = () => {
  const { signInWithGoogle, user, loading, error } =
    useContext(AuthGoogleContext)

  if (!user) return <Navigate to="/" />
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const action = (
    <Fragment>
      <Button color="secondary" size="small" onClick={handleClose}></Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  )

  const [desc, setDesc] = useState('')
  const [url, setFilePost] = useState('')
  const fileRef = useRef(null)

 

  const handlePost = async (doc) => {
    if (!desc) {
      setOpen(true)
    }

    await db
      .collection('postsVideos')
      .add({
        descriçao: desc,
        name: user.user.displayName,
        avatar: user.user.photoURL,
        postId: user.user.uid,
        hora: new Date().toLocaleTimeString(),
        data: new Date().toLocaleDateString(),
      })
      .then(doc => {
        const upload = storage
        .ref(`posts/${doc.id}`)
        .putString(url, 'data_url')

        upload.on(
          'state_change',
          null,
          err => console.log(err),
          () => {
            storage
              .ref('posts')
              .child(doc.id)
              .getDownloadURL()
              .then(url  => {
                db.collection('postsVideos').doc(doc.id).set(
                  {
                    url: url,
                    ID: doc.id,
                  },
                  {merge: true}
                )
              })
              console.log(doc.id)
          }
        )
       }
      )

    setDesc('')
  }
  
  const handleVideo = e => {
    const reader = new FileReader()
    
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = readerEvent => {
      setFilePost(readerEvent.target.result)
    }
  }

  const handleDelete = () =>{
     setFilePost('')
     setDesc('')
    }

    return (
    <>
    <Link to='/home'>
    <Button variant='contained' sx={{
      position: 'fixed',
      bottom: 200,
      right: 10,
    }}>Voltar</Button>
    </Link>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row',},
          alignItems: 'center',
          height: '100vh',
          justifyContent: 'space-around',
          gap: 2,
          background: '#020202'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 500,
            width: 400,
            background: ''
          }}
        >
          <div
            style={{
              background: '',
              width: '70%',
              height: '90%',
              border: '5px dashed #c1c1c1',
              borderRadius: 10
            }}
          >
            <video
              autoPlay
              controls
              style={{
                width: '100%',
                height: '100%'
              }}
              src={!url ? '' : url}
            ></video>
          </div>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 500,
            width: {md:400, xs: '90vw',},
            background: '',
            border: '2px solid white',
            p: 3
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around'
            }}
          >
            <Typography color={'white'}>Descrição:</Typography>
            <input
              value={desc}
              onChange={e => setDesc(e.target.value)}
              sx={{
                width: '70%',
                color: 'blue',
                background: 'white',
                border: '1px solid white'
              }}
              id="outlined-multiline-static"
              label=""
              multiline
              rows={2}
              defaultValue="Default Value"
            />
          </Box>
          <Box sx={{
            display: 'flex',
            gap: 1,
          }}>
            <Button
              sx={{
                background: '#0051ff92', color: 'white' }}
              variant="outlined"
              size="large"
              component="label"
            >
              {url != '' ? 'Outro Video' : 'Upload'} 
              <input
                onChange={handleVideo}
                ref={fileRef}
                hidden
                accept="*"
                multiple
                type="file"
              />
            </Button>
            <Button onClick={handlePost}>Envar</Button>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Descrição Vazia!"
        action={action}
      />
    </>
  )
}

export default NewPost

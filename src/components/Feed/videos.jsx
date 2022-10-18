import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import video from '../../assets/video.mp4'
import avatar from '../../assets/1.jpg'

import FavoriteIcon from '@mui/icons-material/Favorite'
import CommentIcon from '@mui/icons-material/Comment'
import ShareIcon from '@mui/icons-material/Share'


import useElementOnScreen from '../../hooks/useElementOnScreen' 
import { useContext, useEffect, useRef, useState } from 'react'
import { AuthGoogleContext } from '../../context/auth'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../services/firebaseConfig'
import { DeleteVideosContext } from '../../context/deleteVideos'



const Videos = ({
  avatar,
  nome,
  bio,
  horario,
  data,
  desc,
  url,
  key,
  userId,
  isYours,
  haveVideo,
  isYoursDelete,
  isYoursDeleteID,
  liked,
}) => {

  const { signInWithGoogle, user, loading, erro } =
  useContext(AuthGoogleContext)


  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7
  }

  const isVisibile = useElementOnScreen(options, videoRef)

   const onVideoClick = () => {
     if (playing) {
       videoRef.current.pause();
       setPlaying(!playing);
     } else {
       videoRef.current.play();
       setPlaying(!playing);
     }
   };

  useEffect(() => {
    if (isVisibile) {
      if (!playing) {        
        videoRef.current.play()
        setPlaying(true)
      }
    }
    else {
      if (playing) {        
        videoRef.current.pause();
        setPlaying(false)
      }
    }
  }, [isVisibile])

  const deletVideo = async () => {
    await deleteDoc(doc(db, "postsVideos", isYoursDeleteID)); 
  }

  
  // const openComment = ()=>{
  //   document.querySelector('.comment').style.bottom = "0"
  // }

  return (
    <div style={{display: haveVideo,}} id={key}>
    
      <Box
        sx={{
          minHeight: '600px',
          pb: '30px',
          pt: '30px',
          pr: 1,
          pl: { xs: 0, sm: 1 }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'center' },
            width: { xs: '100vw', md: 400 },
            height: 'auto',
            gap: 1
          }}
        >
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
              gap: 3,
              
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                gap: 2
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <Avatar sx={{lineHeight: '100%',}} alt="Remy Sharp" src={avatar} />
                <Box>
                  <Typography fontSize="1rem" fontWeight="700" variant="h1">
                    {nome}
                  </Typography>
                  <Typography fontSize="12px" variant="h1">
                    {bio}
                  </Typography>
                </Box>
              </Box>

              <Button sx={{display:isYours}} variant="outlined">Seguir</Button>
              <Button onClick={deletVideo} sx={{display:isYoursDelete}} variant="outlined">Deletar</Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <Typography fontSize="1rem" variant="h3">
                {desc}
              </Typography>
              <Typography fontSize="1rem" variant="p">
                Nome da Musica
              </Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              width: {xs:'calc(95% - 35px)', md: '100%', },
              ml: '2px',
              gap: 1
            }}
          >
            <video
              style={{
                borderRadius: '13px'
              }}
              onClick={onVideoClick}
              width="100%"
              loop
              preload="true"
              ref={videoRef}
              src={url}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1
              }}
            >
              <IconButton
                sx={{
                  background: '#f3f3f3',
                  width: { xs: 45, md: 50 },
                  height: { xs: 45, md: 50 }
                }}
                aria-label="delete"
              >
                {liked === !true ? <FavoriteIcon /> : <FavoriteIcon sx={{color: 'red',}} /> } 
              </IconButton>
              <IconButton
                sx={{
                  background: '#f3f3f3',
                  width: { xs: 45, md: 50 },
                  height: { xs: 45, md: 50 }
                }}
                aria-label="delete"
              >
                <CommentIcon  />
              </IconButton>
              <IconButton
                sx={{
                  background: '#f3f3f3',
                  width: { xs: 45, md: 50 },
                  height: { xs: 45, md: 50 }
                }}
                aria-label="delete"
              >
                <ShareIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box  sx={{
          pt: '30px',
          pb: '30px',
          pr: 1,
          pl: { xs: 0, sm: 1 }
        }}>
        <Divider />
        </Box>
      </Box>
    </div>
  )
}

export default Videos

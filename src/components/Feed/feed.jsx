import { Box, Paper } from '@mui/material'
import { useContext, useEffect } from 'react'
import Fab from './fab'
import Videos from './videos'
import { db } from '../../services/firebaseConfig'
import { useCollection } from 'react-firebase-hooks/firestore'
import { AuthGoogleContext } from '../../context/auth'
import CommentsModal from './commentsModal'

const Feed = () => {
  const { signInWithGoogle, user, loading, erro } =
    useContext(AuthGoogleContext)

  const [realTimeposts, error] = useCollection(
    db.collection('postsVideos').orderBy('hora', 'desc')
  )


  const userUID = user ? user.user.uid : ''

  return (
    <>
      <Fab />
      <Box
        sx={{
          background: '',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          pt: '10px',
          pb: '0px',
          mt: '60px'
        }}
      >
        <Paper
          sx={{
            overflowY: "scroll",
            maxWidth: '100vw',
            pt: '10px',
            pb: '10px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {!error &&
            realTimeposts.docs.map(post => (
              <Videos
                isYoursDeleteID={post.data().ID}
                isYoursDelete={
                  userUID != post.data().postId ? 'none' : 'inline'
                }
                haveVideo={post.data().url ? 'inline' : 'none'}
                isYours={userUID != post.data().postId ? 'inline' : 'none'}
                userId={post.data().userId}
                key={post.data().id}
                nome={post.data().name}
                avatar={post.data().avatar}
                bio={post.data().bio}
                url={post.data().url}
                data={post.data().data}
                horario={post.data().hora}
                desc={post.data().descriçao}
                liked={true}
              />
            ))}
        </Paper>
      </Box>
      {/* <CommentsModal /> */}
    </>
  )
}

export default Feed

import { Box } from '@mui/system'
import Comments from './comments'
import { db } from '../../services/firebaseConfig'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useContext, useState } from 'react'
import { Button } from '@mui/material'
import { AuthGoogleContext } from '../../context/auth'

const CommentsModal = () => {

  const { signInWithGoogle, user, loading, error } =
  useContext(AuthGoogleContext)


  const [realTimeComments, erro] = useCollection(db.collection('coments'))


  const [comment, setComment] = useState('')

  const handleComment = async () => {
     await db.collection('coments').add({
      name: user ? user.user.displayName : '',
      avatar: user ? user.user.photoURL : '',
      comment: comment,
    }) 

    setComment('')
  }

  return (
    <Box className='comment'
      sx={{
        position: "fixed",
        bottom: 'calc(0px - 56.7%)',
        height: '480px',
        background: 'red',
        width: "100%",
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        className="header"
        sx={{
          height: '9%',
          background: 'black',
          position: 'relative',
          display: 'flex',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        3000 Comentarios
      </Box>
      <Box
        className="main"
        sx={{
          overflowY: 'scroll',
          height: '86%',
          background: 'black'
        }}
      >
        {!erro &&
          realTimeComments.docs.map(comment => (
            <Comments
              avatar={comment.data().avatar}
              comments={comment.data().comentario}
              usuario={comment.data().nome}
            />
          ))}
      </Box>
      <Box
        className="input"
        sx={{
          background: 'black',
          height: '15%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <input
          value={comment}
          onChange={e => setComment(e.target.value)}
          type="text"
          style={{
            width: '70%'
          }}
        />
        <Box
          sx={{
            height: '100%',
            width: '30%'
          }}
        ><Button onCLick={()=>{handleComment}}>Enviar</Button>

        </Box>
      </Box>
    </Box>
  )
}

export default CommentsModal

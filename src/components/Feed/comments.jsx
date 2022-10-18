import { Avatar, Box, Typography } from '@mui/material'

const Comments = ({ avatar, comments, usuario }) => {
  return (
    <>
      <Box
        sx={{
          color: 'white',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          width: '100%'
        }}
      >
        <Box
          sx={{
            width: '12%',
            mr: 1
          }}
        >
          <Avatar src={avatar} />
        </Box>
        <Box
          sx={{
            width: '76%'
          }}
        >
          <Box>
            <Typography fontSize="1rem" fontWeight="bold">
              {usuario}
            </Typography>
          </Box>
          <Box
            sx={{
              wordBreak: 'break-all'
            }}
          >
            {comments}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '12%'
          }}
        >
          S2
        </Box>
      </Box>
    </>
  )
}

export default Comments

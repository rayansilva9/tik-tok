import { Box, TextField } from '@mui/material'

const SearchBar = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <TextField
        sx={{ width: { xs: 150, sm: 250, md: '548px'},

      }}
        id="input-with-sx"
        label="Pesquisar"
        variant="outlined"
      />
    </Box>
  )
}

export default SearchBar

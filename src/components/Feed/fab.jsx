import * as React from 'react';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';

const Fabbtn = () => {
  const [anchor2El, setAnchor2El] = React.useState(null);
  const open2 = Boolean(anchor2El);

  const handleClick = (event) => {
    setAnchor2El(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor2El(null);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        id="basic-button"
        aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          display: {sx: 'inline', md:'none',},
          position: 'fixed',
          right: 10,
          bottom: 20,
          fontSize: 30
        }}
      >
        +
      </Fab>
      <Menu
        id="basic-menu"
        anchorEl={anchor2El}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        <Link to='upload'><MenuItem onClick={handleClose}>Enviar</MenuItem></Link>
      </Menu>
    </>
  )
}

export default Fabbtn

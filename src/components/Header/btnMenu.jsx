import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AuthGoogleContext } from '../../context/auth';


const BtnMenu = () => {

  const { signInWithGoogle, user, loading, error } =
  React.useContext(AuthGoogleContext)

 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button sx={{
        display: {xs: 'none', md: 'flex',},
        background: 'none',
        alignItems: 'center',
      }}
        size='small'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem disabled={user ? false : true} onClick={handleClose}>Profile</MenuItem>
        <MenuItem disabled={user ? false : true} onClick={handleClose}>My account</MenuItem>
        <MenuItem disabled={user ? false : true} onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default BtnMenu;
import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Box, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

export const MenuCard = ({id, handleOpen, setShowMenu, setIsDeleted }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#232323',
        padding: '5px',
        position: 'absolute',
        right: '8px',
        top: '5px',
        width: '100px',
        zIndex: 5
      }}
    >
      <IconButton onClick={() => setShowMenu(false)}>
        <CloseOutlinedIcon sx={{ position: 'absolute', left: '75px' }} />
      </IconButton>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => {
            handleOpen(id);
            setShowMenu(false);
          }}>
            <ListItemText
              primary="Edit"
              sx={{
                color: '#fff',
                fontFamily: "'Montserrat', sans-serif"
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => {
            setIsDeleted(true);
            setShowMenu(false);
          }}>
            <ListItemText
              primary="Delete"
              sx={{
                color: '#fff',
                fontFamily: "'Montserrat', sans-serif"
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

MenuCard.propTypes = {
  id: PropTypes.number,
  handleOpen: PropTypes.func.isRequired,
  setShowMenu: PropTypes.func,
  setIsDeleted: PropTypes.func
}

export default MenuCard;

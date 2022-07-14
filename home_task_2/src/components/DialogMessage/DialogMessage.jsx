import React from 'react';
import { Dialog, DialogContent, Typography } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PropTypes from 'prop-types';

const DialogMessage = ({ handleClose, open }) => {
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        '.MuiDialog-paper': {
          backgroundColor: '#232323',
          maxHeight: '322px',
        }
      }}
    >
      <DialogContent
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '686px',
        }}
      >
        <CheckCircleRoundedIcon sx={{ height: '80px', width: '80px'}} />
        <Typography
          sx={{
            color: 'white',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '40px',
            textTransform: 'uppercase'
          }}
        >
          congratulations !
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '20px',
            textAlign: 'center',
            width: '350px'
          }}
        >
          The movie has been added to 
          database successfully 
        </Typography>
      </DialogContent>
    </Dialog>
  )
}

DialogMessage.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default DialogMessage;
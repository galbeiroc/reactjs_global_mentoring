import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import PropTypes from 'prop-types';

import SuccessfulMsg from './SuccessfulMsg';
import ConfirmMsg from './ConfirmMsg';

const DialogMessage = ({ handleClose, isSuccessful, open }) => {
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
          alignItems: isSuccessful ? 'center' : 'start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: isSuccessful ? 'center' : 'start',
          paddingX: '50px',
          width: '686px',
        }}
      >
        {isSuccessful && <SuccessfulMsg />}
        {!isSuccessful && <ConfirmMsg handleClose={handleClose} />}
      </DialogContent>
    </Dialog>
  )
}

DialogMessage.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isSuccessful: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired
}

export default DialogMessage;
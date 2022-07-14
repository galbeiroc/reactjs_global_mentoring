import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';

import './MovieForm.scss';

const genresList = [
  'Comedy',
  'Crime',
  'Fantasy',
  'Horror',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const MovieForm = ({
  handleClose,
  handleChange,
  movie,
  open,
  releaseDate,
  setReleaseDate
}) => {
  const { genres, overview, poster_path, revenue, title, vote_count } = movie;

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        '.MuiDialog-paper': {
          backgroundColor: '#232323'
        }
      }}
    >
      <Box sx={{  }}>
        <DialogTitle color='white' variant='h5'>
          ADD MOVIE
        </DialogTitle>
        <DialogContent>
          <Box sx={{ marginTop: 5 }}>
            <TextField
              sx={{
                backgroundColor: 'rgba(50, 50, 50, 0.8)',
                fontFamily: "'Montserrat', sans-serif",
                borderRadius: '5px',
                width: '525px',
                '& label.Mui-focused': {
                  color: '#F65242',
                },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: '#232323',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#F65242',
                  },
                }
              }}
              label="TITLE"
              name='title'
              onChange={handleChange}
              value={title}
              variant="outlined"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={releaseDate}
                onChange={(newValue) => {
                  setReleaseDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="RELEASE DATE"
                    name='release_date'
                    onChange={handleChange}
                    sx={{
                      backgroundColor: 'rgba(50, 50, 50, 0.8)',
                      borderRadius: '5px',
                      fontFamily: "'Montserrat', sans-serif",
                      marginLeft: '20px',
                      width: '305px',
                      '& label.Mui-focused': {
                        color: '#F65242',
                      },
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: '#232323',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#F65242',
                        },
                      }
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ marginTop: 7 }}>
            <TextField
              sx={{
                backgroundColor: 'rgba(50, 50, 50, 0.8)',
                borderRadius: '5px',
                fontFamily: "'Montserrat', sans-serif",
                width: '525px',
                '& label.Mui-focused': {
                  color: '#F65242',
                },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: '#232323',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#F65242',
                  },
                }
              }}
              label="MOVIE URL"
              name='poster_path'
              onChange={handleChange}
              placeholder='https://'
              value={poster_path}
              variant="outlined"
            />
            <TextField
              sx={{
                backgroundColor: 'rgba(50, 50, 50, 0.8)',
                borderRadius: '5px',
                fontFamily: "'Montserrat', sans-serif",
                marginLeft: '20px',
                width: '305px',
                '& label.Mui-focused': {
                  color: '#F65242',
                },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: '#232323',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#F65242',
                  },
                }
              }}
              label="RATING"
              name='vote_count'
              onChange={handleChange}
              type='number'
              value={vote_count}
              variant="outlined"
            />
          </Box>
          <Box sx={{ marginTop: 7 }}>
            <FormControl>
              <InputLabel id="genres-multiple-checkbox-label">GENRES</InputLabel>
              <Select
                multiple
                id="genres-multiple-checkbox-label"
                name='genres'
                onChange={handleChange}
                input={
                  <OutlinedInput
                    label="GENRES"
                    sx={{
                      width: '525px',
                      '& .MuiSelect-multiple': {
                        '& label.Mui-focused': {
                          color: '#F65242',
                        },
                        color: 'white',
                        '& fieldset': {
                          borderColor: '#232323',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#F65242',
                        },
                      },
                      '& .MuiSelect-select': {
                        background: '#2f2f2f',
                      }
                    }}
                  />
                }
                renderValue={(selected) => selected.join(', ')}
                value={genres}
                MenuProps={MenuProps}
              >
                {genresList.map((genre) => (
                  <MenuItem key={genre} value={genre} sx={{
                    color: 'white',
                    backgroundColor: '#232323',
                    '& .MuiList-root .MuiMenu-list': {
                      paddingTop: 0,
                      paddingBottom: 0
                    },
                    '&:hover': {
                      color: '#F65242'
                    }
                  }}>
                    <Checkbox checked={genres.indexOf(genre) > -1} />
                    <ListItemText primary={genre} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              sx={{
                backgroundColor: 'rgba(50, 50, 50, 0.8)',
                borderRadius: '5px',
                fontFamily: "'Montserrat', sans-serif",
                marginLeft: '20px',
                width: '305px',
                '& label.Mui-focused': {
                  color: '#F65242',
                },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: '#232323',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#F65242',
                  },
                }
              }}
              label="RUNTIME"
              name='revenue'
              onChange={handleChange}
              placeholder='minutes'
              type='number'
              value={revenue}
              variant="outlined"
            />
          </Box>
          <Box sx={{ marginTop: 7 }}>
            <TextField
              label="OVERVIEW"
              multiline
              maxRows={4}
              name='overview'
              onChange={handleChange}
              placeholder='Movie description'
              sx={{
                width: '100%',
                backgroundColor: '#2f2f2f',
                '& label.Mui-focused': {
                  color: '#F65242',
                },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  height: '100px',
                  '& fieldset': {
                    borderColor: '#232323',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#F65242',
                  },
                }
              }}
              value={overview}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ paddingX: 3 }}>
          <Button
            autoFocus
            onClick={handleClose}
            variant='outlined'
            sx={{
              border: '1px solid #F65242',
              color: '#F65242',
              fontFamily: "'Montserrat', sans-serif",
              padding: "10px",
              width: '180px'
            }}
          >
            RESET
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            variant='contained'
            sx={{
              backgroundColor: '#F65242',
              fontFamily: "'Montserrat', sans-serif",
              padding: "10px",
              width: '180px'
            }}
          >
            SUBMIT
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  )
}

MovieForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  movie: PropTypes.object,
  open: PropTypes.bool.isRequired
};

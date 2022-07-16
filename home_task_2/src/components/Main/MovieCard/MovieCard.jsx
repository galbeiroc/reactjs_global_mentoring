import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Icon, IconButton, Typography } from "@mui/material";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PropTypes from 'prop-types';

import './CardMovie.scss';
import MenuCard from '../Content/MenuCard/MenuCard';

export const MovieCard = ({
  id,
  genres,
  title,
  poster_path,
  release_date,
  handleOpen,
  setIsDeleted,
  setMovieId
}) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Card  sx={{ backgroundColor: '#232323',  maxWidth: 320, position: 'relative' }}>
      {
        !showMenu && (
          <IconButton
            sx={{
              backgroundColor: '#232323',
              borderRadius: 7,
              cursor: 'pointer',
              height: '30px',
              position: 'absolute',
              right: '8px',
              top: '5px',
              width: '30px',
              zIndex: 5
            }}
            onClick={() => setShowMenu(true)}
          >
            <MoreVertOutlinedIcon />
          </IconButton>
        )
      }
      {
        showMenu && (
          <MenuCard
            id={id}
            handleOpen={handleOpen}
            setIsDeleted={setIsDeleted}
            setMovieId={setMovieId}
            setShowMenu={setShowMenu}
          />
        )
      }
      <CardActionArea>
        <CardMedia
          component="img"
          height="440px"
          width="320px"
          image={poster_path}
          alt={title}
        />
        <CardContent sx={{ backgroundColor: '#232323', padding: '10px' }}>
          <div className="cardFooter">
            <Typography
              variant="body2"
              sx={{
                color: '#F2F2F2',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '22px'
              }}
            >
              {title}
            </Typography>
            <Typography
              component='div'
              sx={{
                border: '1px rgba(96, 96, 96, 0.68) solid',
                borderRadius: '3px',
                color: '#F2F2F2',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '17px',
                padding: '2px 15px'
              }}
            >
              {new Date(release_date).getUTCFullYear()}
            </Typography>
          </div>
          <Typography
            sx={{
              color: '#F2F2F2',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '14px'
            }}
          >
            {genres.slice(' ').join(', ')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  genres: PropTypes.array.isRequired,
  runtime: PropTypes.number,
  handleOpen: PropTypes.func.isRequired,
  setIsDeleted: PropTypes.func,
  setMovieId: PropTypes.func
};

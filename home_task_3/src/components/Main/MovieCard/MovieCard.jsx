import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from 'prop-types';

import './CardMovie.scss';

export const MovieCard = ({ genres, title, poster_path, release_date }) => {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="440px"
          width="320px"
          image={poster_path}
          alt={title}
        />
        <CardContent>
          <div className="card-footer">
            <Typography className="title-movie" variant="body2">
              {title}
            </Typography>
            <Typography className="release" component='div'>
              {new Date(release_date).getUTCFullYear()}
            </Typography>
          </div>
          <Typography className="genres">
            {genres.slice(' ').join(', ')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

MovieCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  genres: PropTypes.array.isRequired,
  runtime: PropTypes.number
};

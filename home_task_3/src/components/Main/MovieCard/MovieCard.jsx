import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

import './CardMovie.scss';

const movie = {
  id: 321612,
  title: "Beauty and the Beast",
  tagline: "Be our guest.",
  vote_average: 6.8,
  vote_count: 7861,
  release_date: "2017-03-16",
  poster_path: "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
  overview: "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
  budget: 160000000,
  revenue: 1263521126,
  genres: [
    "Family",
    "Fantasy",
    "Romance"
  ],
  runtime: 129
}

export const MovieCard = () => {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="440px"
          width="320px"
          image={movie.poster_path}
          alt={movie.title}
        />
        <CardContent>
          <div className="card-footer">
            <Typography className="title-movie" variant="body2">
              {movie.title}
            </Typography>
            <Typography className="release" component='div'>
              {new Date(movie.release_date).getUTCFullYear()}
            </Typography>
          </div>
          <Typography className="genres">
            {movie.genres.slice(' ').join(', ')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

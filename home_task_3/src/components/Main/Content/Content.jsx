import { TabContext, TabPanel } from '@mui/lab';
import { MovieCard } from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';

import movies from '../../../data/data.json';
import './Content.scss'

console.log(movies.length);

export const Content = ({ tabValue }) => {
  return (
    <TabContext value={tabValue}>
      <TabPanel value={tabValue}>
        {
          movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))
        }
      </TabPanel>
      {/* <TabPanel value="2">DOCUMENTARY</TabPanel>
      <TabPanel value="3">COMEDY</TabPanel>
      <TabPanel value="4">HORROR</TabPanel>
      <TabPanel value="5">CRIME</TabPanel> */}
    </TabContext>
  )
}

Content.protoTypes = {
  tabValue: PropTypes.string.isRequired
}
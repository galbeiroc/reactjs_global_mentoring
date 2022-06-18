import { TabContext, TabPanel } from '@mui/lab';
import { MovieCard } from '../MovieCard/MovieCard';

export const Content = ({ value }) => {
  return (
    <TabContext value={value}>
      <TabPanel value="1">
        <MovieCard />
      </TabPanel>
      <TabPanel value="2">DOCUMENTARY</TabPanel>
      <TabPanel value="3">COMEDY</TabPanel>
      <TabPanel value="4">HORROR</TabPanel>
      <TabPanel value="5">CRIME</TabPanel>
    </TabContext>
  )
}

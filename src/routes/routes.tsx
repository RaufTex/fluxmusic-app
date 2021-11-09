import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AlbumScreen from '../components/AlbumScreen';
import ArtistScreen from '../components/ArtistScreen';
import InitialScreenShow from '../components/InitialScreenShow';
import NewsModal from '../components/NewsModal';
import NewsTimeline from '../components/NewsTimeline';
import OptionsScreen from '../components/OptionsScreen';
import SelectAlbum from '../components/SelectAlbum';
import SelectArtist from '../components/SelectArtist';
import SelectGender from '../components/SelectGenre';
import TimelineScreen from '../components/RequestComponent';

const Routes = () => {
  return (
    <BrowserRouter>
      <TimelineScreen />
      <OptionsScreen />
      <SelectGender />
      <NewsTimeline />
      <SelectArtist />
      <SelectAlbum />
      <AlbumScreen />
      <InitialScreenShow />
      <ArtistScreen />
      <Switch>
        <Route path='/:id' component={NewsModal} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

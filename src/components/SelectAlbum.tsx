import { useEffect, useState } from 'react';
import { useHandleContext } from '../context/HandleContext';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useHandleNewsContext } from '../context/HandleNewsContext';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import AlbumScreen from '../components/AlbumScreen';

const genrers = ['Rock'];

interface UseParamsProps {
  id: string;
}

export default function SelectAlbum() {
  let params = useParams<UseParamsProps>();

  const {
    openSelectAlbum,
    handleSelectAlbum,
    handleOpenInitial,
    handleSelect,
    handleSelectArtist,
  } = useHandleContext();
  const { handleNews, handleOpenAlbums, handleModal, handleOpenArtists } =
    useHandleNewsContext();

  const [genre, setGenre] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    const e = event.target.value;
    if (e === genre) {
      setGenre('');
    } else {
      setGenre(e);
    }
  };

  function handleOkButton(param: boolean) {
    if (param === true) {
      <AlbumScreen />;
      handleOpenAlbums(true);
      handleSelectAlbum(false);
      handleModal(false);
      handleNews(false);
      handleOpenArtists(false);
      handleOpenInitial(false);
      handleSelect(false);
      handleSelectArtist(false);
    }
  }

  useEffect(() => {
    params.id && handleSelectAlbum(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Dialog
        disableEscapeKeyDown
        open={openSelectAlbum}
        onClose={() => handleSelectAlbum(false)}
      >
        <DialogTitle>Escolha seu gênero</DialogTitle>
        <DialogContent>
          <Box component='form' sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 220 }}>
              <InputLabel htmlFor='demo-dialog-native'>Gênero</InputLabel>
              <Select
                value={genre}
                onChange={handleChange}
                input={<OutlinedInput label='gender' id='demo-dialog-native' />}
              >
                {genrers.map((gen, i) => (
                  <MenuItem key={i} value={gen}>
                    {gen}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSelectAlbum(false)}>Cancel</Button>
          <Button onClick={() => handleOkButton(true)}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

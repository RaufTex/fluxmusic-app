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

const genrers = ['Jazz'];

interface UseParamsProps {
  id: string;
}

export default function SelectGenre() {
  let params = useParams<UseParamsProps>();

  const {
    openSelect,
    handleSelect,
    handleOpenInitial,
    handleSelectAlbum,
    handleSelectArtist,
  } = useHandleContext();
  const { handleNews, handleModal, handleOpenAlbums, handleOpenArtists } =
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
      handleNews(true);
      handleSelect(false);
      handleOpenAlbums(true);
      handleSelectAlbum(false);
      handleModal(false);
      handleOpenArtists(false);
      handleOpenAlbums(false);
      handleOpenArtists(false);
      handleOpenInitial(false);
      handleSelectArtist(false);
    }
  }

  useEffect(() => {
    params.id && handleSelect(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Dialog
        disableEscapeKeyDown
        open={openSelect}
        onClose={() => handleSelect(false)}
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
          <Button onClick={() => handleSelect(false)}>Cancel</Button>
          <Button onClick={() => handleOkButton(true)}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

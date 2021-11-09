import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useHandleContext } from '../context/HandleContext';
import { useEffect, useState } from 'react';
import { useHandleNewsContext } from '../context/HandleNewsContext';
import { useParams } from 'react-router-dom';

const genrers = ['Rock'];

interface UseParamsProps {
  id: string;
}

export default function SelectArtist() {
  let params = useParams<UseParamsProps>();
  const { openSelectArtist, handleSelectArtist, handleOpenInitial } =
    useHandleContext();
  const { handleOpenArtists, handleModal, handleNews, handleOpenAlbums } =
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
      handleOpenArtists(true);
      handleSelectArtist(false);
      handleOpenInitial(false);
      handleModal(false);
      handleNews(false);
      handleOpenAlbums(false);
    }
  }

  useEffect(() => {
    params.id && handleSelectArtist(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Dialog
        disableEscapeKeyDown
        open={openSelectArtist}
        onClose={() => handleSelectArtist(false)}
      >
        <DialogTitle>Escolha seu gênero</DialogTitle>
        <DialogContent>
          <Box component='form' sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 220 }}>
              <InputLabel htmlFor='demo-dialog-native'>Gênero</InputLabel>
              <Select
                value={genre}
                onChange={handleChange}
                input={<OutlinedInput label='genre' id='demo-dialog-native' />}
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
          <Button onClick={() => handleSelectArtist(false)}>Cancel</Button>
          <Button onClick={() => handleOkButton(true)}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

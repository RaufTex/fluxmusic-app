import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import { useHandleContext } from '../context/HandleContext';
import PersonIcon from '@mui/icons-material/Person';

export default function OptionsScreen() {
  const {
    handleSelect,
    handleSelectArtist,
    handleSelectAlbum,
    handleOpenInitial,
  } = useHandleContext();

  function handleNewsButton(param: boolean) {
    handleSelect(true);
    handleOpenInitial(false);
    handleSelectArtist(false);
    handleSelectAlbum(false);
  }

  function handleAlbumButton(param: boolean) {
    handleSelectAlbum(true);
    handleOpenInitial(false);
    handleSelectArtist(false);
  }
  function handleArtistButton(param: boolean) {
    handleSelectArtist(true);
    handleOpenInitial(false);
    handleSelectAlbum(false);
  }

  return (
    <Box sx={{ alignItems: 'center' }}>
      <AppBar sx={{ background: 'black', mb: 4 }} position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ alignContent: 'center', margin: '0 auto' }}
          >
            <Button
              variant='contained'
              onClick={() => handleNewsButton(true)}
              startIcon={<LibraryBooksOutlinedIcon />}
            >
              Últimas Notícias
            </Button>
            <Button
              onClick={() => handleAlbumButton(true)}
              variant='contained'
              startIcon={<AlbumOutlinedIcon />}
            >
              Álbums por Gênero
            </Button>
            <Button
              onClick={() => handleArtistButton(true)}
              variant='contained'
              startIcon={<PersonIcon />}
            >
              Artistas por Gênero
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

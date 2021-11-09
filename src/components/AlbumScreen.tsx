import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHandleNewsContext } from '../context/HandleNewsContext';
import { useApiContext } from '../context/ApiContext';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

interface UseParamsProps {
  id: string;
}

export default function AlbumScreen() {
  let params = useParams<UseParamsProps>();
  const { openAlbums, handleOpenAlbums } = useHandleNewsContext();
  const { albums } = useApiContext();

  useEffect(() => {
    params.id && handleOpenAlbums(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'md'}
      open={openAlbums}
      onClose={() => handleOpenAlbums(false)}
      aria-labelledby='responsive-dialog-title'
    >
      <DialogContent>
        <Grid container spacing='auto' sx={{ width: 'auto', margin: '0 auto' }}>
          <Grid item xs={12}>
            {albums.map(item => (
              <ImageList key={item.id} sx={{ ml: '30%' }}>
                {itemData
                  .filter(it => it.id === item.id)
                  .map(itt => (
                    <ImageListItem key={itt.id}>
                      <img
                        src={`${itt.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${itt.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={''}
                        loading='lazy'
                      />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={
                          <span>
                            Gravadora:
                            {item.label}
                          </span>
                        }
                        position='below'
                      />
                    </ImageListItem>
                  ))}
              </ImageList>
            ))}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ margin: '0 auto' }}
          autoFocus
          onClick={() => handleOpenAlbums(false)}
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const itemData = [
  {
    id: 1,
    img: 'https://upload.wikimedia.org/wikipedia/pt/2/2e/Freak_Out%21.jpg',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/71sbIa3wceL._AC_SL1425_.jpg',
  },
  {
    id: 4,
    img: 'http://2.bp.blogspot.com/_GSZ2DMhXSG0/SGvTAfivYPI/AAAAAAAAAUo/h6NuLM05acE/s400/television.jpg',
  },
  {
    id: 5,
    img: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Stranglers_-_Rattus_Norvegicus_album_cover.jpg',
  },
  {
    id: 6,
    img: 'https://upload.wikimedia.org/wikipedia/pt/6/68/Sgt_Peppers.jpg',
  },
  {
    id: 8,
    img: 'https://m.media-amazon.com/images/I/81h+YQ3VrML._AC_SX425_.jpg',
  },
  {
    id: 9,
    img: 'https://turnupthatvolume.files.wordpress.com/2021/02/can.jpg',
  },
  {
    id: 10,
    img: 'https://m.media-amazon.com/images/I/A1pYX4F8vxL._AC_SX679_.jpg',
  },
  {
    id: 13,
    img: 'https://m.media-amazon.com/images/I/71H2+Sj3wmL._AC_SX355_.jpg',
  },
  {
    id: 14,
    img: 'https://upload.wikimedia.org/wikipedia/pt/1/1c/Pet_Sounds.jpg',
  },
];

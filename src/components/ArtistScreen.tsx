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
  const { openArtists, handleOpenArtists } = useHandleNewsContext();
  const { artist } = useApiContext();

  useEffect(() => {
    params.id && handleOpenArtists(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'md'}
      open={openArtists}
      onClose={() => handleOpenArtists(false)}
      aria-labelledby='responsive-dialog-title'
    >
      <DialogContent>
        <Grid container spacing='auto' sx={{ width: 'auto', margin: '0 auto' }}>
          <Grid item xs={12}>
            {artist.map(art => (
              <ImageList key={art.id} sx={{ ml: '30%' }}>
                {itemData
                  .filter(it => it.id === art.id)
                  .map(itt => (
                    <ImageListItem key={itt.id}>
                      <img
                        src={`${itt.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${itt.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={''}
                        loading='lazy'
                      />
                      <ImageListItemBar title={art.name} position='below' />
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
          onClick={() => handleOpenArtists(false)}
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
    img: 'https://hqrock.files.wordpress.com/2011/11/george-harrison-let-it-be-photo.jpg',
  },
  {
    id: 3,
    img: 'https://conteudo.imguol.com.br/blogs/136/files/2017/10/tom-petty.jpg',
  },
  {
    id: 5,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/David_Crosby_2019_by_Glenn_Francis.jpg/1200px-David_Crosby_2019_by_Glenn_Francis.jpg',
  },
  {
    id: 13,
    img: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/c/5/7/cc5781ec76634979f9151d8efe000a44.jpg',
  },
  {
    id: 14,
    img: 'https://popfantasma.com.br/wp-content/uploads/2019/07/jet-black-stranglers.jpg',
  },
  {
    id: 15,
    img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16E73/production/_112111839_stranglers.jpg',
  },
  {
    id: 16,
    img: 'https://cdns-images.dzcdn.net/images/artist/7043f4dfa614ec80b1d9176584bee881/500x500.jpg',
  },
  {
    id: 17,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/John_Cale_%282006%29.jpg/1200px-John_Cale_%282006%29.jpg',
  },
  {
    id: 18,
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Sterling_Morrison_circa_1966.jpg',
  },
  {
    id: 19,
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Maureen_Tucker_circa_1966.jpg',
  },
];

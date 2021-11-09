import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useHandleNewsContext } from '../context/HandleNewsContext';
import { useApiContext } from '../context/ApiContext';

const boxStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface UseParamsProps {
  id: string;
}

export default function NewsModal() {
  const { openModal, handleModal } = useHandleNewsContext();
  const { news } = useApiContext();
  let params = useParams<UseParamsProps>();

  const newsToShow = news.filter(news => news.id.toString() === params.id);

  useEffect(() => {
    params.id && handleModal(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function transformHTMLtoText(param: string) {
    let dom = new DOMParser().parseFromString(param, 'text/html');
    const new_element = dom.body;
    return new_element.innerText;
  }

  return (
    <div>
      <Modal open={openModal} onClose={() => handleModal(false)}>
        <>
          {newsToShow.map(n => {
            return (
              <Box key={n.id} sx={boxStyle}>
                <IconButton
                  aria-label='close'
                  onClick={() => handleModal(false)}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'black',
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  align='center'
                  id='modal-modal-title'
                  variant='h6'
                  component='h2'
                  sx={{ fontSize: '10px' }}
                >
                  {transformHTMLtoText(n.content)}
                </Typography>
              </Box>
            );
          })}
        </>
      </Modal>
    </div>
  );
}

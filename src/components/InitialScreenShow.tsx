import { Box } from '@mui/material';
import { useEffect } from 'react';
import { SiApplemusic } from 'react-icons/si';
import { useParams } from 'react-router-dom';
import { useHandleContext } from '../context/HandleContext';
import InitialScreen from './InitialScreen';

interface UseParamsProps {
  id: string;
}

export default function InitialScreenShow() {
  const { openInitial, handleOpenInitial } = useHandleContext();
  let params = useParams<UseParamsProps>();
  useEffect(() => {
    params.id && handleOpenInitial(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (openInitial === true) {
    return (
      <Box sx={{ width: 400, margin: '0 auto' }}>
        <SiApplemusic size='350px' color='lightblue' />
      </Box>
    );
  } else {
    return <InitialScreen />;
  }
}

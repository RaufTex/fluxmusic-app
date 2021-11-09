import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useApiContext } from '../context/ApiContext';
import formattedDate from '../services/formattedDate';
import formattedDateBr from '../services/formattedDateBr';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useHandleNewsContext } from '../context/HandleNewsContext';
import { Box, Button, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InitialScreen from './InitialScreen';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

interface UseParamsProps {
  id: string;
}

export default function NewsTimeline() {
  let params = useParams<UseParamsProps>();
  const { news } = useApiContext();
  const { openNews, handleNews } = useHandleNewsContext();
  const { handleModal } = useHandleNewsContext();

  useEffect(() => {
    params.id && handleNews(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (openNews === true) {
    return (
      <Grid
        container
        spacing='auto'
        sx={{ width: 700, border: '2px solid #000', margin: '0 auto' }}
      >
        <IconButton
          aria-label='close'
          onClick={() => handleNews(false)}
          sx={{
            ml: 80,
            color: 'black',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Grid item xs={10}>
          <Box sx={{ ml: 36, font: 'Roboto', mt: 1 }}>
            <h1>Notícias</h1>{' '}
          </Box>
          <Timeline>
            {news
              .sort((a, b) => {
                return (
                  formattedDate(b.date).getTime() -
                  formattedDate(a.date).getTime()
                );
              })
              .map(n => {
                return (
                  <>
                    <TimelineItem key={n.id}>
                      <TimelineOppositeContent>
                        <strong>{formattedDateBr(n.date)}</strong>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <strong>Título: </strong>
                        {n.title}
                        <br />
                        <Link to={`${n.id.toString()}`}>
                          <Button onClick={() => handleModal(true)}>
                            Clique para abrir
                          </Button>
                        </Link>
                      </TimelineContent>
                    </TimelineItem>
                  </>
                );
              })}
          </Timeline>
        </Grid>
      </Grid>
    );
  } else
    return (
      <>
        <InitialScreen />
      </>
    );
}

import { Avatar, Box, Icon, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FiMusic } from 'react-icons/fi';
import PersonIcon from '@mui/icons-material/Person';

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ height: 100 }}>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2, mt: 3 }}
            >
              <FiMusic />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, mt: 3 }}
            >
              fluxMusic
            </Typography>
            <IconButton
              aria-controls='simple-menu'
              aria-haspopup='true'
              sx={{ mt: 3 }}
            >
              <Avatar>
                <Icon>
                  <PersonIcon />
                </Icon>
              </Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

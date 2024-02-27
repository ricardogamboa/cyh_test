import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

export default function LoggedOutMenu() {
  return (
    <AppBar position="static">
      <Toolbar>
        <EmojiPeopleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography 
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{pr: 6}}
        >
          IPsychologist
        </Typography>
        <Typography 
          variant="h6"
          noWrap
          component="a"
          href="plans"
          sx={{pr: 6}}
        >
          Plans
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

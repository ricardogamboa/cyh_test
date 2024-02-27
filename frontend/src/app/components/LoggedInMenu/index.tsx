import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

interface Props {
  logOut: ()=>void;
}

export default function LoggedInMenu(props: Props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <EmojiPeopleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography variant="h5"sx={{pr: 6}}>
          IPsychologist
        </Typography>
        <Button color="inherit" onClick={props.logOut}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

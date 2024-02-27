import { useState } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

interface Props {
  name: string;
  order: number;
}

export default function Step(props: Props) {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <ListItem>
      <ListItemButton onClick={handleToggle} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple
            checked={checked}
          />
        </ListItemIcon>
        <ListItemText primary={props.name} />
      </ListItemButton>
    </ListItem>
  );
}

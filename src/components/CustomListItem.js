import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const CustomListItem = ({ user, clickUser }) =>  {
  return (
      <div onClick={()=>clickUser(user)}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={user?.firstname} src={user?.profile_picture} />
        </ListItemAvatar>
        <ListItemText
          primary={user?.firstname}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      </div>
  );
}

export default CustomListItem;
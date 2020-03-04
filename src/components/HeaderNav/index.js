import React from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeWork from '@material-ui/icons/HomeWork';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

import { signOut } from '../../store/modules/auth/actions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleMenu = () => {
    dispatch(signOut());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <HomeWork className={classes.menuButton} />

          <Typography
            variant="h6"
            color="inherit"
            className={classes.title}
            noWrap
          >
            Yapoli - Challange
          </Typography>

          <AccountCircle className={classes.menuButton} />
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Typography variant="h6" color="inherit" noWrap>
              Logout
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

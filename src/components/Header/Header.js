// React
import React from 'react';
// Material-UI
import { AppBar, makeStyles, TextField, Toolbar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
// Others
// import styles from './Header.module.css';

const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    searchBar: {
      display: 'flex',
      alignItems: 'center',
    },
  };
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <img
          src='https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg'
          alt='udemyLogo'
        />
        <div className={classes.searchBar}>
          <Search />
          <TextField
            placeholder='Search for anything'
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

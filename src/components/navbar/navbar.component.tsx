/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import navbarStyles from './navbar.style';
import { ApplicationState } from '../../store';
import { openNavbar } from '../../store/navbar/actions';

const Navbar: React.FC = () => {
  const classes = navbarStyles();
  const { data } = useSelector((state: ApplicationState) => state?.navbar);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch(openNavbar());
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: data?.open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, data?.open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import contentStyles from './content.style';
import { ApplicationState } from '../../store';
import Footer from '../footer/dashboard/footer-dashboard.component';

const Content = (
  { component: Component, path, props }: { component: any, path: string, props: any },
) => {
  const classes = contentStyles();
  const { data } = useSelector((state: ApplicationState) => state?.navbar);

  return (
    <main className={
      clsx(classes.content, {
        [classes.contentShift]: data?.open,
      })
    }
    >
      <div className={classes.drawerHeader} />
      <Component path={path} {...props} />
      <Footer />
    </main>
  );
};

export default Content;

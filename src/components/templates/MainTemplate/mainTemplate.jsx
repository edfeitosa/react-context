import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';
import Routes from '../../../routes';
import { makeStyles } from '@material-ui/core/styles';

import ErrorBoundary from '../../../errorBoundary';

import Header from '../../organisms/Header/header';
import Footer from '../../organisms/Footer/footer';
import styles from './styles';

const useStyles = makeStyles(styles);

const MainTemplate = () => {
  useStyles();
  return (
    <Grid container className='container'>
      <Header />
      <Container className='alignTextToLeft'>
        <BrowserRouter>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </BrowserRouter>
      </Container>
      <Footer />
    </Grid>
  )
}

export default MainTemplate;
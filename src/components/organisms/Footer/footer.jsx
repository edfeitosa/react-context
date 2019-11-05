import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';
const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}></div>
  )
}

export default Footer;
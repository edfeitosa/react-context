import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import styles from './styles';
const useStyles = makeStyles(styles);

const LinkButton = ({
  href,
  textFace,
  executeFunction
}) => {
  const classes = useStyles();
  return (
    <NavLink to={href}>
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonLink}
        onClick={executeFunction}
      >
        {textFace}
      </Button>
    </NavLink>
  )
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  textFace: PropTypes.string.isRequired,
  executeFunction: PropTypes.func
}

LinkButton.defaultProps = {
  href: '/',
  textFace: 'Voltar para página inicial'
}

export default LinkButton;
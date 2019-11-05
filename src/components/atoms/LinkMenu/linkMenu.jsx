import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const LinkMenu = ({
  href,
  title
}) => {
  return (
    <NavLink to={href}>{title}</NavLink>
  )
}

LinkMenu.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

LinkMenu.defaultProps = {
  href: '/',
  title: 'Home'
}

export default LinkMenu;
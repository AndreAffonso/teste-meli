import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from 'utils/routes';
import Logo from 'assets/icons/Logo';
import Searchbar from 'components/Searchbar';

import { Nav } from './styles';

const Navbar = React.memo(({ searchMatchedItems }) => (
  <Nav>
    <Link to={routes.HOME}>
      <Logo />
    </Link>{' '}
    <Searchbar onSubmit={searchMatchedItems} />
  </Nav>
));

Navbar.propTypes = {
  searchMatchedItems: PropTypes.func
};

export default Navbar;

import React, { useEffect } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import ProductList from 'pages/ProductList/Loadable';
import ProductDetails from 'pages/ProductDetails';
import NotFoundPage from 'pages/NotFoundPage/Loadable';

import routes from 'utils/routes';

import Navbar from 'components/Navbar';
import Categories from 'components/Categories';
import messages from './messages';
import { SEARCH_FOR_ITEMS } from './constants';
import GlobalStyle from '../../global-styles';

import { Wrapper, InfoContainer } from './styles';
import saveLastFiveResults from './saveLastFiveResults';

import data from './data';

/* eslint-disable react/prefer-stateless-function */
const HomePage = ({ categories, onCleanCategories, history }) => {
  const searchMatchedItems = query => {
    history.push(SEARCH_FOR_ITEMS(query));
    saveLastFiveResults(query);
  };

  return (
    <>
      <Navbar searchMatchedItems={searchMatchedItems} />
      <Wrapper>
        <Categories categories={categories} />
        <InfoContainer>
          <Switch>
            <Route exact path={routes.HOME} component={() => null} />
            <Route exact path={routes.PRODUCT_LIST} component={ProductList} />
            <Route
              exact
              path={routes.PRODUCT_DETAILS}
              component={ProductDetails}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </InfoContainer>
      </Wrapper>
      <GlobalStyle />
    </>
  );
};

export default compose(
  withRouter,
  data
)(HomePage);

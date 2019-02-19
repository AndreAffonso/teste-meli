import React, { useEffect, useState, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import Loading from 'components/Loading';

import ProductItem from './ProductItem';
import { PARSE_QUERY, META_TAG_DESCRIPTION } from './constants';
import data from './data';

const ProductList = ({
  location,
  onGetProducts,
  onCleanProducts,
  products,
  isLoading
}) => {
  const query = PARSE_QUERY(location);

  useEffect(
    () => {
      onGetProducts(query);
      return onCleanProducts;
    },
    [location]
  );

  return (
    <>
      <Loading isLoading={isLoading}>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Loading>
    </>
  );
};

ProductList.propTypes = {};

export default compose(data)(ProductList);

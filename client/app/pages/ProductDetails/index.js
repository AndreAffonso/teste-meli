import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import data from './data';
import { compose } from 'redux';

import Loading from 'components/Loading';

import {
  Flex,
  Image,
  QuantitySold,
  Name,
  Price,
  Button,
  FloatRight,
  ImageWrapper,
  Decimals,
  Amount,
  Description,
  DescriptionTitle,
  DescriptionContent
} from './styles';

const ProductDetails = ({
  match,
  onGetProductDetails,
  onCleanProductDetails,
  onCleanCategories,
  product,
  isLoading
}) => {
  useEffect(() => {
    onGetProductDetails(match.params.id);
    return () => {
      onCleanProductDetails();
      onCleanCategories();
    };
  }, []);

  return (
    <Loading isLoading={isLoading}>
      <Flex>
        <ImageWrapper>
          <Image src={product.picture} />
        </ImageWrapper>
        <FloatRight>
          <QuantitySold>
            {product.sold_quantity} productos vendidos
          </QuantitySold>
          <Name>{product.title}</Name>
          <Price>
            {' '}
            <Amount>{product.price && `$ ${product.price.amount}`}</Amount>
            <Decimals>{product.price && product.price.decimals}</Decimals>{' '}
          </Price>
          <Button>Comprar</Button>
        </FloatRight>
      </Flex>
      <Description>
        <DescriptionTitle>Descripción del producto</DescriptionTitle>
        <DescriptionContent>{product.description}</DescriptionContent>
      </Description>
    </Loading>
  );
};

ProductDetails.propTypes = {
  onGetProductDetails: PropTypes.func,
  onCleanProductDetails: PropTypes.func,
  onCleanCategories: PropTypes.func,
  product: PropTypes.object,
  isLoading: PropTypes.bool
};

export default compose(data)(ProductDetails);

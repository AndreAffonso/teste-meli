import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';

import {
  Wrapper,
  FloatLeft,
  FloatRight,
  Name,
  Image,
  Price,
  City,
  Column
} from './styles';

const ProductItem = React.memo(({ product }) => (
  <Wrapper to={`/items/${product.id}`}>
    <FloatLeft>
      <Image src={product.thumbnail} />
      <Column>
        <Price>$ {product.price}</Price>
        <Name>{product.title}</Name>
      </Column>
    </FloatLeft>
    <FloatRight>
      <City>Capital</City>
    </FloatRight>
  </Wrapper>
));

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;

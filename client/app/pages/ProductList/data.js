import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import compose from 'recompose/compose';
import injectReducer from 'utils/injectReducer';
import { cleanProducts, getProducts } from 'containers/Product/actions';

import {
  makeSelectProducts,
  makeSelectIsLoadingProducts
} from 'containers/Product/selectors';

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
  isLoading: makeSelectIsLoadingProducts()
});

function mapDispatchToProps(dispatch) {
  return {
    onCleanProducts: () => dispatch(cleanProducts()),
    onGetProducts: query => dispatch(getProducts(query))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect);

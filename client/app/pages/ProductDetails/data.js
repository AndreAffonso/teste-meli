import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import compose from 'recompose/compose';
import {
  cleanProductDetails,
  getProductDetails,
  cleanCategories
} from 'containers/Product/actions';

import {
  makeSelectProductDetails,
  makeSelectIsLoadingProductDetails
} from 'containers/Product/selectors';

const mapStateToProps = createStructuredSelector({
  product: makeSelectProductDetails(),
  isLoading: makeSelectIsLoadingProductDetails()
});

function mapDispatchToProps(dispatch) {
  return {
    onCleanProductDetails: () => dispatch(cleanProductDetails()),
    onGetProductDetails: id => dispatch(getProductDetails(id)),
    onCleanCategories: () => dispatch(cleanCategories())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect);

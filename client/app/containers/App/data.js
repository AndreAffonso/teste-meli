import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import compose from 'recompose/compose';
import injectReducer from 'utils/injectReducer';
import { cleanCategories } from 'containers/Product/actions';

import { makeSelectCategories } from 'containers/Product/selectors';

import reducer from 'containers/Product/reducer';

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories()
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'product', reducer });

export default compose(
  withReducer,
  withConnect
);

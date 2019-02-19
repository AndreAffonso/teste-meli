import { fromJS } from 'immutable';
import { handle } from 'redux-pack';

import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  CLEAN_PRODUCTS,
  CLEAN_PRODUCT_DETAILS,
  CLEAN_CATEGORIES
} from './constants';

export const initialState = fromJS({
  products: [],
  categories: [],
  productDetails: {},
  isLoadingProducts: false,
  isLoadingProductDetails: false
});

function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return handle(state, action, {
        start: newState => newState.set('isLoadingProducts', true),
        finish: newState => newState.set('isLoadingProducts', false),
        success: newState =>
          newState
            .set('products', action.payload.data.items)
            .set('categories', action.payload.data.categories)
      });

    case GET_PRODUCT_DETAILS:
      return handle(state, action, {
        start: newState => newState.set('isLoadingProductDetails', true),
        finish: newState => newState.set('isLoadingProductDetails', false),
        success: newState =>
          newState.set('productDetails', action.payload.data.item)
      });

    case CLEAN_PRODUCTS:
      return state.set('products', []);
    case CLEAN_PRODUCT_DETAILS:
      return state.set('productDetails', []);
    case CLEAN_CATEGORIES:
      return state.set('categories', []);
    default:
      return state;
  }
}

export default productReducer;

import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectProductDomain = state => state.get('product', initialState);

export const makeSelectProducts = () =>
  createSelector(selectProductDomain, substate => substate.toJS().products);

export const makeSelectProductDetails = () =>
  createSelector(
    selectProductDomain,
    substate => substate.toJS().productDetails
  );

export const makeSelectCategories = () =>
  createSelector(selectProductDomain, substate => substate.toJS().categories);

export const makeSelectIsLoadingProducts = () =>
  createSelector(
    selectProductDomain,
    substate => substate.toJS().isLoadingProducts
  );

export const makeSelectIsLoadingProductDetails = () =>
  createSelector(
    selectProductDomain,
    substate => substate.toJS().isLoadingProductDetails
  );

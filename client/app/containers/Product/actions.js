import { getMatchedProducts, getProductById } from 'api/product';

import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  CLEAN_PRODUCTS,
  CLEAN_PRODUCT_DETAILS,
  CLEAN_CATEGORIES
} from './constants';

export function getProducts(query) {
  return {
    type: GET_PRODUCTS,
    promise: getMatchedProducts(query)
  };
}

export function getProductDetails(productId) {
  return {
    type: GET_PRODUCT_DETAILS,
    promise: getProductById(productId)
  };
}

export function cleanProducts() {
  return {
    type: CLEAN_PRODUCTS
  };
}

export function cleanProductDetails() {
  return {
    type: CLEAN_PRODUCT_DETAILS
  };
}

export function cleanCategories() {
  return {
    type: CLEAN_CATEGORIES
  };
}

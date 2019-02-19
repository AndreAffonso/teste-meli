import axios from 'axios';

import { HOST } from './constants';

const PRODUCTS_TO_SEARCH = query => `${HOST}/items?search=${query}`;

const PRODUCT_BY_ID = id => `${HOST}/items/${id}`;

export const getMatchedProducts = query => axios.get(PRODUCTS_TO_SEARCH(query));

export const getProductById = id => axios.get(PRODUCT_BY_ID(id));

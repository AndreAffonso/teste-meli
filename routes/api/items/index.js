const router = require('express').Router();
const axios = require('axios');
const HOST = 'https://api.mercadolibre.com';

const replaceSpaces = value => value.trim().replace(/ /g, '-');

const getInteger = number => Math.floor(number);
const getDecimals = number =>
  (number - getInteger(number)).toFixed(2).split('.')[1];

const PRODUCT_BY_ID = id => `${HOST}/items/${id}`;
const getProductById = id => axios.get(PRODUCT_BY_ID(id));
const getDescriptionById = id => axios.get(`${PRODUCT_BY_ID(id)}/description`);

const PRODUCTS_TO_SEARCH = query =>
  `https://api.mercadolibre.com/sites/MLA/search?q=${replaceSpaces(query)}`;

const createProductsListData = data => ({
  author: {
    name: 'String',
    lastname: 'String'
  },
  categories:
    data['available_filters'] &&
    data['available_filters'].find(filter => filter.id === 'category')
      ? data['available_filters']
          .find(filter => filter.id === 'category')
          .values.map(category => category.name)
      : [],

  items: data.results.slice(0, 4)
});

const createProductDetailsData = data => ({
  author: {
    name: 'String',
    lastname: 'String'
  },
  item: {
    id: data.id,
    title: data.title,
    price: {
      currency: data.currency_id,
      amount: getInteger(data.base_price),
      decimals: getDecimals(data.base_price)
    },
    picture: data.pictures[0].url,
    condition: data.condition,
    free_shipping:
      data.shipping &&
      data.shipping.free_methods &&
      data.shipping.free_methods.rule &&
      data.shipping.free_methods.rule.default,
    sold_quantity: data.sold_quantity,
    description: data.description || ''
  }
});

router.get('/', function(req, res, next) {
  if (req.query.search) {
    axios
      .get(PRODUCTS_TO_SEARCH(req.query.search))
      .then(response => {
        return res.json(createProductsListData(response.data));
      })
      .catch(err => console.log('err =>', err));
  } else {
    return res.json({ id: null });
  }
});

router.get('/:id', function(req, res, next) {
  if (req.params.id) {
    let dataToSend = {};
    getProductById(req.params.id).then(response => {
      dataToSend = response.data;
      getDescriptionById(req.params.id).then(descriptionResponse => {
        dataToSend.description =
          descriptionResponse.data && descriptionResponse.data.plain_text;
        res.json(createProductDetailsData(dataToSend));
      });
    });
  } else {
    return res.json({ id: null });
  }
});

module.exports = router;

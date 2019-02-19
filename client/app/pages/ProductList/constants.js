import qs from 'qs';

export const PARSE_QUERY = location =>
  qs
    .parse(location.search, { ignoreQueryPrefix: true })
    .search.replace(/-/g, ' ');

export const META_TAG_DESCRIPTION = query =>
  `Encuentra ${query} en Mercado Libre Argentina. Descubre la mejor forma de comprar online.`;

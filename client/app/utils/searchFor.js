export const SEARCH_FOR = somethingToBeSearched => query =>
  `/${somethingToBeSearched}?search=${query.trim().replace(/ /g, '-')}`;

export default SEARCH_FOR;

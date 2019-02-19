import parseLocalStorageToArray from 'utils/parseLocalStorageToArray';

export const saveLastFiveResults = query =>
  !parseLocalStorageToArray('lastFiveResults').includes(query) &&
  localStorage.setItem('lastFiveResults', [
    query,
    ...parseLocalStorageToArray('lastFiveResults').slice(0, 4)
  ]);

export default saveLastFiveResults;

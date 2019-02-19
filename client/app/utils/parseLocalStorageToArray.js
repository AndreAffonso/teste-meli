const parseLocalStorageToArray = data =>
  localStorage.getItem(data) ? localStorage.getItem(data).split(',') : [];

export default parseLocalStorageToArray;

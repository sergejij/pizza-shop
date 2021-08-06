const setSortBy = (index) => ({
  type: 'SET_SORT_BY',
  payload: index,
});

const setCategory = (index) => ({
  type: 'SET_CATEGORY',
  payload: index,
});

export { setSortBy, setCategory };

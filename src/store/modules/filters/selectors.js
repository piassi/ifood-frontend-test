export function getAllFilters(state) {
  return state.filters;
}

export function getFilterByName(name) {
  return (state) => state.filters[name];
}

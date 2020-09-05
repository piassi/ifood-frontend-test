import axios from 'axios';

const filtersApi = axios.create({
  baseURL: 'http://www.mocky.io/v2/',
});

export async function getAllFilters() {
  const { data } = await filtersApi.get('/5a25fade2e0000213aa90776');

  const filters = {};

  data.filters.forEach((filter) => {
    filters[filter.id] = { ...filter };
  });

  return filters;
}

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllFilters } from '../services/filters';
import { LocaleFilter } from './LocaleFilter';
import { CountryFilter } from './CountryFilter';
import { DateTimeFilter } from './DateTimeFilter';
import { LimitFilter } from './LimitFilter';
import { Pagination } from './Pagination';

export function Filters(props) {
  const [filters, setFilters] = useState(null);
  const { playlistsNameFilter } = props;

  useEffect(() => {
    async function loadFiltersInputs() {
      const filtersFromApi = await getAllFilters();
      setFilters(filtersFromApi);
    }

    loadFiltersInputs();
  }, []);

  if (!filters) {
    return '';
  }

  return (
    <>
      <LocaleFilter name={filters.locale.name} values={filters.locale.values} />
      <CountryFilter
        name={filters.country.name}
        values={filters.country.values}
      />
      <DateTimeFilter name={filters.timestamp.name} />
      <LimitFilter
        name={filters.limit.name}
        min={filters.limit.min}
        max={filters.limit.max}
      />
      <Pagination
        name={filters.offset.name}
        playlistsNameFilter={playlistsNameFilter}
      />
    </>
  );
}

Filters.defaultProps = {
  playlistsNameFilter: '',
};

Filters.propTypes = {
  playlistsNameFilter: PropTypes.string,
};

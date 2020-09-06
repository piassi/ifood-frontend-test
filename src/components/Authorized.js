import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Filters } from './Filters';
import { SearchForm } from './SearchForm';
import { getPlaylistsItems } from '../store/modules/playlists/selectors';
import { loadPlaylists } from '../store/modules/playlists/actions';
import { getAllFilters } from '../store/modules/filters/selectors';
import { PlaylistCard } from './PlaylistCard';
import useRefreshData from '../hooks/useRefreshData';

export function Authorized() {
  const dispatch = useDispatch();
  const [playlistsNameFilter, setPlaylistsNameFilter] = useState('');
  const playlists = useSelector(getPlaylistsItems(playlistsNameFilter));
  const filters = useSelector(getAllFilters);
  const refreshData = useRefreshData(30000);

  useEffect(() => {
    dispatch(loadPlaylists(filters));
  }, [dispatch, filters, refreshData]);

  return (
    <Row>
      <Col md={3}>
        <SearchForm
          handleOnChange={setPlaylistsNameFilter}
          value={playlistsNameFilter}
        />
        <Filters playlistsNameFilter={playlistsNameFilter} />
      </Col>

      <Col md={9}>
        <Row>
          {playlists.map(({ id, name, description, images }) => (
            <Col xs={6} lg={4} key={id} className="mb-4">
              <PlaylistCard
                name={name}
                description={description}
                images={images}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

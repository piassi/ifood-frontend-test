import React from 'react';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterByName } from '../store/modules/filters/selectors';
import { setOffsetFilter } from '../store/modules/filters/actions';
import { getPlaylistsTotal } from '../store/modules/playlists/selectors';

export function Pagination(props) {
  const { name, playlistsNameFilter } = props;
  const limit = useSelector(getFilterByName('limit'));
  const total = useSelector(getPlaylistsTotal);
  const dispatch = useDispatch();

  const numberOfPages = Math.ceil(total / limit);
  const pagination = [];

  if (numberOfPages <= 1 || playlistsNameFilter) {
    return '';
  }

  for (let pageNumber = 0; pageNumber < numberOfPages; pageNumber += 1) {
    pagination.push({
      page: pageNumber + 1,
      offsetValue: pageNumber * limit,
    });
  }

  return (
    <Form.Group controlId="offsetFilter">
      <Form.Label className="d-block">{name}</Form.Label>

      <ButtonGroup aria-label="Navegação de páginas">
        {pagination.map(({ page, offsetValue }) => (
          <Button
            onClick={() => dispatch(setOffsetFilter(offsetValue))}
            key={page}
          >
            {page}
          </Button>
        ))}
      </ButtonGroup>
    </Form.Group>
  );
}

Pagination.defaultProps = {
  playlistsNameFilter: '',
};

Pagination.propTypes = {
  name: PropTypes.string.isRequired,
  playlistsNameFilter: PropTypes.string,
};

import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterByName } from '../store/modules/filters/selectors';
import { setTimestampFilter } from '../store/modules/filters/actions';

export function DateTimeFilter(props) {
  const { name } = props;
  const timestamp = useSelector(getFilterByName('timestamp'));
  const dispatch = useDispatch();

  return (
    <Form.Group controlId="countryFilter">
      <Form.Label>{name}</Form.Label>
      <DateTime
        value={timestamp}
        onChange={(newDate) => dispatch(setTimestampFilter(newDate))}
      />
    </Form.Group>
  );
}

DateTimeFilter.propTypes = {
  name: PropTypes.string.isRequired,
};

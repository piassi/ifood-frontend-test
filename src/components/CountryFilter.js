import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterByName } from '../store/modules/filters/selectors';
import { setCountryFilter } from '../store/modules/filters/actions';

export function CountryFilter(props) {
  const { name, values } = props;
  const country = useSelector(getFilterByName('country'));
  const dispatch = useDispatch();

  return (
    <Form.Group controlId="countryFilter">
      <Form.Label>{name}</Form.Label>
      <Form.Control
        as="select"
        value={country}
        onChange={(e) => dispatch(setCountryFilter(e.target.value))}
      >
        {values.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}

CountryFilter.defaultProps = {
  values: [],
};

CountryFilter.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.object),
};

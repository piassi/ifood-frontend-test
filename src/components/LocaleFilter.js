import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterByName } from '../store/modules/filters/selectors';
import { setLocaleFilter } from '../store/modules/filters/actions';

export function LocaleFilter(props) {
  const { name, values } = props;
  const locale = useSelector(getFilterByName('locale'));
  const dispatch = useDispatch();

  return (
    <Form.Group controlId="localeFilter">
      <Form.Label>{name}</Form.Label>
      <Form.Control
        as="select"
        value={locale}
        onChange={(e) => dispatch(setLocaleFilter(e.target.value))}
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

LocaleFilter.defaultProps = {
  values: [],
};

LocaleFilter.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.object),
};

import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterByName } from '../store/modules/filters/selectors';
import {
  setLimitFilter,
  setOffsetFilter,
} from '../store/modules/filters/actions';

export function LimitFilter(props) {
  const { name, min, max } = props;
  const limit = useSelector(getFilterByName('limit'));
  const dispatch = useDispatch();

  function handleLimitChange(value) {
    let limitValue = value;

    if (value < min) {
      limitValue = min;
    }

    if (value > max) {
      limitValue = max;
    }

    dispatch(setLimitFilter(parseInt(limitValue)));
    dispatch(setOffsetFilter(0));
  }

  return (
    <Form.Group controlId="limitFilter">
      <Form.Label>{name}</Form.Label>
      <Form.Control
        type="number"
        value={limit}
        onChange={(e) => handleLimitChange(e.target.value)}
        min={min}
        max={max}
      />
    </Form.Group>
  );
}

LimitFilter.defaultProps = {
  min: 1,
  max: 50,
};

LimitFilter.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export function SearchForm(props) {
  const { handleOnChange, value } = props;

  return (
    <Form>
      <Form.Group controlId="search">
        <Form.Label>Pesquisar por nome:</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={(e) => handleOnChange(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}

SearchForm.defaultProps = {
  value: '',
};

SearchForm.propTypes = {
  value: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
};

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getArgFromUrl } from '../utils/getArgFromUrl';
import { Authorized } from './Authorized';
import { Unauthorized } from './Unauthorized';

export function Spotifood() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const argAccessToken = getArgFromUrl('access_token');
    if (argAccessToken) {
      setAccessToken(argAccessToken);
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-primary text-center my-4">SpotiFood</h1>
        </Col>
      </Row>

      {accessToken ? <Authorized /> : <Unauthorized />}
    </Container>
  );
}

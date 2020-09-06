import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Authorized } from './Authorized';
import { Unauthorized } from './Unauthorized';
import {
  getAccessToken,
  getAccessTokenExpireDate,
  hasTokenExpired,
} from '../utils/token';

export function Spotifood() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const providedAccessToken = getAccessToken();

    if (providedAccessToken) {
      setAccessToken(providedAccessToken);
      localStorage.setItem('access_token', providedAccessToken);

      const tokenExpiresIn = getAccessTokenExpireDate();
      localStorage.setItem('access_token_expires_in', tokenExpiresIn);

      if (hasTokenExpired(tokenExpiresIn)) {
        localStorage.setItem('access_token', '');
        localStorage.setItem('access_token_expires_in', '');
        window.location.href = 'http://localhost:3000';
      }
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

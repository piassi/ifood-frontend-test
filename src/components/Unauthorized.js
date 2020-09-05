import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

export function Unauthorized() {
  // eslint-disable-next-line operator-linebreak
  const authorizationUrl =
    'https://accounts.spotify.com/pt-BR/authorize?client_id=2a348ab65416430a97fd933c3256642f&response_type=token&redirect_uri=http:%2F%2Flocalhost:3000';

  return (
    <Row>
      <Col className="justify-content-center text-center flex-column d-flex align-items-center">
        <div>
          <p>
            Conecte seu Spotify ao SpotiFood e
            <br />
            descubra essa incrível fusão de sabores e sons :)
          </p>

          <Button href={authorizationUrl}>Conectar</Button>
        </div>
      </Col>
    </Row>
  );
}

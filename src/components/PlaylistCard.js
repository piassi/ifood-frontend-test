import React from 'react';
import { Card } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

export function PlaylistCard(props) {
  const { name, description, images = '' } = props;
  let image = '';

  if (images.length) {
    image = <Card.Img className="mb-4" variant="top" src={images[0].url} />;
  }

  return (
    <Card className="text-dark h-100 mw-100">
      <Card.Body>
        {image}

        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-muted font-size-sm">
          {ReactHtmlParser(description)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

PlaylistCard.defaultProps = {
  images: [],
};

PlaylistCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object),
};

import React from 'react';

import Card from 'react-bootstrap/Card';

function Jumbo() {
  React.useEffect(() => {});
  return (
    <Card className="bg-dark text-white" style={{ borderRadius: 0 }}>
      <div
        variant="top"
        alt="Card image"
        style={{
          backgroundImage:
            'url(' + require('../../assets/jumbo/jumbo-image.jpg') + ')',
          height: '16rem',
          width: '100%',
        }}
      />
      <Card.ImgOverlay>
        <Card.Title>Hi, Welcome to My Personal Website !</Card.Title>
        <Card.Text>
          I am happy to assist you with your next website.
          <span aria-label="wink" role="img">
            😉
          </span>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Jumbo;

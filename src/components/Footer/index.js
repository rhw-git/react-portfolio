import React from 'react';
// import for icon from front awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import for bootstrap
import Card from 'react-bootstrap/Card';

function FooterLayout() {
  React.useEffect(() => {});
  return (
    <Card className="bg-dark text-white py-0" style={{ borderRadius: 0 }}>
      <div
        variant="top"
        alt="Card image"
        style={{
          backgroundImage:
            'url(' + require('../../assets/jumbo/jumbo-image.jpg') + ')',
          height: '4rem',
          width: '100%',
        }}
      />
      <Card.ImgOverlay className="d-flex align-items-end justify-content-center example-parent py-1">
        <a
          className="col-example py-0 my-0 px-4"
          href="https://github.com/rhw-git"
          alt="gitHub-link"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              height: '3rem',
              width: '3rem',
              color: 'white',
            }}
          />
        </a>
        <a
          className="col-example py-0 my-0 px-4"
          href="https://www.linkedin.com/in/ruohan-wang-78990590/"
          alt="linkedIn-link"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{
              height: '3rem',
              width: '3rem',
              color: 'white',
            }}
          />
        </a>
      </Card.ImgOverlay>
    </Card>
  );
}

export default FooterLayout;

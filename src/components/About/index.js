import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import profileImage from '../../assets/about/profile-img.png';

function About() {
  return (
    <Container fluid className="px-4" id="about">
      <Row>
        <Col xs={12} md={8}>
          <Row className="py-5 text-muted px-0">
            <Col xs={12}>
              <p>HELLO THERE!</p>
            </Col>
            <Col className="pb-4" xs={12} md={2}>
              <Image
                src={profileImage}
                roundedCircle
                style={{ width: '6rem' }}
              />
            </Col>
            <Col xs={12} md={10}>
              <h3 className="pb-5 text-sm-left text-md-middle pt-md-3">
                My name is Ruoha Wang, and I develop websites.
              </h3>
            </Col>
            <Col xs={12}>
              <h5 className="pb-3">
                I am based out of the Bay Area at Northern California.I work on
                both front-end & back-end applicaitons.
              </h5>
              <h5 className="pb-3">
                As a web Develop, I beleive that the good communications between
                all parties are essential for a successful project. So I am
                exciting to work with you closely to lauch your next site.{' '}
              </h5>
              <h5 className="pb-3">
                Let me know how can I be at your service, and I am just an email
                / phone call away.
              </h5>
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={4}>
          <div className="py-5 text-muted">
            <p className="text-sm-right">EXPERIENCES WITH:</p>
            <div className="text-sm-right">
              <h5>CSS</h5>
              <h5>JavaScript</h5>
              <h5>Web / Third-Party / Server-Side APIs</h5>
              <h5>Node</h5>
              <h5>NoSQL</h5>
              <h5>PWA</h5>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

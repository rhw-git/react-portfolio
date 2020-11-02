import React, { useState } from 'react';
// import for bootstrap
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
// import for icon from front awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import for react-reveal
import Bounce from 'react-reveal/Bounce';

function Portfolio() {
  //----------hooks-----------//
  // hook for gitHub link
  const [gitHubLinkShowProj1, setgitHubLinkShowProj1] = useState(false);
  const [gitHubLinkShowProj2, setgitHubLinkShowProj2] = useState(false);
  const [gitHubLinkShowProj3, setgitHubLinkShowProj3] = useState(false);
  const [gitHubLinkShowProj4, setgitHubLinkShowProj4] = useState(false);
  const [gitHubLinkShowProj5, setgitHubLinkShowProj5] = useState(false);
  const [gitHubLinkShowProj6, setgitHubLinkShowProj6] = useState(false);
  // hook for background image transparency
  const [
    backgroundTransparencyProj1,
    setBackgroundTransparencyProj1,
  ] = useState('100%');
  const [
    backgroundTransparencyProj2,
    setBackgroundTransparencyProj2,
  ] = useState('100%');
  const [
    backgroundTransparencyProj3,
    setBackgroundTransparencyProj3,
  ] = useState('100%');
  const [
    backgroundTransparencyProj4,
    setBackgroundTransparencyProj4,
  ] = useState('100%');
  const [
    backgroundTransparencyProj5,
    setBackgroundTransparencyProj5,
  ] = useState('100%');
  const [
    backgroundTransparencyProj6,
    setBackgroundTransparencyProj6,
  ] = useState('100%');
  // hook for card shadow
  const [shadowShowProj1, setShadowShowProj1] = useState('none');
  const [shadowShowProj2, setShadowShowProj2] = useState('none');
  const [shadowShowProj3, setShadowShowProj3] = useState('none');
  const [shadowShowProj4, setShadowShowProj4] = useState('none');
  const [shadowShowProj5, setShadowShowProj5] = useState('none');
  const [shadowShowProj6, setShadowShowProj6] = useState('none');
  //----------return----------//
  return (
    <Container fluid className="px-4 py-4" id="portfolio">
      <CardColumns>
        <Bounce left>
          <Card
            border="light"
            onMouseEnter={() => {
              setgitHubLinkShowProj1(true);
              setBackgroundTransparencyProj1('30%');
              setShadowShowProj1('shadow');
            }}
            onMouseLeave={() => {
              setgitHubLinkShowProj1(false);
              setBackgroundTransparencyProj1('100%');
              setShadowShowProj1('none');
            }}
            className={shadowShowProj1}
          >
            <Card.Img
              variant="top"
              src={require(`../../assets/Portfolio/cosmopolitan-tastes.png`)}
              alt="budget-tracker"
              className="mx-1"
              key="budget-tracker"
              style={{ opacity: backgroundTransparencyProj1 }}
            />
            <Card.ImgOverlay className="d-flex align-items-end example-parent">
              <h5 className="mr-auto py-0 my-0 col-example">
                cosmopolitan tastes
              </h5>
              <a
                className="col-example py-0 my-0"
                href="https://github.com/TheresaRutledge/CosmopolitanTastes/"
                alt="gitHub-link"
                target="_blank"
              >
                {gitHubLinkShowProj1 && (
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      height: '3rem',
                      width: '3rem',
                      color: '#252525',
                    }}
                  />
                )}
              </a>
            </Card.ImgOverlay>
          </Card>
          <Card
            border="light"
            onMouseEnter={() => {
              setgitHubLinkShowProj2(true);
              setBackgroundTransparencyProj2('30%');
              setShadowShowProj2('shadow');
            }}
            onMouseLeave={() => {
              setgitHubLinkShowProj2(false);
              setBackgroundTransparencyProj2('100%');
              setShadowShowProj2('none');
            }}
            className={shadowShowProj2}
          >
            <Card.Img
              variant="top"
              src={require(`../../assets/Portfolio/budget-tracker.png`)}
              alt="budget-tracker"
              className="mx-1"
              key="budget-tracker"
              style={{ opacity: backgroundTransparencyProj2 }}
            />
            <Card.ImgOverlay className="d-flex align-items-end example-parent">
              <h5 className="mr-auto py-0 my-0 col-example">budget tracker</h5>
              <a
                className="col-example py-0 my-0"
                href="https://github.com/rhw-git/budget-tracker"
                alt="gitHub-link"
                target="_blank"
              >
                {gitHubLinkShowProj2 && (
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      height: '3rem',
                      width: '3rem',
                      color: '#252525',
                    }}
                  />
                )}
              </a>
            </Card.ImgOverlay>
          </Card>
          <Card
            border="light"
            onMouseEnter={() => {
              setgitHubLinkShowProj3(true);
              setBackgroundTransparencyProj3('30%');
              setShadowShowProj3('shadow');
            }}
            onMouseLeave={() => {
              setgitHubLinkShowProj3(false);
              setBackgroundTransparencyProj3('100%');
              setShadowShowProj3('none');
            }}
            className={shadowShowProj3}
          >
            <Card.Img
              variant="top"
              src={require(`../../assets/Portfolio/tech-blog.png`)}
              alt="budget-tracker"
              className="mx-1"
              key="budget-tracker"
              style={{ opacity: backgroundTransparencyProj3 }}
            />
            <Card.ImgOverlay className="d-flex align-items-end example-parent">
              <h5 className="mr-auto py-0 my-0 col-example">teach blog</h5>
              <a
                className="col-example py-0 my-0"
                href="https://github.com/rhw-git/Tech-Blog"
                alt="gitHub-link"
                target="_blank"
              >
                {gitHubLinkShowProj3 && (
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      height: '3rem',
                      width: '3rem',
                      color: '#252525',
                    }}
                  />
                )}
              </a>
            </Card.ImgOverlay>
          </Card>
          <Card
            border="light"
            onMouseEnter={() => {
              setgitHubLinkShowProj4(true);
              setBackgroundTransparencyProj4('30%');
              setShadowShowProj4('shadow');
            }}
            onMouseLeave={() => {
              setgitHubLinkShowProj4(false);
              setBackgroundTransparencyProj4('100%');
              setShadowShowProj4('none');
            }}
            className={shadowShowProj4}
          >
            <Card.Img
              variant="top"
              src={require(`../../assets/Portfolio/weather-dashboard.png`)}
              alt="budget-tracker"
              className="mx-1"
              key="budget-tracker"
              style={{ opacity: backgroundTransparencyProj4 }}
            />
            <Card.ImgOverlay className="d-flex align-items-end example-parent">
              <h5 className="mr-auto py-0 my-0 col-example">
                weather dashboard
              </h5>
              <a
                className="col-example py-0 my-0"
                href="https://github.com/rhw-git/challenge-06-Weather-Dashboard"
                alt="gitHub-link"
                target="_blank"
              >
                {gitHubLinkShowProj4 && (
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      height: '3rem',
                      width: '3rem',
                      color: '#252525',
                    }}
                  />
                )}
              </a>
            </Card.ImgOverlay>
          </Card>
          <Card
            border="light"
            onMouseEnter={() => {
              setgitHubLinkShowProj5(true);
              setBackgroundTransparencyProj5('30%');
              setShadowShowProj5('shadow');
            }}
            onMouseLeave={() => {
              setgitHubLinkShowProj5(false);
              setBackgroundTransparencyProj5('100%');
              setShadowShowProj5('none');
            }}
            className={shadowShowProj5}
          >
            <Card.Img
              variant="top"
              src={require(`../../assets/Portfolio/code-quiz.png`)}
              alt="budget-tracker"
              className="mx-1"
              key="budget-tracker"
              style={{ opacity: backgroundTransparencyProj5 }}
            />
            <Card.ImgOverlay className="d-flex align-items-end example-parent">
              <h5 className="mr-auto py-0 my-0 col-example">code quiz</h5>
              <a
                className="col-example py-0 my-0"
                href="https://github.com/rhw-git/book-search-engine"
                alt="gitHub-link"
                target="_blank"
              >
                {gitHubLinkShowProj5 && (
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      height: '3rem',
                      width: '3rem',
                      color: '#252525',
                    }}
                  />
                )}
              </a>
            </Card.ImgOverlay>
          </Card>
          <Card
            border="light"
            onMouseEnter={() => {
              setgitHubLinkShowProj6(true);
              setBackgroundTransparencyProj6('30%');
              setShadowShowProj6('shadow');
            }}
            onMouseLeave={() => {
              setgitHubLinkShowProj6(false);
              setBackgroundTransparencyProj6('100%');
              setShadowShowProj6('none');
            }}
            className={shadowShowProj6}
          >
            <Card.Img
              variant="top"
              src={require(`../../assets/Portfolio/whats-in-your-fridge.png`)}
              alt="budget-tracker"
              className="mx-1"
              key="budget-tracker"
              style={{ opacity: backgroundTransparencyProj6 }}
            />
            <Card.ImgOverlay className="d-flex align-items-end example-parent">
              <h5 className="mr-auto py-0 my-0 col-example">
                what's in your fridge
              </h5>
              <a
                className="col-example py-0 my-0"
                href="https://github.com/TheresaRutledge/whats-in-your-fridge"
                alt="gitHub-link"
                target="_blank"
              >
                {gitHubLinkShowProj6 && (
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{
                      height: '3rem',
                      width: '3rem',
                      color: '#252525',
                    }}
                  />
                )}
              </a>
            </Card.ImgOverlay>
          </Card>
        </Bounce>
      </CardColumns>
    </Container>
  );
}

export default Portfolio;

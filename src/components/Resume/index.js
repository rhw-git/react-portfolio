import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume() {
  //----------return----------//
  return (
    <Container fluid className="px-4" id="resume">
      <Row>
        <Col xs={12} md={9}>
          <Row className="pt-5 text-muted px-0">
            <Container fluid className="pb-5">
              <Col xs={12} className="pt-2" data-testid="education">
                <p>EDUCATION</p>
              </Col>
              <Col xs={12} md={10}>
                <h4 className="pb-2 text-sm-left text-md-middle pt-md-3">
                  UC Berkeley Web Developing Bootcamp
                </h4>
                <h6>05/19/2020 - PRESNET</h6>
                <h4 className="pb-2 text-sm-left text-md-middle pt-md-3">
                  University of California at Berkeley, Berkeley, CA
                </h4>
                <h6>Master of Architecture // 08/19/2015 - 05/13/2016</h6>
                <h3 className="pb-2 text-sm-left text-md-middle pt-md-3">
                  University of Southern California, Los Angeles, CA
                </h3>
                <h6>Bachelor of Architecture // 08/24/2009 - 05/16/2014</h6>
              </Col>
            </Container>
            <Container fluid>
              <Col xs={12} className="pt-2" data-testid="experience">
                <p>PROFESSIONAL EXPERIENCE</p>
              </Col>
              <Col xs={12} md={11}>
                <Row className="align-items-center">
                  <Col xs={12} md={7}>
                    <h4 className="pb-2 text-sm-left text-md-middle pt-md-3">
                      AECOM, OAKLAND / SAN FRANCISCO, CA
                    </h4>
                  </Col>
                  <Col xs={12} md={5}>
                    <p className="text-mute text-sm-left text-md-right">
                      full-time: 08/29/2016 to PRESENT
                    </p>
                  </Col>
                  <Col xs={12}>
                    <ul className="pb-3" style={{ listStyleType: 'square' }}>
                      <li>
                        <h6>
                          creating and updating detailed drawings, using AutoCAD
                          and Microstation software, based on design criteria,
                          sketches, plans, specifications, and instructions
                        </h6>
                      </li>
                      <li>
                        <h6>
                          coordinating architectural work with work of related
                          disciplines, such as structural, mechanical and
                          electrical
                        </h6>
                      </li>
                      <li>
                        <h6>
                          investigating building materials to determine their
                          functional suitability and code-compliance
                        </h6>
                      </li>
                      <li>
                        <h6>
                          developing 3-D engineering design models in CADD,
                          using software such as Revit
                        </h6>
                      </li>
                      <li>
                        <h6>
                          collecting and organizing detail drawings from
                          previous projects to create detail library
                        </h6>
                      </li>
                      <li>
                        <h6>
                          present and evaluate professional opinions solicited
                          from manufacturer representatives, consultants, and
                          cost estimators to determine most ideal constructional
                          contractors to ensure a cost-efficient high-quality
                          finish.
                        </h6>
                      </li>
                      <li>
                        <h6>
                          Attend site visits and conference calls with clients,
                          consultants, contractors, fabricators and regulatory
                          agencies to meet overall project objectives.
                        </h6>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={11}>
                <Row className="align-items-center">
                  <Col xs={12} md={7}>
                    <h4 className="pb-2 text-sm-left text-md-middle">
                      SenseLab, Los Angeles, CA
                    </h4>
                  </Col>
                  <Col xs={12} md={5}>
                    <p className="text-mute text-sm-left text-md-right">
                      part-time intern: SUMMER 2014 to SPRING 2015
                    </p>
                  </Col>
                  <Col xs={12}>
                    <ul className="pb-3" style={{ listStyleType: 'square' }}>
                      <li>
                        <h6>3D modeling for furniture design project</h6>
                      </li>
                      <li>
                        <h6>
                          drafting and diagramming for architecture design
                          projects
                        </h6>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={11}>
                <Row className="align-items-center">
                  <Col xs={12} md={7}>
                    <h4 className="pb-2 text-sm-left text-md-middle">
                      Gary Paige Architect, Los Angeles, CA
                    </h4>
                  </Col>
                  <Col xs={12} md={5}>
                    <p className="text-mute text-sm-left text-md-right">
                      part-time intern: SUMMER 2013 to SPRING 2015
                    </p>
                  </Col>
                  <Col xs={12}>
                    <ul className="pb-3" style={{ listStyleType: 'square' }}>
                      <li>
                        <h6> building physical and digital models</h6>
                      </li>
                      <li>
                        <h6>
                          drafting construction and presentational drawings
                        </h6>
                      </li>
                      <li>
                        <h6>generating graphic presentations and renderings</h6>
                      </li>
                      <li>
                        <h6>participating in the Tiny House Competition</h6>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Row>
        </Col>
        <Col xs={6} md={3}>
          <div className="py-5 text-muted" data-testid="frontEnd">
            <p className="text-sm-right">FRONT-END PROFICIENCIES:</p>
            <div className="text-sm-right">
              <h5>HTML</h5>
              <h5>CSS</h5>
              <h5>JavaScript</h5>
              <h5>jQuery</h5>
              <h5>responsive design</h5>
              <h5>Bootstrap</h5>
              <h5>React</h5>
            </div>
          </div>
          <div className="py-5 text-muted" data-testid="backEnd">
            <p className="text-sm-right">BACK-END PROFICIENCIES:</p>
            <div className="text-sm-right">
              <h5>APIs</h5>
              <h5>Node</h5>
              <h5>Express</h5>
              <h5>MySQl & Sequelize</h5>
              <h5>MongoDB & Mongoose</h5>
              <h5>REST</h5>
              <h5>GraphQL</h5>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;

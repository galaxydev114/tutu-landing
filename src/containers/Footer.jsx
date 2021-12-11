import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div id="footer" className="footer">
        <Container>
          <div className="footer-top">
            <Row className="justify-content-center align-items-end">
              <Col lg={2} className="footer-link">
                <Link to="#">Sobre a TUTU</Link>
              </Col>
              <Col lg={2} className="footer-link">
                <Link to="#">Metodologia</Link>
              </Col>
              <Col lg={4} className="footer-brand text-center">
                <img src={require('../assets/images/logo.png').default} alt="" onDragStart={(e) => e.preventDefault()} />
              </Col>
              <Col lg={2} className="footer-link text-end">
                <Link to="#">Blog</Link>
              </Col>
              <Col lg={2} className="footer-link text-end">
                <Link to="#">Fale com a gente</Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
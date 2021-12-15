import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import HeroEmailSubscribingForm from './HeroEmailSubscribingForm';
import SmallEmailSubscribingForm from './SmallEmailSubscribingForm';

const Home = () => {
  return (
    <div className="home">
      <div className="tutu-logo">
        <img src={require('../../assets/images/logo.png').default} alt="Tutu" />
      </div>
      <div id="hero" className="hero d-flex align-items-center">
        <Container fluid>
          <Row className="hero-content">
            <Col lg="6" className="hero-left-content d-flex flex-column justify-content-center">
              <div className="hero-text">
                <h1>O app de gestão financeira feito para crianças</h1>
                <h6>Lorem ipsum ut nisi mauris donec litora ante, massa mi id curabitur commodo duis habitant, ligula metus est nec magna elit.</h6>
              </div>
              <HeroEmailSubscribingForm/>
            </Col>
            <Col lg="6" className="hero-img text-end p-0">
              <img src={require('../../assets/images/hero-img.png').default} alt="" onDragStart={(e) => e.preventDefault()} />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="app-download" className="app-download">
        <Container fluid>
          <Row>
            <Col lg={6} className="ps-lg-4 text-lg-start text-md-center">
              <img src={require('../../assets/images/app-download.png').default} alt="" onDragStart={(e) => e.preventDefault()} />
            </Col>
            <Col lg={6} className="d-flex align-items-center pe-lg-4 text-lg-end">
              <div className="app-download-promotion">
                <div className="promotion-text">
                  <h1>Aprender a cuidar do dinheiro desde a infância é <span className="yellow-text">essencial</span></h1>
                </div>
                <button type="button" className="app-download-btn">BAIXE O APP AGORA</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="how-it-work">
        <Container fluid className="how-it-work-content">
          <Row>
            <Col lg={6} className="p-0 how-it-work-left-content text-center">
              <img src={require('../../assets/images/hand-phone.png').default} alt="" onDragStart={(e) => e.preventDefault()} />
            </Col>
            <Col lg={6} className="d-flex align-items-center">
              <div className="how-it-work-right-content">
                <h1>Como funciona</h1>
                <p>Lorem ipsum ut nisi mauris donec litora ante, massa mi id curabitur commodo duis habitant, ligula metus est nec magna elit. integer ad torquent amet interdum consequat viverra gravida imperdiet ad, habitasse sodales elementum curabitur mauris porttitor elementum egestas.</p>
                <Link to="#" className="readmore-btn">SAIBA MAIS</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="join-promotion" className="join-promotion">
        <Container fluid>
          <Row className="join-promotion-contnet">
            <Col lg={6} className="text-lg-end">
              <div className="join-promotion-text text-start">
                <h1>Prepare-se para começar!</h1>
                <h2>Casastre-se agora</h2>
              </div>
            </Col>
            <Col lg={6} className="d-flex align-items-lg-center">
              <SmallEmailSubscribingForm/>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="excellent-app" className="excellent-app">
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum ut nisi mauris donec litora ante, massa mi id curabitur commodo duis habitant</p>
        <Container>
          <div className="excellent-app-block mx-xl-5 mx-lg-3">
            <Row>
              <Col lg={6} className="px-xl-2 px-5">
                <img src={require('../../assets/images/excellent-app.png').default} alt="" onDragStart={(e) => e.preventDefault()} />
              </Col>
              <Col lg={6} className="d-flex align-items-center justify-content-center mt-5 mt-lg-0">
                <div className="excellent-app-text px-md-5 px-4 pb-lg-0 pb-5 mt-5 mt-lg-0">
                  <h1>Prático, rápido e seguro.</h1>
                  <Link to="#">Saiba mais</Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
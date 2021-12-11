import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="tutu-logo">
        <img src={require('../assets/images/logo.png').default} alt="Tutu" />
      </div>
      <div id="hero" className="hero d-flex align-items-center">
        <Container fluid>
          <Row className="hero-content">
            <Col lg="6" className="hero-left-content d-flex flex-column justify-content-center">
              <div className="hero-text">
                <h1>O app de gestão financeira feito para crianças</h1>
                <h6>Lorem ipsum ut nisi mauris donec litora ante, massa mi id curabitur commodo duis habitant, ligula metus est nec magna elit.</h6>
              </div>
              <div className="tutu-join-box">
                <h6>Digite seu Email e crie sua conta agora!</h6>
                <div className="join-control d-flex align-items-center justify-content-center px-lg-5 px-md-4 px-sm-2 px-0">
                  {/* <label>EMAIL</label> */}
                  <input type="text" className="email-input" placeholder="E-MAIL" />
                </div>
                <div className="px-lg-3 px-md-2 px-sm-1 px-0">
                  <button type="button">Criar conta TUTU gtatuita</button>
                </div>
              </div>
            </Col>
            <Col lg="6" className="hero-img text-end p-0">
              <img src={require('../assets/images/hero-img.png').default} alt="" onDragStart={(e) => e.preventDefault()} />
            </Col>
          </Row>
        </Container>
      </div>
      <div id="app-download" className="app-download">
        <Container fluid>
          <Row>
            <Col lg={6} className="ps-lg-4">
              <img src={require('../assets/images/app-download.png').default} alt="" onDragStart={(e) => e.preventDefault()} />
            </Col>
            <Col lg={6} className="app-download-promotion">
              <div className="promotion-text">
                <h1>Aprender a cuidar do dinheiro desde a infância é <span className="yellow-text">essencial</span></h1>
              </div>
              <div className="text-end">
                <button type="button" className="app-download-btn">BAIXE O APP AGORA</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="how-it-work">
        <Container fluid>
          <Row>
            <Col lg={6} className="p-0">
              <img src={require('../assets/images/hand-phone.png').default} alt="" onDragStart={(e) => e.preventDefault()} />
            </Col>
            <Col lg={6}>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="join-promotion" className="join-promotion">
        <Container fluid>
          <Row>
            <Col lg={6}>
              <div className="join-promotion-text">
                <h1>Prepare-se para começar!</h1>
                <h2>Casastre-se agora</h2>
              </div>
            </Col>
            <Col lg={6}>

            </Col>
          </Row>
        </Container>
      </div>
      <div id="excellent-app" className="excellent-app">
        <h1>LOREM IPSUM</h1>
        <p>Lorem ipsum ut nisi mauris donec litora ante, massa mi id curabitur commodo duis habitant</p>
        <Container>
          <div className="excellent-app-block mx-lg-5">
            <Row>
              <Col lg={6}>
                <img src={require('../assets/images/excellent-app.png').default} alt="" onDragStart={(e) => e.preventDefault()} />
              </Col>
              <Col lg={6} className="d-flex align-items-center justify-content-center">
                <div className="excellent-app-text px-lg-5">
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
}
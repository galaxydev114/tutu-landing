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
                  <input type="text" className="email-input" placeholder="Seu e-mail" />
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
            <Col lg={6} className="ps-lg-4 text-lg-start text-md-center">
              <img src={require('../assets/images/app-download.png').default} alt="" onDragStart={(e) => e.preventDefault()} />
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
              <img src={require('../assets/images/hand-phone.png').default} alt="" onDragStart={(e) => e.preventDefault()} />
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
              <div className="join-follow-control d-flex align-items-center">
                <input type="text" placeholder="Seu e-mail" />
                <button type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
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
                <img src={require('../assets/images/excellent-app.png').default} alt="" onDragStart={(e) => e.preventDefault()} />
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
}
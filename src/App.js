import React from 'react';
// import logo from './logo.svg';
import logo from './image/images.png';
import History from './History'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Button, } from 'react-bootstrap';

function App(props) {
  const homeToabout = () => {
    History.push('/about');
  }

  const contact = () => {
    History.push('/Contact/1234')
  }

  return (
    <Container fluid className="App">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12} className="home">
          <h1 >Hello React</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>MD.SHADAB</h1>

          </header>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12} className="home">
          <h1>// Home//</h1>
          </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6} xs={12} className="btn">
          <Button  variant="primary" size="lg" block onClick={homeToabout.bind(this)}>About</Button>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="btn">
          <Button  variant="success" size="lg" block onClick={contact.bind(this)}>Contact</Button>
          </Col>
          {/* </div> */}
          </Row>

    </Container>
  );
}

export default App;

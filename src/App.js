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
        <Col>
          <h1 className="home">Hello React</h1>
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
          <h1 className="home">// Home//</h1>
          <Button className="btn" variant="outline-primary" onClick={homeToabout.bind(this)}>About</Button>
          <Button className="btn" variant="outline-success" onClick={contact.bind(this)}>Contact</Button>

    </Container>
  );
}

export default App;

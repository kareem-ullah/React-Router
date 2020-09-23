import React, { Component } from 'react';
import logo from './image/images-1.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, } from 'react-bootstrap';


import {
    Link,
} from 'react-router-dom';

class About extends Component {

    GotoGome() {
        console.log('GotoGome');
        console.log('Wasi');
        this.props.history.push('/');
    }

    RouteToContact() {
        this.props.history.push('/Contact/2643', 'Wasi');
    }

    render() {
        return (
            <Container fluid className="App">
                <Row>
                    <Col>
                        <h1 className="About">Hello About</h1>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1>MD.SHADAB AYUB</h1>

                        </header>
                            <h1 className="About">// About //</h1>
                        <Button variant="outline-dark" onClick={this.GotoGome.bind(this)}>Home</Button>
                        <Button variant="outline-success" onClick={this.RouteToContact.bind(this)}>Contact</Button>
                    </Col>
                </Row>
            </Container>





        );
    }
}

export default About;

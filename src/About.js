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
                     <Col lg={12} md={12} sm={12} xs={12} className="About">
                        <h1 >Hello About</h1>
                     </Col>
                     </Row>  
                     <Row>
                        <Col>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1>MD.SHADAB AYUB</h1>
                        </header>
                        </Col>
                     </Row>

                        <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className="About">
                            <h1>// About //</h1>
                        </Col>
                        </Row>


                            
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={12} className="btn">
                            <Button  variant="primary" size="lg" block onClick={this.GotoGome.bind(this)}>Home</Button>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={12} className="btn">
                            <Button  variant="success" size="lg" block onClick={this.RouteToContact.bind(this)}>Contact</Button>
                                </Col>
                            </Row>
            </Container>





        );
    }
}

export default About;

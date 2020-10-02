import React, { Component } from 'react';
import logo from './logo.svg';
import History from './History'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, } from 'react-bootstrap';


class Contact extends Component {

    GotoHome() {
        History.push('/');
    }

    GotoAbout() {
        History.push('/About');
    }

    render() {
        return (
            <Container fluid className="App">
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className="Contact">
                    <h1 >Hello Contact</h1>
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
                            <Col lg={12} md={12} sm={12} xs={12} className="Contact">
                                <h1 >//Contact//</h1>
                            </Col>
                        </Row>


                        <Row>
                                <Col lg={6} md={6} sm={6} xs={12} className="btn">
                            <Button  variant="dark" size="lg" block onClick={this.GotoHome.bind(this)}>Home</Button>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={12} className="btn">
                            <Button  variant="primary" size="lg" block onClick={this.GotoAbout.bind(this)}>About</Button>
                                </Col>
                            </Row>
                

            </Container>
        );
    }
}

export default Contact;

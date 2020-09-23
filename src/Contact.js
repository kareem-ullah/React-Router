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
        //         let users = {
        //             2643: {
        //                 name: 'shadab',
        //                 cell: 'abc'
        //             },
        //             2644: {
        //                 name: 'ali',
        //                 cell: 'aaaa'
        //             },
        //             2645: {
        //                 name: 'wasi',
        //                 cell: 'xqw'
        //             }
        //         }
        //         console.log("Props", this.props);
        // let requiredUser = users[this.props.match.params.id]



        return (
            <Container fluid className="App">
                <Row>
                    <Col lg={12}>
                    <h1 className="Contact">Hello Contact</h1>
                    </Col>
                </Row>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>MD.SHADAB</h1>

                </header>
                <h1 className="Contact">//Contact//</h1>

                <Button variant="outline-dark" onClick={this.GotoHome.bind(this)}>Home</Button>
                <Button variant="outline-primary" onClick={this.GotoAbout.bind(this)}>About</Button>

            </Container>
        );
    }
}

export default Contact;

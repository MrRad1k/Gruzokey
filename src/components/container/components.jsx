import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './style.css'

import container1 from '../../assets/container1.jpg';
import container2 from '../../assets/container2.jpg';
import container3 from '../../assets/container3.jpg';
import container4 from '../../assets/container4.jpg';
import container5 from '../../assets/container5.jpg';
import container6 from '../../assets/container6.jpg';
import container7 from '../../assets/container7.jpg';
import container8 from '../../assets/container8.jpg';
import container9 from '../../assets/container9.jpg';

class components extends Component {
    render() {
        return (
            <div style={{ paddingLeft: "20px", paddingBottom: "20px" }}>
                <h1 className="h1-custom">НАШИ УСЛУГИ</h1>
                <Container fluid={true} style={{ paddingBottom: "10px" }}>
                    <Row>
                        <Col sm={4} style={{ paddingBottom: "30px" }}>
                            <Card border="light">
                                <Card.Img variant="top" src={container1} />
                                <Card.Header>
                                    <h3 style={{ textAlign: "center" }}>Квартирный переезд</h3>
                                </Card.Header>

                            </Card>
                        </Col>
                        <Col sm={4} style={{ paddingBottom: "30px" }}>
                            <Card border="light">
                                <Card.Img variant="top" src={container2} />
                                <Card.Header>
                                    <h3 style={{ textAlign: "center" }}>Складской переезд</h3>
                                </Card.Header>

                            </Card>
                        </Col>
                        <Col sm={4} style={{ paddingBottom: "30px" }}>
                            <Card border="light">
                                <Card.Img variant="top" src={container3} />
                                <Card.Header>
                                    <h3 style={{ textAlign: "center" }}>Грузоперевозки</h3>
                                </Card.Header>

                            </Card>
                        </Col>

                        <Col sm={4} style={{ paddingBottom: "30px" }}>
                            <Card border="light">
                                <Card.Img variant="top" src={container4} />
                                <Card.Header>
                                    <h3 style={{ textAlign: "center" }}>Перевозка мебели</h3>
                                </Card.Header>

                            </Card>
                        </Col>
                        <Col sm={4} style={{ paddingBottom: "30px" }}>
                            <Card border="light">
                                <Card.Img variant="top" src={container5} />
                                <Card.Header>
                                    <h3 style={{ textAlign: "center" }}>Офисный переезд</h3>
                                </Card.Header>

                            </Card>
                        </Col>
                        <Col sm={4} style={{ paddingBottom: "30px" }}>
                            <Card border="light">
                                <Card.Img variant="top" src={container6} />
                                <Card.Header>
                                    <h3 style={{ textAlign: "center" }}>Дачный переезд</h3>
                                </Card.Header>

                            </Card>
                        </Col>

                        <Col sm={4} style={{ paddingBottom: "30px" }}>
                            <Card border="light">
                                <Card.Img variant="top" src={container7} />
                                <Card.Header>
                                    <h3 style={{ textAlign: "center" }}>Газель с грузчиками</h3>
                                </Card.Header>

                            </Card>
                        </Col>

                        <Col sm={4} style={{ paddingBottom: "30px" }}>
                            <Card border="light">
                                <Card.Img variant="top" src={container8} />
                                <Card.Header>
                                    <h3 style={{ textAlign: "center" }}>Разнорабочие</h3>
                                </Card.Header>

                            </Card>
                        </Col>

                        <Col sm={4} style={{ paddingBottom: "30px" }}>
                            <Card border="light">
                                <Card.Img variant="top" src={container9} />
                                <Card.Header>
                                    <h3 style={{ textAlign: "center" }}>Подъем стройматериалов</h3>
                                </Card.Header>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default components;
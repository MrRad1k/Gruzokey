import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

import footer from '../../assets/footer.jpg';

import './style.css'
import styled from 'styled-components';

import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import icon5 from '../../assets/icon5.svg'
import icon6 from '../../assets/icon6.svg'
import icon7 from '../../assets/icon7.svg'
import icon8 from '../../assets/icon8.svg'

const Styles = styled.div`
    .jumbo {
        background: url(${footer}) no-repeat;
        background-size: cover;
        color: #efefef;
        position: relative;
        z-index: 0;
    }
    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;


const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <div style={{ marginLeft: "10px", marginBottom: "100px", marginRight: "10px" }}>
                <p style={{ paddingLeft: "10px", paddingBottom: "10px", fontSize: "25px" }}>ПРЕИМУЩЕСТВА</p>
                <h1 className="h1-jm">ПОЧЕМУ ИМЕННО МЫ?</h1>
            </div>

            <Container style={{ marginBottom: "50px" }}>
                <Row>
                    <Col >
                        <div style={{ width: "100px", height: "100px", background: "yellow", borderRadius: "250px" }}>
                            <img src={icon1} style={{ marginLeft: "20px", marginTop: "22px" }} width="60" alt="icon" />
                        </div>
                        <h5 style={{ marginTop: "10px" }}>ЗАБОТИМСЯ О ВАШЕМ ГРУЗЕ</h5>
                    </Col>

                    <Col>
                        <div style={{ width: "100px", height: "100px", background: "yellow", borderRadius: "250px" }}>
                            <img src={icon2} style={{ marginLeft: "20px", marginTop: "22px" }} width="60" alt="icon" />
                        </div>
                        <h5 style={{ marginTop: "10px" }}>ПОСТОЯННЫМ КЛИЕНТАМ ДАРИМ СКИДКИ И ПРИВЛЕКАТЕЛЬНЫЕ БОНУСЫ</h5>
                    </Col>

                    <Col>
                        <div style={{ width: "100px", height: "100px", background: "yellow", borderRadius: "250px" }}>
                            <img src={icon3} style={{ marginLeft: "20px", marginTop: "22px" }} width="60" alt="icon" />
                        </div>
                        <h5 style={{ marginTop: "10px" }}>ЗАКАЗЫ НА САЙТЕ ПРИНИМАЮТСЯ КРУГЛОСУТОЧНО</h5>
                    </Col>

                    <Col>
                        <div style={{ width: "100px", height: "100px", background: "yellow", borderRadius: "250px" }}>
                            <img src={icon4} style={{ marginLeft: "20px", marginTop: "22px" }} width="60" alt="icon" />
                        </div>
                        <h5 style={{ marginTop: "10px" }}>ВЫГОДНАЯ СТОИМОСТЬ НА УСЛУГИ ГРУЗЧИКОВ</h5>
                    </Col>
                </Row>
            </Container>

            <div className="overlay"></div>
            <div style={{ marginLeft: "10px", marginBottom: "100px", marginRight: "10px" }}>
                <h1 className="h1-jm">СПОСОБЫ ОПЛАТЫ</h1>
            </div>

            <Container style={{ marginBottom: "50px" }}>
                <Row>
                    <Col>
                        <div style={{ width: "100px", height: "100px", background: "yellow", borderRadius: "250px" }}>
                            <img src={icon5} style={{ marginLeft: "18px", marginTop: "18px" }} width="70" alt="icon" />
                        </div>
                        <h5 style={{ marginTop: "10px" }}>ВСЕ СПОСОБЫ ОПЛАТЫ ОНЛАЙН</h5>
                    </Col>

                    <Col>
                        <div style={{ width: "100px", height: "100px", background: "yellow", borderRadius: "250px" }}>
                            <img src={icon6} style={{ marginLeft: "15px", marginTop: "12px" }} width="70" alt="icon" />
                        </div>
                        <h5 style={{ marginTop: "10px" }}>ОПЛАТА НАЛИЧНЫМИ ДЕНЕЖНЫМИ СРЕДСТВАМИ</h5>
                    </Col>

                    <Col>
                        <div style={{ width: "100px", height: "100px", background: "yellow", borderRadius: "250px" }}>
                            <img src={icon7} style={{ marginLeft: "20px", marginTop: "15px" }} width="70" alt="icon" />
                        </div>
                        <h5 style={{ marginTop: "10px" }}>БЕЗНАЛИЧНЫЙ РАСЧЕТ НА НАЛИЧНЫЙ СЧЕТ КОМПАНИИ</h5>
                    </Col>

                    <Col>
                        <div style={{ width: "100px", height: "100px", background: "yellow", borderRadius: "250px" }}>
                            <img src={icon8} style={{ marginLeft: "25px", marginTop: "18px" }} width="70" alt="icon" />
                        </div>
                        <h5 style={{ marginTop: "10px" }}>ОПЛАТА ПОСРЕДСТВОМ СПИСАНИЯ С КАРТЫ VISA ИЛИ MASTER CARD</h5>
                    </Col>
                </Row>
            </Container>
        </Jumbo>
    </Styles>

)

export default Jumbotron;
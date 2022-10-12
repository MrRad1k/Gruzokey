import React, { Component } from 'react';
import Carousel from 'react-bootstrap/carousel';

import './style.css'

import carouselfon1 from '../../assets/carouselfon1.jpg'
import carouselfon2 from '../../assets/carouselfon2.jpg'
import carouselfon3 from '../../assets/carouselfon3.jpg'
import carouselfon4 from '../../assets/carouselfon4.jpg'


export default class components extends Component {
    render() {
        return (
            <Carousel fade controls={false} indicators={false} interval={5000} pause={false} className="car" style={{marginBottom: "50px"}}>
                <Carousel.Item>
                    <img src={carouselfon1} className="img-fon"  alt="fon1" />
                    <Carousel.Caption className="caption">
                        <h1 style={{ color: "white", marginBottom: "200px", fontSize: "58px" }}>УСЛУГИ ГРУЗЧИКОВ В МОГИЛЁВЕ</h1>
                        <h1>Выполним ваш заказ быстро и качественно</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={carouselfon2} className="img-fon" alt="fon1" />
                    <Carousel.Caption className="caption">
                        <h1 style={{ color: "white", marginBottom: "200px", fontSize: "58px" }}>УСЛУГИ ГРУЗЧИКОВ В МОГИЛЁВЕ</h1>
                        <h1>Выполним ваш заказ быстро и качественно</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={carouselfon3} className="img-fon" alt="fon1" />
                    <Carousel.Caption className="caption">
                        <h1 style={{ color: "white", marginBottom: "200px", fontSize: "58px" }}>УСЛУГИ ГРУЗЧИКОВ В МОГИЛЁВЕ</h1>
                        <h1>Выполним ваш заказ быстро и качественно</h1>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={carouselfon4} className="img-fon" alt="fon1" />
                    <Carousel.Caption className="caption">
                        <h1 style={{ color: "white", marginBottom: "200px", fontSize: "58px" }}>УСЛУГИ ГРУЗЧИКОВ В МОГИЛЁВЕ</h1>
                        <h1>Выполним ваш заказ быстро и качественно</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
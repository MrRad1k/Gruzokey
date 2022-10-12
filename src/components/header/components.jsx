import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './style.css';

import tel from '../../assets/tel.png';
import logo from '../../assets/favicon.ico'
import mail from '../../assets/email.svg'

import styled from 'styled-components';

const NavLink = styled(Nav.Link)`
color: white;
    &:hover {
        color: yellow !important;
    }
`

class components extends Component {
    render() {
        return (
            <Navbar expand="xl" style={{ backgroundColor: "#212529" }} variant="dark">

                <img src={logo} width="100" alt="logo" />
                <Navbar.Brand className="tx" >
                    <h3>GRUZOKEY</h3>
                    <h5>Услуги грузчиков</h5>
                </Navbar.Brand>

                <Navbar.Brand className="mail" style={{ marginLeft: "auto", marginTop: "10px" }}>
                    <img src={mail} style={{ marginBottom: "10px" }} width="65" alt="mail" />
                    <NavLink style={{ fontSize: "30px" }} className="d-inline-block align-top"
                     href="mailto:gruzokey@mail.ru?subject=Услуга%20грузчиков">
                         gruzokey@mail.ru</NavLink>
                </Navbar.Brand>

                <Navbar.Brand className="tel" style={{ marginLeft: "auto" }}>
                    <img src={tel} style={{ maxWidth: "20%" }} alt="tel" />
                    <NavLink className="d-inline-block align-top" width="30" height="30" style={{ fontSize: "30px" }}
                        href="tel:+375291489125"> +375 29 148-91-25 </NavLink>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default components;
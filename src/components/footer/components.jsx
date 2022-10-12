import React from 'react';
import { Container } from 'react-bootstrap';


const Footer = () => (
    <Container fluid style={{ backgroundColor: 'rgba(44, 47, 49, 0)', color: '#fff', marginTop: '-63px', position: 'relative'}}>
        <Container style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{fontSize: '10px'}}>Copyright © 2021 GRUZOKEY</p>
        </Container>
    </Container>

)

export default Footer;
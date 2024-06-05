import React, { useState } from 'react';
import './Rndvs.css';
import Progbar from './Progbar';
import { Col, Container, Row } from 'react-bootstrap';

const Rndvs = () => {
    const [index, setIndex] = useState(1);

    return (
        <section className='Rndvs' id='rndvs'>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col className='align-seleft-center'>
                        <Progbar step={index} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Rndvs;

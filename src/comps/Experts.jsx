import React from 'react'
import './Experts.css'
import TecCard from './TecCard'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'

const Experts = () => {
    return (
        <section className='experts' id='experts'>
            <img src='TopReg.png' alt="Header" className="header-image" />
            <div className='content'>
                <Container>
                    <Row>
                        <Col>
                            <Tab.Container id='exp-toggle' defaultActiveKey='first'>
                                <div className="right-align">
                                    <Nav variant='pills'>
                                        <Nav.Item>
                                            <Nav.Link eventKey="first" id="experts-tab-tab-first">Nepean</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second" id="experts-tab-tab-second">Orléans</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <p className='subs'><em>Main-d'œuvre</em>
                                    <em>qualifiée sur tous nos sites</em></p>
                                </div>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <h1><em>Nos mécaniciens</em></h1>
                                        <Row>
                                            <Col md={4}>
                                                <TecCard name='Fernando Alonso' />
                                            </Col>
                                            <Col md={4}>
                                                <TecCard name='Jenson Button' />
                                            </Col>
                                            <Col md={4}>
                                                <TecCard name='Kimi Räikkönen' />
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h1><em>Nos mécaniciens</em></h1>
                                        <Row>
                                            <Col md={4}>
                                                <TecCard name='Mark Webber' />
                                            </Col>
                                            <Col md={4}>
                                                <TecCard name='Nico Rosberg' />
                                            </Col>
                                            <Col md={4}>
                                                <TecCard name='Sebastian Vettel' />
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Experts

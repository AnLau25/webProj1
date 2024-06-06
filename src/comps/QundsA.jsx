import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './QundsA.css';

const QundsA = () => {
    return (
        <section className='QundsA' id='qundsa'>
            <div className='qundsaHead'>
                <p><em>Q&A</em></p>
                <h1>QUESTIONS & RÉPONSES</h1>
            </div>
            <Container className='Acord-container' >
                <Accordion defaultActiveKey="0" flush >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Mettre une première question ici ?</Accordion.Header>
                        <Accordion.Body>
                            La réponse irait ici, l'engrenage fonctionne comme un toggle.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Mettre une deuxième question ici ?</Accordion.Header>
                        <Accordion.Body>
                            La réponse irait ici, l'engrenage fonctionne comme un toggle.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Mettre une troisième question ici ?</Accordion.Header>
                        <Accordion.Body>
                            La réponse irait ici, l'engrenage fonctionne comme un toggle.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Mettre une quatrième question ici ?</Accordion.Header>
                        <Accordion.Body>
                            La réponse irait ici, l'engrenage fonctionne comme un toggle.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );
}

export default QundsA;

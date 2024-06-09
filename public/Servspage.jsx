import React from 'react';
import './ServsPage.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Redbtn from '../src/comps/Redbtn';
import ServCards from '../src/comps/ServCards';
import { Container, Row, Col } from 'react-bootstrap';

const Servspage = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='servspage-ServPage' id='servPage'>
            <img src='TopReg.png' alt="Header" className="servspage-header-image" />
            <div className='servspage-content'>
                <Container>
                    <Row>
                        <Col>
                            <div className='servspage-Serv-box'>
                                <h1 className="servspage-title"><span><em>Tous nos services</em></span>SERVICES OFFERTS DANS TOUS NOS LOCAUX, QUALITÉ GARANTIE</h1>
                                <Carousel responsive={responsive} infinite={true} className='servspage-Serv-slider'>
                                    <ServCards className='servspage-carrous-item' imgprop='Serv_Entretien.png' servprop='Entretien' />
                                    <ServCards className='servspage-carrous-item' imgprop='Serv_Roues.png' servprop='Roues' />
                                    <ServCards className='servspage-carrous-item' imgprop='Serv_Freins.png' servprop='Freins' />
                                    <ServCards className='servspage-carrous-item' imgprop='Serv_Paint.png' servprop='Peinture' />
                                    <ServCards className='servspage-carrous-item' imgprop='Serv_Motor.png' servprop='Moteur' />
                                    <ServCards className='servspage-carrous-item' imgprop='Serv_Bod.png' servprop='Corps' />
                                    <ServCards className='servspage-carrous-item' imgprop='Serv_Dash.png' servprop='Tableau de bord' />
                                    <ServCards className='servspage-carrous-item' imgprop='Serv_Fluid.png' servprop='Fluides' />
                                </Carousel>
                                <Redbtn href="#calc" className='servspage-btn' prop={'Estimez vos frais'} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Servspage;

import React from 'react'
import './ServsPage.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Redbtn from './Redbtn'
import ServCards from './ServCards'
import { Container, Row, Col } from 'react-bootstrap';

const Servspage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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

        <section className='ServPage' id='ServPage' >
            <Container>
                <Row>
                    <Col>
                        <div className='Serv-box'>
                            <h1><span><em>Tous nos services</em></span>SERVICES OFFERTS DANS TOUS NOS LOCAUX, QUALITÉ GARANTIE</h1>
                            <Carousel responsive={responsive} infinite={true} className='Serv-slider'>
                                <ServCards className='carrous-item' imgprop='./src/assets/Serv_Entretien.png' servprop='Entretien' />
                                <ServCards className='carrous-item' imgprop='./src/assets/Serv_Roues.png' servprop='Roues' />
                                <ServCards className='carrous-item' imgprop='./src/assets/Serv_Freins.png' servprop='Freins' />
                                <ServCards className='carrous-item' imgprop='./src/assets/Serv_Paint.png' servprop='Peinture' />
                                <ServCards className='carrous-item' imgprop='./src/assets/Serv_Motor.png' servprop='Moteur' />
                                <ServCards className='carrous-item' imgprop='./src/assets/Serv_Bod.png' servprop='Corps' />
                                <ServCards className='carrous-item' imgprop='./src/assets/Serv_Dash.png' servprop='Tableau de bord' />
                                <ServCards className='carrous-item' imgprop='./src/assets/Serv_Fluid.png' servprop='Fluides' />
                            </Carousel>
                            <Redbtn className='btn' prop={'Estimez vos frais'}/>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Servspage
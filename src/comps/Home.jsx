import React from 'react'
import './Home.css'
import Redbtn from './Redbtn'
import Wtebtn from './Wtebtn'
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['AUTOMOBILE', 'DE SUV', 'DE MINI', 'DE SPORTIVES'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className='baner' id='home'>
      <Container className='stuff'>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={12}>
            <h1><em>{'ENTRETIEN ET RÉPARATION'}</em></h1>
            <h1><span className='wrap'><em>{text}</em></span></h1>
            <p>Insérez ici une brève description des valeurs de l'entreprise, de sa façon de travailler, etc. Quelque chose d'accrocheur et de convaincant.</p>
            <div className="button-container">
              <Redbtn prop='Prendre rendez-vous' />
              <Wtebtn prop='Parcourir les services' />
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Home
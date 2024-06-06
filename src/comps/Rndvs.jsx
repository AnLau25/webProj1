import React, { useState, useRef } from 'react';
import './Rndvs.css';
import { Col, Container, Row, Toast, ToastContainer } from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Redbtn from './Redbtn';
import RedCard from './RedCard';

const Rndvs = () => {
    const [site, setSite] = useState('');
    const [experts, setExperts] = useState([]);
    const [selectedExpert, setSelectedExpert] = useState('');
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const formRef = useRef(null);

    const handleSiteChange = (event) => {
        const selectedSite = event.target.value;
        setSite(selectedSite);

        // Reset selected expert
        setSelectedExpert('');

        // Update experts based on the selected site
        if (selectedSite === 'Nepean') {
            setExperts(['Fernando Alonso', 'Jenson Button', 'Kimi Räikkönen']);
        } else if (selectedSite === 'Orléans') {
            setExperts(['Mark Webber', 'Nico Rosberg', 'Sebastian Vettel']);
        } else {
            setExperts([]);
        }
    };

    const handleExpertChange = (event) => {
        setSelectedExpert(event.target.value);
    };

    const handleServiceChange = (selectedOptions) => {
        setSelectedServices(selectedOptions);
    };

    const handleClearForm = () => {
        if (formRef.current) {
            formRef.current.reset();
            setSite('');
            setExperts([]);
            setSelectedExpert('');
            setSelectedServices([]);
            setSelectedDate(null);
            setShowToast(true);
        }
    };

    const serviceOptions = [
        { value: 'Entretien', label: 'Entretien' },
        { value: 'Freins', label: 'Freins' },
        { value: 'Peinture', label: 'Peinture' },
        { value: 'Moteur', label: 'Moteur' },
        { value: 'Corps', label: 'Corps' },
        { value: 'Tableau de bord', label: 'Tableau de bord' },
        { value: 'Fluides', label: 'Fluides' }
    ];

    return (
        <section className='Rndvs' id='rndvs'>
            <p className='oves'><em>Prendre rendez-vous</em></p>
            <h1><em>FIXER UNE RENCONTRE</em></h1>
            <p className='subs'>Vous recevrez un e-mail de confirmation une fois la demande envoyée.</p>
            <Container className='h-100 form-container'>
                <Row className='h-100 align-items-center justify-content-center'>
                    <Col md={7} className='form-section'>
                        <div className="inner-container">
                            <form ref={formRef}>
                                <Row>
                                    <Col sm={6} className='px-1 form-element'>
                                        <input type="text" className="form-control" placeholder="NOM COMPLET" />
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <input type="email" className="form-control" placeholder="E-MAIL" />
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <input type="tel" className="form-control" placeholder="N° DE TÉLÉPHONE" />
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <input type="text" className="form-control" placeholder="MODÈLE DU VÉHICULE" />
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <select className="form-control custom-select" value={site} onChange={handleSiteChange}>
                                            <option value="" disabled>SITE</option>
                                            <option value="Nepean">Nepean</option>
                                            <option value="Orléans">Orléans</option>
                                        </select>
                                    </Col>
                                    <Col sm={6} className='px-1 form-element'>
                                        <select className="form-control custom-select" value={selectedExpert} onChange={handleExpertChange}>
                                            <option value="" disabled>EXPERT</option>
                                            {experts.map((expert, index) => (
                                                <option key={index} value={expert}>{expert}</option>
                                            ))}
                                        </select>
                                    </Col>
                                    <Col sm={12} className='px-1 form-element'>
                                        <Select
                                            isMulti
                                            name="services"
                                            options={serviceOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            placeholder="SERVICE"
                                            value={selectedServices}
                                            onChange={handleServiceChange}
                                        />
                                    </Col>
                                    <Col sm={12} className='px-1 form-element'>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={(date) => setSelectedDate(date)}
                                            showTimeSelect
                                            dateFormat="Pp"
                                            className="form-control"
                                            placeholderText="CHOISIR DATE ET HEURE"
                                        />
                                    </Col>
                                    <Col sm={12} className='px-1 form-element'>
                                        <Redbtn prop="Prendre rendez-vous" onClick={handleClearForm} />
                                    </Col>
                                </Row>
                            </form>
                            <RedCard />
                        </div>
                    </Col>
                </Row>
            </Container>
            <ToastContainer position="middle-center" className="p-3 custom-toast-container">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto"><em>Rendez-vous programmé, à bientôt !</em></strong>
                    </Toast.Header>
                    <Toast.Body>Pour toute modification de votre rendez-vous, n'hésitez pas à nous contacter.</Toast.Body>
                </Toast>
            </ToastContainer>
        </section>
    );
}

export default Rndvs;

import React, { useState, useRef } from 'react';
import Select from 'react-select';
import { Container, Row, Col } from 'reactstrap';
import Redbtn from './Redbtn';
import './Calc.css';

const Calc = () => {
    const [type, setType] = useState('');
    const [selectedServices, setSelectedServices] = useState([]);
    const formRef = useRef(null);

    const handleTypeChange = (event) => {
        const selectedType = event.target.value;
        setType(selectedType);
    };

    const handleServiceChange = (selectedOptions) => {
        setSelectedServices(selectedOptions);
    };

    const handleClearForm = () => {
        if (formRef.current) {
            formRef.current.reset();
            setType('');
            setSelectedServices([]);
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
        <section className='Calc' id='calc'>
            <p className='oves'><em>Estimez vos frais</em></p>
            <h1><em>CALCULATEUR DE FRAIS</em></h1>
            <p className='subs'>Veuillez noter qu'il s'agit d'une estimation et que chaque cas aura des prix spécifiques.</p>
            <Container className='h-100 form-container'>
                <Row className='h-100 align-items-center justify-content-center'>
                    <Col md={7} className='form-section'>
                        <form ref={formRef}>
                            <Row>
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
                                <Col sm={6} className='px-1 form-element'>
                                    <select className="form-control custom-select" value={type} onChange={handleTypeChange}>
                                        <option value="" disabled>APROX TYPE DE VÉHICULE</option>
                                        <option value="Micro">Micro</option>
                                        <option value="Hatchback">Hatchback</option>
                                        <option value="Sedan">Sedan</option>
                                        <option value="SUV">SUV</option>
                                        <option value="Van">Van</option>
                                        <option value="Truck">Truck</option>
                                        <option value="Sportive">Sportive</option>
                                    </select>
                                </Col>
                                <Col sm={12} className='px-1 form-element'>
                                    <Redbtn prop="Calculer" onClick={handleClearForm} />
                                </Col>
                                <Col sm={12} className='px-1 form-element'>
                                    <div className="total-estime">
                                        TOTAL ESTIMÉ:
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Calc;

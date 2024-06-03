import React from 'react'
import './Wtebtn.css'
import { Button } from 'react-bootstrap'

const Wtebtn = ({ prop }) => {
    return (
        <div>
            <Button type='wbutton' className='wcustom-button'>
                <h1>{prop}</h1>
            </Button>
        </div>
    )
}

export default Wtebtn
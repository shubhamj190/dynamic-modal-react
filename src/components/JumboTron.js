import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Container, Image} from 'react-bootstrap'
import img from '../img/avataaars.svg'
import {faStar} from '@fortawesome/free-solid-svg-icons'

function JumboTron() {
    return (
        <div style={{"backgroundColor":"#1abc9c"}}>
            <Container className="py-5">
               <Image src={img}  style={{"width":"25%"}}fluid/>
               <h1 className="my-3 text-light" style={{"fontSize":"4em"}}>START BOOTSTRAP</h1>
               <FontAwesomeIcon className="my-4 text-light" style={{"fontSize":"2rem"}} icon={faStar} />
               <h3 className="my-3 text-light">Graphic Artist - Web Designer - Illustrator</h3>
            </Container>
        </div>
    )
}

export default JumboTron

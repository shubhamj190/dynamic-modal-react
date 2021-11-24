import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {faDownload, faStar} from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <div style={{"backgroundColor":"#1abc9c"}}>
            <Container className="py-5">
               <h1 className="my-3 text-light" style={{"fontSize":"3rem"}}>About</h1>
               <FontAwesomeIcon className="my-4 text-light" style={{"fontSize":"2rem"}} icon={faStar} />
               <Row>
                   <Col md={6}>
                       <p className="text-light fs-2" style={{"textAlign":"left", "textJustify":"center"}}>
                       Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.   
                       </p>
                   </Col>
                   <Col md={6}>
                       <p className="text-light fs-2" style={{"textAlign":"left", "textJustify":"center"}}>
                       You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                       </p>
                   </Col>
               </Row>
               <Button variant="outline-light" size="lg" className="px-5 py-3"><FontAwesomeIcon  icon={faDownload} />  Free Download</Button>{' '}
            </Container>

        </div>
    )
}

export default About
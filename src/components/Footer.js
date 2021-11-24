import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div style={{"backgroundColor":"#2c3e50"}}>
            <Container className="text-light py-5" >
                <Row>
                    <Col md={4}>
                        <h1><strong>LOCATION</strong></h1>
                        <p className="fs-5  ">2215 John Daniel Drive <br/>Clark, MO 65243</p>
                    </Col>
                    <Col md={4}>
                        <h1><strong>AROUND THE WEB</strong></h1>
                        <Row className="py-2">
                            <Col  md={3}><Image className="py-3 icons" style={{"filter":"invert(100%)", "hover":"invert(100%)"}} src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" fluid/></Col>
                            <Col  md={3}><Image className="py-3 icons" style={{"filter":"invert(100%)", "hover":"invert(100%)"}} src="https://img.icons8.com/ios-filled/50/000000/twitter-circled.png" fluid/></Col>
                            <Col  md={3}><Image className="py-3 icons" style={{"filter":"invert(100%)", "hover":"invert(100%)"}} src="https://img.icons8.com/ios-glyphs/50/000000/linkedin-circled--v1.png" fluid/></Col>
                            <Col  md={3}><Image className="py-3 icons" style={{"filter":"invert(100%)", "hover":"invert(100%)"}} src="https://img.icons8.com/ios-filled/50/000000/pinterest--v1.png" fluid/></Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <h1><strong>ABOUT FREELANCER</strong></h1>
                        <p className="fs-5  ">Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .</p>
                    </Col>
                </Row>
            </Container>
            <div style={{"backgroundColor":"#1a252f"}} className="copy text-light py-4">
            Copyright © Your Website 2021
            </div>
        </div>
    )
}

export default Footer

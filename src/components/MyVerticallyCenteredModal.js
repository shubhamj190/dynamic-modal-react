import React from 'react'
import {Modal, Button, Image } from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="text-center">
      {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Image src={props.img} className="rounded"  fluid/>
      {console.log("this is a prop",props.title)}
      <p>{props.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="d-none" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default MyVerticallyCenteredModal

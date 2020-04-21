import React from 'react'
import { Modal } from 'react-bootstrap'

const CustomModal = (props) => {
    const handleClose = () => {
        props.handleClose()
    }
    return (
        <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.body}
            </Modal.Body>
        </Modal>
    )
}

export default CustomModal
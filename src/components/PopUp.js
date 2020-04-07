import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class PopUpComponent extends React.Component {

    constructor() {
        super()
        this.state={

        }
    }

    render() {
        return (
            <Modal show={this.props.show}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.content}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default PopUpComponent
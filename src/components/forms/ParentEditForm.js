import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import ErrorMessage from '../messages/ErrorMessage'

const ParentEditForm = (props) => {
    return (
        <Form onSubmit={props.formik.handleSubmit}>
            <Row className='justify-content-md-center'>
                <Col>
                    <Form.Group>
                        <Form.Control
                        />
                        <ErrorMessage/>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default ParentEditForm
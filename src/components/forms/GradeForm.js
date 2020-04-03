import React from 'react'
import { Form } from 'react-bootstrap'

function GradeForm(props) {
    return (
        <Form onSubmit={props.formik.handeSubmit}>
            <Form.Label>Grade</Form.Label>
        </Form>
    )
}

export default GradeForm
import React from 'react'
import { Form } from 'react-bootstrap'

function ErrorMessage(props) {
    return (
        <div className='ErrorMessage'>
            {props.error && (<Form.Text>{props.error}</Form.Text>)}
        </div>
    )
}

export default ErrorMessage
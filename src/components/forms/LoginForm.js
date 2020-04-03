import React from 'react'
import { Form, Button } from 'react-bootstrap'
import ErrorMessage from '../messages/ErrorMessage'

function LoginForm(props) {
    return (
        <Form onSubmit={props.formik.handleSubmit}>
            <h3>Please, log in</h3>
            <Form.Group>
                <Form.Control 
                    id='username' 
                    name='username' 
                    type='text' 
                    value={props.formik.values.username} 
                    onChange={props.formik.handleChange} 
                    placeholder='Username'
                />
                <ErrorMessage error={props.formik.errors.username}/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='password' 
                    name='password' 
                    type='password' 
                    value={props.formik.values.password} 
                    onChange={props.formik.handleChange} 
                    placeholder='Password'
                />
                <ErrorMessage error={props.formik.errors.password}/>
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default LoginForm
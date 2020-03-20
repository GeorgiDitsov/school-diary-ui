import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { USERNAME_PATTERN, PASSWORD_PATTERN } from '../utils/pattern'
import { Form, Button } from 'react-bootstrap'
import httpRequest from '../utils/httpRequest'

function LoginForm() {
    const history = useHistory()
    return (
        <div className='container'>
            <div className='row justify-content-center my-5'>
                <Formik 
                    initialValues={{
                        username: '',
                        password: ''
                    }} 
                    validationSchema={
                        Yup.object({
                            username: Yup.string()
                                .matches(USERNAME_PATTERN, 'Username does not match the pattern')
                                .required('Required field'),
                            password: Yup.string()
                                .matches(PASSWORD_PATTERN, 'Password does not match the pattern')
                                .required('Required field')
                        })
                    }
                    onSubmit={(values, { setSubmitting }) => {
                        console.log('I am here')
                        httpRequest.post('http://localhost:8080/login', values)
                            .then(response => {
                                history.push(response.data)
                            }).catch(error => {
                                setSubmitting(false)
                                alert(error)
                            })
                    }} 
                >
                    <Form>
                        <h3>Please, log in</h3>
                        <Form.Group>
                            <Form.Control id='username' name='username' type='text' placeholder='Username'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control id='password' name='password' type='password' placeholder='Password'/>
                        </Form.Group>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default LoginForm
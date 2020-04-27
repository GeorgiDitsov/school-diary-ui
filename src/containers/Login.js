import React from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Container } from 'react-bootstrap'
import { Formik } from 'formik'
import LoginValidationSchema from '../validations/LoginFormValidation'
// import AuthenticationService from '../services/AuthenticationService'
import LoginForm from '../components/forms/LoginForm'
import AuthenticationService from '../services/AuthenticationService'


const Login = () => {
    const { t } = useTranslation()
    return (
        <Row className='justify-content-md-center my-5'>
            <Formik 
                initialValues={{
                    username: '',
                    password: ''
                }} 
                validationSchema={LoginValidationSchema({ translate: t })}
                onSubmit={values => {
                    AuthenticationService.handleLogin(values)
                }}
            >
                {props => (
                    <Container className='justify-content-md-center'>
                        <LoginForm formik={props}/>
                    </Container>
                )}
            </Formik>
        </Row>
    )
}

export default Login
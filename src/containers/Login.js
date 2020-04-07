import React from 'react'
import { useTranslation } from 'react-i18next'
import { Row } from 'react-bootstrap'
import { Formik } from 'formik'
import LoginValidationSchema from '../validations/LoginFormValidation'
import AuthenticationService from '../services/AuthenticationService'
import LoginForm from '../components/forms/LoginForm'


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
                    AuthenticationService.attemptLogin(values)
                }}
            >
                {props => (
                    <LoginForm formik={props}/>
                )}
            </Formik>
        </Row>
    )
}

export default Login
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { Formik } from 'formik'
import { LoginValidationSchema } from '../validations/LoginFormValidation'
import AuthenticationService from '../services/AuthenticationService'
import { HOME_PATH } from '../utils/url'
import LoginForm from '../components/forms/LoginForm'

const Login = () => {
    const history = useHistory()
    // const message = this.props.location.message
    return (
        <Row className='justify-content-md-center my-5'>
            <Formik 
                initialValues={{
                    username: '',
                    password: ''
                }} 
                validationSchema={LoginValidationSchema}
                onSubmit={values => { 
                    if(AuthenticationService.attemptLogin(values)){
                        history.push(HOME_PATH)
                    }
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
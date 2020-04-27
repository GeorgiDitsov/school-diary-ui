import React from 'react'
import LocalizationContext from '../../context/localization-context'
import { Form } from 'react-bootstrap'
import { ErrorMessage } from 'formik'
import SubmitButton from '../buttons/SubmitButton'

const LoginForm = (props) => {
    const translate = React.useContext(LocalizationContext)
    return (
        <Form onSubmit={props.formik.handleSubmit}>
            <h3>{translate('message.login')}</h3>
            <Form.Group>
                <Form.Control 
                    id='username' 
                    type='text' 
                    value={props.formik.values.username} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('username')}
                />
                <ErrorMessage component='div' className='error' name='username'/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='password' 
                    type='password' 
                    value={props.formik.values.password} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('password')}
                />
                <ErrorMessage component='div' className='error' name='password'/>
            </Form.Group>
            <SubmitButton/>
        </Form>
    )
}

export default LoginForm
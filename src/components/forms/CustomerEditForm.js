import React from 'react'
import LocalizationContext from '../../context/localization-context'
import { Form } from 'react-bootstrap'
import { ErrorMessage } from 'formik'
import SubmitButton from '../buttons/SubmitButton'

const CustomerEditForm = (props) => {
    const translate = React.useContext(LocalizationContext)
    return (
        <Form onSubmit={props.formik.handleSubmit}>
            <Form.Group>
                <Form.Control 
                    id='customer.username' 
                    type='text' 
                    value={props.formik.values.customer.username} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('username')}
                />
                <ErrorMessage component='div' className='error' name='customer.username'/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='customer.password' 
                    type='password' 
                    value={props.formik.values.customer.password} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('password')}
                />
                <ErrorMessage component='div' className='error' name='customer.password'/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='customer.email' 
                    type='text' 
                    value={props.formik.values.customer.email} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('email')}
                />
                <ErrorMessage component='div' className='error' name='customer.email'/>
            </Form.Group>
            <SubmitButton/>
        </Form>
    )
}

export default CustomerEditForm
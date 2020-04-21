import React from 'react'
import { useTranslation } from 'react-i18next'
import { Form } from 'react-bootstrap'
import ErrorMessage from '../messages/ErrorMessage'
import { getIn } from 'formik'
import SubmitButton from '../buttons/SubmitButton'

const CustomerEditForm = (props) => {
    const { t } = useTranslation()
    return (
        <Form onSubmit={props.formik.handleSubmit}>
            <Form.Group>
                <Form.Control 
                    id='customer.username' 
                    type='text' 
                    value={props.formik.values.customer.username} 
                    onChange={props.formik.handleChange} 
                    placeholder={t('username')}
                />
                <ErrorMessage error={getIn(props.formik.errors, 'customer.username')}/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='customer.password' 
                    type='password' 
                    value={props.formik.values.customer.password} 
                    onChange={props.formik.handleChange} 
                    placeholder={t('password')}
                />
                <ErrorMessage error={getIn(props.formik.errors, 'customer.password')}/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='customer.email' 
                    type='text' 
                    value={props.formik.values.customer.email} 
                    onChange={props.formik.handleChange} 
                    placeholder={t('email')}
                />
                <ErrorMessage error={getIn(props.formik.errors, 'customer.email')}/>
            </Form.Group>
            <SubmitButton/>
        </Form>
    )
}

export default CustomerEditForm
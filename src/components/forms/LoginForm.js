import React from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Button } from 'react-bootstrap'
import ErrorMessage from '../messages/ErrorMessage'

function LoginForm(props) {
    const { t } = useTranslation()
    return (
        <Form onSubmit={props.formik.handleSubmit}>
            <h3>{t('message.login')}</h3>
            <Form.Group>
                <Form.Control 
                    id='username' 
                    name='username' 
                    type='text' 
                    value={props.formik.values.username} 
                    onChange={props.formik.handleChange} 
                    placeholder={t('username')}
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
                    placeholder={t('password')}
                />
                <ErrorMessage error={props.formik.errors.password}/>
            </Form.Group>
            <Button type='submit'>{t('submit')}</Button>
        </Form>
    )
}

export default LoginForm
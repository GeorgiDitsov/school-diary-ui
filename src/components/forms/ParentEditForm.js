import React from 'react'
import LocalizationContext from '../../context/localization-context'
import { Form } from 'react-bootstrap'
import { ErrorMessage } from 'formik'
import SubmitButton from '../buttons/SubmitButton'

const ParentEditForm = (props) => {
    const translate = React.useContext(LocalizationContext)
    return (
        <Form onSubmit={props.formik.handleSubmit}>
            <Form.Group>
                <Form.Control 
                    id='parent.name' 
                    type='text' 
                    value={props.formik.values.parent.name} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('name')}
                />
                <ErrorMessage component='div' className='error' name='parent.name'/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='parent.pin' 
                    type='text' 
                    value={props.formik.values.parent.pin} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('pin')}
                />
                <ErrorMessage component='div' className='error' name='parent.pin'/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='parent.customer.username' 
                    type='text' 
                    value={props.formik.values.parent.customer.username} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('username')}
                />
                <ErrorMessage component='div' className='error' name='parent.customer.username'/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='parent.customer.password' 
                    type='password' 
                    value={props.formik.values.parent.customer.password} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('password')}
                />
                <ErrorMessage component='div' className='error' name='parent.customer.password'/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='parent.customer.email' 
                    type='email' 
                    value={props.formik.values.parent.customer.email} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('email')}
                />
                <ErrorMessage component='div' className='error' name='parent.customer.email'/>
            </Form.Group>
            <SubmitButton/>
        </Form>
    )
}

export default ParentEditForm
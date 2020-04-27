import React from 'react'
import LocalizationContext from '../../context/localization-context'
import { Form } from 'react-bootstrap'
import { ErrorMessage } from 'formik'
import SubmitButton from '../buttons/SubmitButton'

const GroupOfStudentsEditForm = (props) => {
    const translate = React.useContext(LocalizationContext)
    return (
        <Form onSubmit={props.formik.handleSubmit}>
            <Form.Group>
                <Form.Control 
                    id='groupOfStudents.view' 
                    type='text' 
                    value={props.formik.values.groupOfStudents.view} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('class')}
                />
                <ErrorMessage component='div' className='error' name='groupOfStudents.view'/>
            </Form.Group>
            <SubmitButton/>
        </Form>
    )
}

export default GroupOfStudentsEditForm
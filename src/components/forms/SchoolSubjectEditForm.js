import React from 'react'
import LocalizationContext from '../../context/localization-context'
import { Form } from 'react-bootstrap'
import { ErrorMessage } from 'formik'
import SubmitButton from '../buttons/SubmitButton'

const SchoolSubjectEditForm = (props) => {
    const translate = React.useContext(LocalizationContext)
    return (
        <Form onSubmit={props.formik.handleSubmit}>
            <Form.Group>
                <Form.Control 
                    id='schoolSubject.name' 
                    type='text' 
                    value={props.formik.values.schoolSubject.name} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('name')}
                />
                <ErrorMessage component='div' className='error' name='schoolSubject.name'/>
            </Form.Group>
            <SubmitButton/>
        </Form>
    )
}

export default SchoolSubjectEditForm
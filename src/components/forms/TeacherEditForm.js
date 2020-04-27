import React from 'react'
import LocalizationContext from '../../context/localization-context'
import { Form } from 'react-bootstrap'
import { ErrorMessage } from 'formik'
import SelectSchoolSubjects from '../selects/SelectSchoolSubjects'
import SubmitButton from '../buttons/SubmitButton'

const TeacherEditForm = (props) => {
    const translate = React.useContext(LocalizationContext)
    return (
        <Form onSubmit={props.formik.handleSubmit}>
            <Form.Group>
                <Form.Control 
                    id='teacher.name' 
                    type='text' 
                    value={props.formik.values.teacher.name} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('name')}
                />
                <ErrorMessage component='div' className='error' name='teacher.name'/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='teacher.pin' 
                    type='text' 
                    value={props.formik.values.teacher.pin} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('pin')}
                />
                <ErrorMessage component='div' className='error' name='teacher.pin'/>
            </Form.Group>
            <Form.Group>
                <SelectSchoolSubjects 
                    id='teacher.subjects' 
                    value={props.formik.values.teacher.subjects} 
                    onChange={props.formik.handleChange} 
                    schoolSubjects={props.schoolSubjects} 
                    placeholder={translate('school.subjects')}
                />
                <ErrorMessage component='div' className='error' name='teacher.subjects'/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='teacher.customer.username' 
                    type='text' 
                    value={props.formik.values.teacher.customer.username} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('username')}
                />
                <ErrorMessage component='div' className='error' name='teacher.customer.username'/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='teacher.customer.password' 
                    type='password' 
                    value={props.formik.values.teacher.customer.password} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('password')}
                />
                <ErrorMessage component='div' className='error' name='teacher.customer.password'/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='teacher.customer.email' 
                    type='email' 
                    value={props.formik.values.teacher.customer.email} 
                    onChange={props.formik.handleChange} 
                    placeholder={translate('email')}
                />
                <ErrorMessage component='div' className='error' name='teacher.customer.email'/>
            </Form.Group>
            <SubmitButton/>
        </Form>
    )
}

export default TeacherEditForm
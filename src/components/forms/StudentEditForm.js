import React from 'react'
import { useTranslation } from 'react-i18next'
import { Form } from 'react-bootstrap'
import { ErrorMessage } from 'formik'
import SubmitButton from '../buttons/SubmitButton'

const StudentEditForm = (props) => {
    const { t } = useTranslation()
    return (
        <Form onSubmit={props.formik.handleSubmit}>
            <Form.Group>
                <Form.Control 
                    id='student.name' 
                    type='text' 
                    value={props.formik.values.student.name} 
                    onChange={props.formik.handleChange} 
                    placeholder={t('name')}
                />
                <ErrorMessage component='div' className='error' name='student.name'/>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    id='student.pin' 
                    type='text' 
                    value={props.formik.values.student.pin} 
                    onChange={props.formik.handleChange} 
                    placeholder={t('pin')}
                />
                <ErrorMessage component='div' className='error' name='student.pin'/>
            </Form.Group>
            <Form.Group>
                <Form.Label>{t('class')}</Form.Label>
                <Form.Control 
                    id='student.group' 
                    as='select' 
                    value={props.formik.values.student.group} 
                    onChange={props.formik.handleChange} 
                >
                    <option value={undefined}>{t('notAvailable')}</option>
                    {props.groups.map(group => <option value={group}>{group.view}</option>)}
                </Form.Control>
                <ErrorMessage component='div' className='error' name='student.group'/>
            </Form.Group>
            <Form.Group>
                <Form.Label>{t('parents')}</Form.Label>
                <Form.Control 
                    id='student.parents' 
                    value={props.formik.values.student.parents} 
                    onChange={props.formik.handleChange} 
                    placeholder={t('parents')} 
                    as='select' multiple
                >
                    {props.parents.map(parent => <option value={parent}>{parent.name + ', ' + parent.pin}</option>)}
                </Form.Control>
                <ErrorMessage component='div' className='error' name='student.parents'/>
            </Form.Group>
            <SubmitButton/>
        </Form>
    )
}

export default StudentEditForm
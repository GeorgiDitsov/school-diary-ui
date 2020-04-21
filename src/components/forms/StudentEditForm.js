import React from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Row, Col } from 'react-bootstrap'
import ErrorMessage from '../messages/ErrorMessage'
import { getIn } from 'formik'
import SubmitButton from '../buttons/SubmitButton'

const StudentEditForm = (props) => {
    const { t } = useTranslation()
    return (
        <Form onSubmit={props.formik.handleSubmit}>
            <Row className='justify-content-center-md'>
                <Col>
                    <Form.Group>
                        <Form.Control 
                            id='student.name' 
                            type='text' 
                            value={props.formik.values.student.name} 
                            onChange={props.formik.handleChange} 
                            placeholder={t('name')}
                        />
                        <ErrorMessage error={getIn(props.formik.errors, 'student.name')}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Control 
                            id='student.pin' 
                            type='text' 
                            value={props.formik.values.student.pin} 
                            onChange={props.formik.handleChange} 
                            placeholder={t('pin')}
                        />
                        <ErrorMessage error={getIn(props.formik.errors, 'student.pin')}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Control 
                            id='student.group' 
                            value={props.formik.values.student.group} 
                            onChange={props.formik.handleChange}  
                            as='select'
                        >
                            <option value={null}>{t('notAvailable')}</option>
                            {props.groups.map(group => <option value={group}>{group.view}</option>)}
                        </Form.Control>
                        <ErrorMessage error={getIn(props.formik.errors, 'student.group')}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Control 
                            id='student.parents' 
                            value={props.formik.values.student.parents} 
                            onChange={props.formik.handleChange} 
                            placeholder={t('parents')} 
                            as='select' multiple
                        >
                            {props.parents.map(parent => <option value={parent}>{parent.name + ', ' + parent.pin}</option>)}
                        </Form.Control>
                        <ErrorMessage error={getIn(props.formik.errors, 'student.parents')}/>
                    </Form.Group>
                </Col>
                <Col>
                    <SubmitButton/>
                </Col>
            </Row>
        </Form>
    )
}

export default StudentEditForm
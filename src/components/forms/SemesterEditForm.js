import React from 'react'
import LocalizationContext from '../../context/localization-context'
import { Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { ErrorMessage } from 'formik'
import SubmitButton from '../buttons/SubmitButton'

const SemesterEditForm = (props) => {
    const translate = React.useContext(LocalizationContext)
    return (
        <Form onSubmit={props.formik.handleSubmit}>
                <Form.Group>
                    <Form.Label>{translate('begins')}</Form.Label>
                    <DatePicker 
                        id='semester.begin' 
                        selected={props.formik.values.semester.begin && new Date(props.formik.values.semester.begin)} 
                        selectsStart 
                        startDate={props.formik.values.semester.begin} 
                        endDate={props.formik.values.semester.end} 
                        onChange={props.formik.handleChange} 
                        dateFormat='dd-MMM-yyyy HH:mm:ss'
                    />
                    <ErrorMessage component='div' className='error' name='semester.begin'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>{translate('ends')}</Form.Label>
                    <DatePicker
                        id='semester.end' 
                        selected={props.formik.values.semester.end && new Date(props.formik.values.semester.end)} 
                        selectsEnd 
                        startDate={props.formik.values.semester.begin} 
                        endDate={props.formik.values.semester.end}
                        minDate={props.formik.values.semester.begin} 
                        onChange={props.formik.handleChange} 
                        dateFormat='dd-MMM-yyyy HH:mm:ss'
                    />
                    <ErrorMessage component='div' className='error' name='semester.end'/>
                </Form.Group>
            <SubmitButton/>
        </Form>
    )
}

export default SemesterEditForm
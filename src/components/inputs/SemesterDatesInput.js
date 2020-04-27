import React from 'react'
import DatePicker from 'react-datepicker'

const SemesterDatesInput = (props) => {
    const semesterBegin = new Date(props.begins)
    const semesterEnd = new Date(props.ends)
    return (
        <>
            <DatePicker 
                id='semester.begin' 
                selected={semesterBegin} 
                selectsStart 
                startDate={props.formik.values.semester.begin} 
                endDate={props.formik.values.semester.end} 
                onChange={props.formik.handleChange} 
                dateFormat='dd-MMM-yyyy HH:mm:ss'
            />
            <DatePicker
                id='semester.end' 
                selected={semesterEnd} 
                selectsEnd 
                startDate={props.formik.values.semester.begin} 
                endDate={props.formik.values.semester.end} 
                minDate={props.formik.values.semester.begin} 
                onChange={props.formik.handleChange} 
                dateFormat='dd-MMM-yyyy HH:mm:ss'
            />
        </>
    )
}

export default SemesterDatesInput

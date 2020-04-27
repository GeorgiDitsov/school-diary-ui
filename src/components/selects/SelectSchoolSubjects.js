import React from 'react'
import Select from 'react-select'

const SelectSchoolSubjects = (props) => {
    const options = props.schoolSubjects.map(subject => {
        return {
            value: subject,
            label: subject.name
        }
    })
    const onChange = (value) => {
        props.onChange('teacher.subjects', value)
    }
    return (
        <Select 
            id={props.id} 
            value={props.value} 
            options={options} 
            onChange={onChange} 
            isMulti 
            placeholder={props.placeholder}
        />
    )
}

export default SelectSchoolSubjects
import React from 'react'
import { SchoolSubjectRow, SchoolSubjectColumnNames } from './items/SchoolSubject'
import List from '../List'
import SchoolSubjectEdit from '../../containers/SchoolSubjectEdit'

const SchoolSubjects = (props) => {
    const onEdit = (schoolSubject) => {
        props.onEdit(schoolSubject)
    }
    const onDelete = (schoolSubjectId) => {
        props.onDelete(schoolSubjectId)
    }
    const handleSubmit = (schoolSubject) => {
        props.handleSubmit(schoolSubject)
    }
    const handleModal = () => {
        props.handleModal()
    }
    const rows = props.schoolSubjects.map(schoolSubject => 
        <SchoolSubjectRow 
            key={schoolSubject.id} 
            schoolSubject={schoolSubject} 
            onEdit={onEdit} 
            onDelete={onDelete}
        />
    )
    return (
        <React.Fragment>
            {props.showModal &&
                <SchoolSubjectEdit 
                    schoolSubject={props.schoolSubject} 
                    handleSubmit={handleSubmit} 
                    handleModal={handleModal}
                />
            }
            <List columnNames={(<SchoolSubjectColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default SchoolSubjects
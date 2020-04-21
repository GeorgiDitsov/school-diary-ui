import React from 'react'
import { StudentRow, StudentColumnNames } from './items/Student'
import List from '../List'
import { withTranslation } from 'react-i18next'
import StudentEdit from '../../containers/StudentEdit'

const Students = (props) => {

    const onEdit = (student) => {
        props.onEdit(student)
    }

    const onDelete = (studentId) => {
        props.onDelete(studentId)
    }

    let rows = props.students.map(student => 
        <StudentRow key={student.id} student={student} onEdit={onEdit} onDelete={onDelete}/>)
    return (
        <React.Fragment>
            <StudentEdit student={props.student} groups={props.groups} parents={props.parents}/>
            <List columnNames={(<StudentColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default withTranslation()(Students)
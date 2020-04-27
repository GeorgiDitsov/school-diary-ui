import React from 'react'
import { StudentRow, StudentColumnNames } from './items/Student'
import StudentEdit from '../../containers/StudentEdit'
import List from '../List'
import { withTranslation } from 'react-i18next'

const Students = (props) => {
    const onEdit = (student) => {
        props.onEdit(student)
    }
    const onDelete = (studentId) => {
        props.onDelete(studentId)
    }
    const handleSubmit = (student) => {
        props.handleSubmit(student)
    }
    const handleModal = () => {
        props.handleModal()
    }
    const rows = props.students.map(student => 
        <StudentRow 
            key={student.id} 
            student={student} 
            onEdit={onEdit} 
            onDelete={onDelete}
        />
    )
    return (
        <React.Fragment>
            {props.showModal && 
                <StudentEdit 
                    handleModal={handleModal} 
                    student={props.student} 
                    groups={props.groups} 
                    parents={props.parents} 
                    handleSubmit={handleSubmit}
                />
            }
            <List columnNames={(<StudentColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default withTranslation()(Students)
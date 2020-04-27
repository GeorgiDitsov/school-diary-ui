import React from 'react'
import { TeacherRow, TeacherColumnNames } from './items/Teacher'
import TeacherEdit from '../../containers/TeacherEdit'
import List from '../List'

const Teachers = (props) => {
    const onEdit = (teacher) => {
        props.onEdit(teacher)
    }
    const onDelete = (teacherId) => {
        props.onDelete(teacherId)
    }
    const handleSubmit = (teacher) => {
        props.handleSubmit(teacher)
    }
    const handleModal = () => {
        props.handleModal()
    }
    const rows = props.teachers.map(teacher => 
        <TeacherRow 
            key={teacher.id} 
            teacher={teacher} 
            onEdit={onEdit} 
            onDelete={onDelete} 
        />
    )
    return (
        <React.Fragment>
            {props.showModal && 
                <TeacherEdit 
                    teacher={props.teacher} 
                    schoolSubjects={props.schoolSubjects} 
                    handleSubmit={handleSubmit} 
                    handleModal={handleModal}
                />
            }
            <List columnNames={(<TeacherColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default Teachers
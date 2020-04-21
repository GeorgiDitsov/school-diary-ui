import React from 'react'
import { TeacherRow, TeacherColumnNames } from './items/Teacher'
import List from '../List'

const Teachers = (props) => {
    let rows = props.teachers.map(teacher => <TeacherRow key={teacher.id} teacher={teacher}/>)
    return (
        <React.Fragment>
            <List columnNames={(<TeacherColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default Teachers
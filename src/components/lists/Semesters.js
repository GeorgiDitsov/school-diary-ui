import React from 'react'
import { SemesterRow, SemesterColumnNames } from './items/Semester'
import List from '../List'
import SemesterEdit from '../../containers/SemesterEdit'

const Semesters = (props) => {
    const onEdit = (semester) => {
        props.onEdit(semester)
    }
    const onDelete = (semesterId) => {
        props.onDelete(semesterId)
    }
    const handleSubmit = (semester) => {
        props.handleSubmit(semester)
    }
    const handleModal = () => {
        props.handleModal()
    }
    const rows = props.semesters.map(semester => 
        <SemesterRow 
            key={semester.id} 
            semester={semester} 
            onEdit={onEdit} 
            onDelete={onDelete}
        />
    )
    return (
        <React.Fragment>
            {props.showModal &&
                <SemesterEdit 
                    semester={props.semester} 
                    handleSubmit={handleSubmit} 
                    handleModal={handleModal}
                />
            }
            <List columnNames={(<SemesterColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default Semesters
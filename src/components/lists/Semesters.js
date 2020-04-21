import React from 'react'
import { SemesterRow, SemesterColumnNames } from './items/Semester'
import List from '../List'

const Semesters = (props) => {
    let rows = props.semesters.map(semester => <SemesterRow key={semester.id} semester={semester}/>)
    return (
        <React.Fragment>
            <List columnNames={(<SemesterColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default Semesters
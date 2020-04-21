import React from 'react'
import List from '../List'
import { GradeRow, GradeColumnNames } from './items/Grade'

const Grades = (props) => {
    let rows = props.grades.map(grade => <GradeRow key={grade.id} grade={grade}/>)
    return (
        <React.Fragment>
            <List columnNames={<GradeColumnNames/>} rows={rows}/>
        </React.Fragment>
    )
}

export default Grades 
import React from 'react'
import { SchoolSubjectRow, SchoolSubjectColumnNames } from './items/SchoolSubject'
import List from '../List'


const SchoolSubjects = (props) => {
    let rows = props.schoolSubjects.map(schoolSubject => 
        <SchoolSubjectRow key={schoolSubject.id} schoolSubject={schoolSubject}/>)
    return (
        <React.Fragment>
            <List columnNames={(<SchoolSubjectColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default SchoolSubjects
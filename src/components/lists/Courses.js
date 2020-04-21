import React from 'react'
import { CourseRow, CourseColumnNames } from './items/Course'
import List from '../List'

const Courses = (props) => {
    let rows = props.courses.map(course => <CourseRow key={course.id} course={course}/>)
    return (
        <React.Fragment>
            <List columnNames={(<CourseColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default Courses
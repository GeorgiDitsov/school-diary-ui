import React from 'react'
import { CourseRow, CourseColumnNames } from './items/Course'
import CourseEdit from '../../containers/CourseEdit'
import List from '../List'

const Courses = (props) => {
    const onEdit = (course) => {
        props.onEdit(course)
    }
    const onDelete = (courseId) => {
        props.onDelete(courseId)
    }
    const handleSubmit = (course) => {
        props.handleSubmit(course)
    }
    const handleModal = () => {
        props.handleModal()
    }
    const rows = props.courses.map(course => 
        <CourseRow 
            key={course.id} 
            course={course} 
            onEdit={onEdit} 
            onDelete={onDelete}
        />
    )
    return (
        <React.Fragment>
            {props.showModal &&
                <CourseEdit 
                    course={props.course} 
                    groupsOfStudents={props.groupsOfStudents} 
                    schoolSubjects={props.schoolSubjects} 
                    teachers={props.teachers} 
                    handleSubmit={handleSubmit} 
                    handleModal={handleModal}
                />
            }
            <List columnNames={(<CourseColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default Courses
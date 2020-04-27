import React from 'react'
import LocalizationContext from '../../../context/localization-context'
import PrincipalContext from '../../../context/principal-context'
import { ROLE_ADMIN, ROLE_TEACHER } from '../../../utils/constants'
import AdminOptions from '../../buttons/AdminOptions'
import { Link } from 'react-router-dom'
import { STUDENTS_PATH, TEACHER_COURSES_PATH } from '../../../utils/url'

export const CourseColumnNames = () => {
    const translate = React.useContext(LocalizationContext)
    const principal = React.useContext(PrincipalContext)
    return(
        <React.Fragment>
            <th>{translate('id')}</th>
            <th>{translate('class')}</th>
            <th>{translate('school.subject')}</th>
            {principal.role === ROLE_ADMIN && <th>{translate('teacher')}</th>}
            {principal.role === ROLE_TEACHER && <th>{translate('students')}</th>}
        </React.Fragment>
    )
}

export const CourseRow = (props) => {
    const onEdit = (course) => {
        props.onEdit(course)
    }
    const onDelete = (courseId) => {
        props.onDelete(courseId)
    }
    return (
        <tr>
            <td>{props.course.id}</td>
            <td>{props.course.groupOfStudents.view}</td>
            <td>{props.course.schoolSubject.name}</td>
            <td>{props.course.teacher ? props.course.teacher.name + ', ' + props.course.teacher.pin : 'n/a'}</td>
            <AdminOptions 
                item={props.course} 
                onEdit={onEdit} 
                onDelete={onDelete}
            />
        </tr>
    )
}

export const CourseViewModelRow = ({ course }) => {
    return (
        <tr>
            <td>{course.courseId}</td>
            <td>{course.groupOfStudentsView}</td>
            <td>{course.schoolSubjectName}</td>
            <td>
                {course.students.map(student =>
                    <div>
                        <Link to={TEACHER_COURSES_PATH + '/' + course.courseId + STUDENTS_PATH + '/' + student.studentId}>
                            {student.studentView}
                        </Link>
                    </div>
                )}
            </td>
        </tr>
    )
}

import React from 'react'
import LocalizationContext from '../../../context/localization-context'

export const GradeColumnNames = () => {
    const translate = React.useContext(LocalizationContext)
    return (
        <React.Fragment>
            <th>{translate('id')}</th>
            <th>{translate('grade')}</th>
            <th>{translate('inserted')}</th>
            <th>{translate('updated')}</th>
            <th>{translate('student')}</th>
            <th>{translate('school.subject')}</th>
            <th>{translate('teacher')}</th>
        </React.Fragment>
    )
}

export const GradeRow = (props) => {
    return (
        <tr>
            <td>{props.grade.id}</td>
            <td>{props.grade.value}</td>
            <td>{props.grade.inserted}</td>
            <td>{props.grade.updated}</td>
            <td>{props.grade.student.name + ', ' + props.grade.student.pin}</td>
            <td>{props.grade.course.schoolSubject.name}</td>
            <td>{props.grade.course.teacher.name + ', ' + props.grade.course.teacher.pin}</td>
            <td/>
        </tr>
    )
}

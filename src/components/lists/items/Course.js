import React from 'react'
import { useTranslation } from 'react-i18next'
import AdminOptions from '../../buttons/AdminOptions'

export const CourseColumnNames = () => {
    const { t } = useTranslation()
    return(
        <React.Fragment>
            <th>{t('id')}</th>
            <th>{t('class')}</th>
            <th>{t('school.subject')}</th>
            <th>{t('teacher')}</th>
        </React.Fragment>
    )
}

export const CourseRow = (props) => {
    return (
        <tr>
            <td>{props.course.id}</td>
            <td>{props.course.group.view}</td>
            <td>{props.course.subject.name}</td>
            <td>{props.course.teacher === null ? 'n/a' : props.course.teacher.name + ', ' + props.course.teacher.pin}</td>
            <AdminOptions id={props.course.id}/>
        </tr>
    )
}

import React from 'react'
import { useTranslation } from 'react-i18next'

export const GradeColumnNames = () => {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <th>{t('id')}</th>
            <th>{t('grade')}</th>
            <th>{t('inserted')}</th>
            <th>{t('updated')}</th>
            <th>{t('student')}</th>
            <th>{t('school.subject')}</th>
            <th>{t('teacher')}</th>
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
            <td>{props.grade.course.subject.name}</td>
            <td>{props.grade.course.teacher.name + ', ' + props.grade.course.teacher.pin}</td>
            <td/>
        </tr>
    )
}

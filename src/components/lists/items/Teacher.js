import React from 'react'
import { useTranslation } from 'react-i18next'
import AdminOptions from '../../buttons/AdminOptions'

export const TeacherColumnNames = () => {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <th>{t('id')}</th>
            <th>{t('name')}</th>
            <th>{t('pin')}</th>
            <th>{t('school.subjects')}</th>
            <th>{t('customer')}</th>
        </React.Fragment>
    )
}

export const TeacherRow = (props) => {
    return (
        <tr>
            <td>{props.teacher.id}</td>
            <td>{props.teacher.name}</td>
            <td>{props.teacher.pin}</td>
            <td>
                {props.teacher.subjects.map(subject =>{
                    return (<div key={subject.id} >{subject.name}</div>)
                })}
            </td>
            <td>{props.teacher.customer.username}</td>
            <AdminOptions id={props.teacher.id}/>
        </tr>
    )
}
import React from 'react'
import AdminOptions from '../../buttons/AdminOptions'
import { useTranslation } from 'react-i18next'

export const SchoolSubjectColumnNames = () => {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <th>{t('id')}</th> 
            <th>{t('school.subject')}</th> 
        </React.Fragment>
    )
}

export const SchoolSubjectRow = (props) => {
    return (
        <tr>
            <td>{props.schoolSubject.id}</td>
            <td>{props.schoolSubject.name}</td>
            <AdminOptions id={props.schoolSubject.id}/>
        </tr>
    )
}

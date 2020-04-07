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
            <td>{props.subject.id}</td>
            <td>{props.subject.name}</td>
            <AdminOptions id={props.subject.id}/>
        </tr>
    )
}

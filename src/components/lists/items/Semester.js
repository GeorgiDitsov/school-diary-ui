import React from 'react'
import AdminOptions from '../../buttons/AdminOptions'
import { useTranslation } from 'react-i18next'

export const SemesterColumnNames = () => {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <th>{t('id')}</th>
            <th>{t('begins')}</th>
            <th>{t('ends')}</th>
        </React.Fragment>
    )
}

export const SemesterRow = (props) => {
    return (
        <tr>
            <td>{props.semester.id}</td>
            <td>{props.semester.begin}</td>
            <td>{props.semester.end}</td>
            <AdminOptions id={props.semester.id}/>
        </tr>
    )
}

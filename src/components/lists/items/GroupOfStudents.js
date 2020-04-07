import React from 'react'
import { useTranslation } from 'react-i18next'
import AdminOptions from '../../buttons/AdminOptions'

export const GroupOfStudentsColumnNames = () => {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <th>{t('id')}</th>
            <th>{t('class')}</th>
        </React.Fragment>
    )
}

export const GroupOfStudentsRow = (props) => {
    return (
        <tr>
            <td>{props.group.id}</td>
            <td>{props.group.view}</td>
            <AdminOptions id={props.group.id}/>
        </tr>
    )
}
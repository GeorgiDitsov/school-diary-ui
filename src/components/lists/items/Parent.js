import React from 'react'
import { useTranslation } from 'react-i18next'
import AdminOptions from '../../buttons/AdminOptions'

export const ParentColumnNames = () => {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <th>{t('id')}</th>
            <th>{t('name')}</th>
            <th>{t('pin')}</th>
            <th>{t('customer')}</th>
        </React.Fragment>
    )
}

export const ParentRow = (props) => {
    return (
        <tr>
            <td>{props.parent.id}</td>
            <td>{props.parent.name}</td>
            <td>{props.parent.pin}</td>
            <td>{props.parent.customer.username}</td>
            <AdminOptions id={props.parent.id}/>
        </tr>
    )
}

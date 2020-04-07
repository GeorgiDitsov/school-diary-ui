import React from 'react'
import AdminOptions from '../../buttons/AdminOptions'
import { useTranslation } from 'react-i18next'

export const CustomerColumnNames = () => {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <th>{t('id')}</th>
            <th>{t('name')}</th>
            <th>{t('email')}</th>
            <th>{t('role')}</th>
        </React.Fragment>
    )
}

export const CustomerRow = (props) => {
    return (
        <tr>
            <td>{props.customer.id}</td>
            <td>{props.customer.username}</td>
            <td>{props.customer.email}</td>
            <td>{props.customer.role.name}</td>
            <AdminOptions id={props.customer.id}/>
        </tr>
    )
}

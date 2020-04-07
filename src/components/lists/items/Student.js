import React from 'react'
import { useTranslation } from 'react-i18next'
import AdminOptions from '../../buttons/AdminOptions'

export const StudentColumnNames = () => {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <th>{t('id')}</th>
            <th>{t('name')}</th>
            <th>{t('pin')}</th>
            <th>{t('class')}</th>
            <th>{t('parents')}</th>
            <th>{t('customer')}</th>
        </React.Fragment>
    )
}

export const StudentRow = (props) => {
    return (
        <tr>
            <td>{props.student.id}</td>
            <td>{props.student.name}</td>
            <td>{props.student.pin}</td>
            <td>{props.student.group === undefined ? 'n/a' : props.student.group.view}</td>
            <td>
                {props.student.parents.map(parent => {
                    return (
                        <div key={parent.id}>{parent.name + ', ' + parent.pin}</div>
                    )
                })}
            </td>
            <td>{props.student.customer.username}</td>
            <AdminOptions id={props.student.id}/>
        </tr>
    )
}

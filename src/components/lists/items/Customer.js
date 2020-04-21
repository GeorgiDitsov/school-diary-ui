import React from 'react'
import LocalizationContext from '../../../context/localization-context'
import { Button } from 'react-bootstrap'

export const CustomerColumnNames = () => {
    const translate = React.useContext(LocalizationContext)
    return (
        <React.Fragment>
            <th>{translate('id')}</th>
            <th>{translate('name')}</th>
            <th>{translate('email')}</th>
            <th>{translate('role')}</th>
        </React.Fragment>
    )
}

export const CustomerRow = (props) => {
    const translate = React.useContext(LocalizationContext)
    const onEdit = (customer) => {
        props.onEdit(customer)
    }
    return (
        <tr>
            <td>{props.customer.id}</td>
            <td>{props.customer.username}</td>
            <td>{props.customer.email}</td>
            <td>{props.customer.role.name}</td>
            <td><Button variant='primary' onClick={() => onEdit(props.customer)}>{translate('edit')}</Button></td>
        </tr>
    )
}

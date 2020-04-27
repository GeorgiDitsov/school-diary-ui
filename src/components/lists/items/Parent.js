import React from 'react'
import LocalizationContext from '../../../context/localization-context'
import AdminOptions from '../../buttons/AdminOptions'

export const ParentColumnNames = () => {
    const translate = React.useContext(LocalizationContext)
    return (
        <React.Fragment>
            <th>{translate('id')}</th>
            <th>{translate('name')}</th>
            <th>{translate('pin')}</th>
            <th>{translate('customer')}</th>
        </React.Fragment>
    )
}

export const ParentRow = (props) => {
    const onEdit = (parent) => {
        props.onEdit(parent)
    }
    const onDelete = (parentId) => {
        props.onDelete(parentId)
    }
    return (
        <tr>
            <td>{props.parent.id}</td>
            <td>{props.parent.name}</td>
            <td>{props.parent.pin}</td>
            <td>{props.parent.customer.username}</td>
            <AdminOptions 
                item={props.parent} 
                onEdit={onEdit} 
                onDelete={onDelete}
            />
        </tr>
    )
}

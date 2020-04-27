import React from 'react'
import LocalizationContext from '../../../context/localization-context'
import AdminOptions from '../../buttons/AdminOptions'

export const GroupOfStudentsColumnNames = () => {
    const translate = React.useContext(LocalizationContext)
    return (
        <React.Fragment>
            <th>{translate('id')}</th>
            <th>{translate('class')}</th>
        </React.Fragment>
    )
}

export const GroupOfStudentsRow = (props) => {
    const onEdit = (groupOfStudents) => {
        props.onEdit(groupOfStudents)
    }
    const onDelete = (groupOfStudentsId) => {
        props.onDelete(groupOfStudentsId)
    }
    return (
        <tr>
            <td>{props.groupOfStudents.id}</td>
            <td>{props.groupOfStudents.view}</td>
            <AdminOptions 
                item={props.groupOfStudents} 
                onEdit={onEdit} 
                onDelete={onDelete}
            />
        </tr>
    )
}
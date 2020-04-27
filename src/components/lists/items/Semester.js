import React from 'react'
import LocalizationContext from '../../../context/localization-context'
import AdminOptions from '../../buttons/AdminOptions'

export const SemesterColumnNames = () => {
    const translate = React.useContext(LocalizationContext)
    return (
        <React.Fragment>
            <th>{translate('id')}</th>
            <th>{translate('begins')}</th>
            <th>{translate('ends')}</th>
        </React.Fragment>
    )
}

export const SemesterRow = (props) => {
    const onEdit = (semester) => {
        props.onEdit(semester)
    }
    const onDelete = (semesterId) => {
        props.onDelete(semesterId)
    }
    return (
        <tr>
            <td>{props.semester.id}</td>
            <td>{props.semester.begin}</td>
            <td>{props.semester.end}</td>
            <AdminOptions 
                item={props.semester} 
                onEdit={onEdit} 
                onDelete={onDelete}
            />
        </tr>
    )
}

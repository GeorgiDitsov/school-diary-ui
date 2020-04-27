import React from 'react'
import LocalizationContext from '../../../context/localization-context'
import AdminOptions from '../../buttons/AdminOptions'

export const StudentColumnNames = () => {
    const translate = React.useContext(LocalizationContext)
    return (
        <React.Fragment>
            <th>{translate('id')}</th>
            <th>{translate('name')}</th>
            <th>{translate('pin')}</th>
            <th>{translate('class')}</th>
            <th>{translate('parents')}</th>
            <th>{translate('customer')}</th>
        </React.Fragment>
    )
}

export const StudentRow = (props) => {
    const onEdit = (student) => {
        props.onEdit(student)
    }
    const onDelete = (studentId) => {
        props.onDelete(studentId)
    }
    return (
        <tr>
            <td>{props.student.id}</td>
            <td>{props.student.name}</td>
            <td>{props.student.pin}</td>
            <td>{props.student.groupOfStudents ? props.student.groupOfStudents.view : 'n/a'}</td>
            <td>
                {props.student.parents.map(parent => {
                    return <div key={parent.id}>{parent.name + ', ' + parent.pin}</div>
                })}
            </td>
            <td>{props.student.customer.username}</td>
            <AdminOptions 
                item={props.student} 
                onEdit={onEdit} 
                onDelete={onDelete} 
            />
        </tr>
    )
}

import React from 'react'
import LocalizationContext from '../../../context/localization-context'
import AdminOptions from '../../buttons/AdminOptions'

export const TeacherColumnNames = () => {
    const translate = React.useContext(LocalizationContext)
    return (
        <React.Fragment>
            <th>{translate('id')}</th>
            <th>{translate('name')}</th>
            <th>{translate('pin')}</th>
            <th>{translate('school.subjects')}</th>
            <th>{translate('customer')}</th>
        </React.Fragment>
    )
}

export const TeacherRow = (props) => {
    const onEdit = (teacher) => {
        props.onEdit(teacher)
    }
    const onDelete = (teacherId) => {
        props.onDelete(teacherId)
    }
    return (
        <tr>
            <td>{props.teacher.id}</td>
            <td>{props.teacher.name}</td>
            <td>{props.teacher.pin}</td>
            <td>
                {props.teacher.schoolSubjects.map(schoolSubjects => {
                    return (<div key={schoolSubjects.id} >{schoolSubjects.name}</div>)
                })}
            </td>
            <td>{props.teacher.customer.username}</td>
            <AdminOptions 
                item={props.teacher} 
                onEdit={onEdit} 
                onDelete={onDelete}
            />
        </tr>
    )
}
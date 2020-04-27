import React from 'react'
import LocalizationContext from '../../../context/localization-context'
import AdminOptions from '../../buttons/AdminOptions'

export const SchoolSubjectColumnNames = () => {
    const translate = React.useContext(LocalizationContext)
    return (
        <React.Fragment>
            <th>{translate('id')}</th> 
            <th>{translate('school.subject')}</th> 
        </React.Fragment>
    )
}

export const SchoolSubjectRow = (props) => {
    const onEdit = (schoolSubject) => {
        props.onEdit(schoolSubject)
    }
    const onDelete = (schoolSubjectId) => {
        props.onDelete(schoolSubjectId)
    }
    return (
        <tr>
            <td>{props.schoolSubject.id}</td>
            <td>{props.schoolSubject.name}</td>
            <AdminOptions 
                item={props.schoolSubject} 
                onEdit={onEdit} 
                onDelete={onDelete}
            />
        </tr>
    )
}

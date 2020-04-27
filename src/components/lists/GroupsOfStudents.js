import React from 'react'
import { GroupOfStudentsRow, GroupOfStudentsColumnNames } from './items/GroupOfStudents'
import GroupOfStudentsEdit from '../../containers/GroupOfStudentsEdit'
import List from '../List'

const GroupsOfStudents = (props) => {
    const onEdit = (groupOfStudents) => {
        props.onEdit(groupOfStudents)
    }
    const onDelete = (groupOfStudentsId) => {
        props.onDelete(groupOfStudentsId)
    }
    const handleSubmit = (groupOfStudents) => {
        props.handleSubmit(groupOfStudents)
    }
    const handleModal = () => {
        props.handleModal()
    }
    const rows = props.groupsOfStudents.map(groupOfStudents =>
        <GroupOfStudentsRow 
            key={groupOfStudents.id} 
            groupOfStudents={groupOfStudents} 
            onEdit={onEdit} 
            onDelete={onDelete}
        />
    )
    return (
        <React.Fragment>
            {props.showModal &&
                <GroupOfStudentsEdit 
                    groupOfStudents={props.groupOfStudents} 
                    handleSubmit={handleSubmit} 
                    handleModal={handleModal}
                />
            }
            <List columnNames={(<GroupOfStudentsColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default GroupsOfStudents
import React from 'react'
import { GroupOfStudentsRow, GroupOfStudentsColumnNames } from './items/GroupOfStudents'
import List from '../List'


const GroupsOfStudents = (props) => {
    let rows = props.groups.map(group => <GroupOfStudentsRow key={group.id} group={group}/>)
    return (
        <React.Fragment>
            <List columnNames={(<GroupOfStudentsColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default GroupsOfStudents
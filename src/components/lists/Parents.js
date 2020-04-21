import React from 'react'
import { ParentRow, ParentColumnNames } from './items/Parent'
import List from '../List'

const Parents = (props) => {
    let rows = props.parents.map(parent => <ParentRow key={parent.id} parent={parent}/>)
    return (
        <React.Fragment>
            <List columnNames={(<ParentColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default Parents
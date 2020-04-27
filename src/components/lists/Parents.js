import React from 'react'
import { ParentRow, ParentColumnNames } from './items/Parent'
import List from '../List'
import ParentEdit from '../../containers/ParentEdit'

const Parents = (props) => {
    const onEdit = (parent) => {
        props.onEdit(parent)
    }
    const onDelete = (parentId) => {
        props.onDelete(parentId)
    }
    const handleSubmit = (parent) => {
        props.handleSubmit(parent)
    }
    const handleModal = () => {
        props.handleModal()
    }
    const rows = props.parents.map(parent => 
        <ParentRow 
            key={parent.id} 
            parent={parent} 
            onEdit={onEdit} 
            onDelete={onDelete} 
        />
    )
    return (
        <React.Fragment>
            {props.showModal &&
                <ParentEdit 
                    parent={props.parent} 
                    handleSubmit={handleSubmit} 
                    handleModal={handleModal}
                />    
            }
            <List columnNames={(<ParentColumnNames/>)} rows={rows}/>
        </React.Fragment>
    )
}

export default Parents
import React from 'react'
import LocalizationContext from '../../context/localization-context'
import { ButtonGroup, Button } from 'react-bootstrap'

const AdminOptions = ({ item, onEdit, onDelete }) => {
    const translate = React.useContext(LocalizationContext)
    return (
        <td>
            <ButtonGroup>
                {onEdit && 
                    <Button variant='primary' onClick={() => onEdit(item)}>
                        {translate('edit')}
                    </Button>}
                {onDelete && 
                    <Button variant='danger' onClick={() => onDelete(item.id)}>
                        {translate('delete')}
                    </Button>}
            </ButtonGroup>
        </td>
    )
}

export default AdminOptions
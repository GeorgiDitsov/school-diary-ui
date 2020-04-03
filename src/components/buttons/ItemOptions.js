import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

function ItemOptions(props) {
    return (
        <td>
            <ButtonGroup>
                <Button variant='primary'>Edit</Button>
                <Button variant='danger'>Delete</Button>
            </ButtonGroup>
        </td>
    )
}

export default ItemOptions
import React from 'react'
import { Nav } from 'react-bootstrap'
import { PARENT_CHILDREN_PATH } from '../../../utils/url'

function ParentNavbar() {

    return (
        <Nav className='mr-auto'>
            <Nav.Link href={PARENT_CHILDREN_PATH}>My Children</Nav.Link>
        </Nav>
    )
}

export default ParentNavbar
import React from 'react'
import { Nav } from 'react-bootstrap'
import { STUDENT_GRADES_PATH } from '../../../utils/url'

function StudentNavbar() {

    return (
        <Nav className='mr-auto'>
            <Nav.Link href={STUDENT_GRADES_PATH}>My Grades</Nav.Link>
        </Nav>
    )
}

export default StudentNavbar
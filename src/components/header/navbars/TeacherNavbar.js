import React from 'react'
import { Nav } from 'react-bootstrap'
import { TEACHER_COURSES_PATH } from '../../../utils/url'

function TeacherNavbar() {
    
    return (
        <Nav className='mr-auto'>
            <Nav.Link href={TEACHER_COURSES_PATH}>My Courses</Nav.Link>
        </Nav>
    )
}

export default TeacherNavbar
import React from 'react'
import { Nav } from 'react-bootstrap'
import { CUSTOMERS_PATH, STUDENTS_PATH, PARENTS_PATH, TEACHERS_PATH, SCHOOL_SUBJECTS_PATH, 
    COURSES_PATH, GROUPS_OF_STUDENTS_PATH, SEMESTERS_PATH, GRADES_PATH } from '../../../utils/url'

function AdminNavbar() {
    return (
        <Nav className='mr-auto'>
            <Nav.Link href={CUSTOMERS_PATH}>Customer</Nav.Link>
            <Nav.Link href={STUDENTS_PATH}>Student</Nav.Link>
            <Nav.Link href={PARENTS_PATH}>Parent</Nav.Link>
            <Nav.Link href={TEACHERS_PATH}>Teacher</Nav.Link>
            <Nav.Link href={SCHOOL_SUBJECTS_PATH}>School subject</Nav.Link>
            <Nav.Link href={COURSES_PATH}>Course</Nav.Link>
            <Nav.Link href={GROUPS_OF_STUDENTS_PATH}>Class</Nav.Link>
            <Nav.Link href={SEMESTERS_PATH}>Semester</Nav.Link>
            <Nav.Link href={GRADES_PATH}>Grade</Nav.Link>
        </Nav>
    )
}

export default AdminNavbar
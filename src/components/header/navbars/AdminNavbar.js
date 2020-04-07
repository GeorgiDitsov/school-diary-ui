import React from 'react'
import { useTranslation } from 'react-i18next'
import { Nav } from 'react-bootstrap'
import { CUSTOMERS_PATH, STUDENTS_PATH, PARENTS_PATH, TEACHERS_PATH, SCHOOL_SUBJECTS_PATH, 
    COURSES_PATH, GROUPS_OF_STUDENTS_PATH, SEMESTERS_PATH, GRADES_PATH } from '../../../utils/url'

const AdminNavbar = () => {
    const { t } = useTranslation()
    return (
        <Nav className='mr-auto'>
            <Nav.Link href={CUSTOMERS_PATH}>{t('customer')}</Nav.Link>
            <Nav.Link href={STUDENTS_PATH}>{t('student')}</Nav.Link>
            <Nav.Link href={PARENTS_PATH}>{t('parent')}</Nav.Link>
            <Nav.Link href={TEACHERS_PATH}>{t('teacher')}</Nav.Link>
            <Nav.Link href={SCHOOL_SUBJECTS_PATH}>{t('school.subject')}</Nav.Link>
            <Nav.Link href={COURSES_PATH}>{t('course')}</Nav.Link>
            <Nav.Link href={GROUPS_OF_STUDENTS_PATH}>{t('class')}</Nav.Link>
            <Nav.Link href={SEMESTERS_PATH}>{t('semester')}</Nav.Link>
            <Nav.Link href={GRADES_PATH}>{t('grade')}</Nav.Link>
        </Nav>
    )
}

export default AdminNavbar
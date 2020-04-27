import React from 'react'
import { HOME_PATH, INFO_PATH, LOGOUT_PATH } from '../../utils/url'
import { Navbar, NavDropdown } from 'react-bootstrap'
import icon from '../../school.svg'
import { ROLE_ADMIN, ROLE_STUDENT, ROLE_TEACHER, ROLE_PARENT } from '../../utils/constants'
import AdminNavbar from './navbars/AdminNavbar'
import StudentNavbar from './navbars/StudentNavbar'
import TeacherNavbar from './navbars/TeacherNavbar'
import ParentNavbar from './navbars/ParentNavbar'

const Header = (props) => {
        return (
            <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
                <Navbar.Brand href={HOME_PATH}>
                    <img
                        alt='' 
                        src={icon} 
                        width='30' 
                        height='30' 
                        className='d-inline-block align-top' 
                    />{' ' + props.translate('school.diary')}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse>
                    {props.principal.role === ROLE_ADMIN && (<AdminNavbar/>)}
                    {props.principal.role === ROLE_STUDENT && (<StudentNavbar/>)}
                    {props.principal.role === ROLE_TEACHER && (<TeacherNavbar/>)}
                    {props.principal.role === ROLE_PARENT && (<ParentNavbar/>)}
                </Navbar.Collapse>
                <NavDropdown title={props.principal.username} alignRight>
                    <NavDropdown.Item href={INFO_PATH}>{props.translate('info')}</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href={LOGOUT_PATH}>{props.translate('logout')}</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        )
}

export default Header 
import React from 'react'
import { TokenContext } from '../../context/context'
import jwt_decode from 'jwt-decode'
import { HOME_PATH, INFO_PATH, LOGOUT_PATH } from '../../utils/url'
import { Navbar, NavDropdown, Spinner } from 'react-bootstrap'
import icon from '../../school.svg'
import AdminNavbar from './navbars/AdminNavbar'
import StudentNavbar from './navbars/StudentNavbar'
import TeacherNavbar from './navbars/TeacherNavbar'
import ParentNavbar from './navbars/ParentNavbar'

class Header extends React.Component {
    
    static contextType = TokenContext 

    constructor() {
        super()
        this.state={
            principal: {},
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState(prevState => {
            return {
                principal: jwt_decode(this.context),
                isLoading: !(prevState.isLoading)
            }
        })
    }
    
    render() {
        if(this.state.isLoading){
            return (<Spinner animation='border'/>)
        }
            return (
                <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
                    <Navbar.Brand href={HOME_PATH}>
                        <img
                            alt='' 
                            src={icon} 
                            width='30' 
                            height='30' 
                            className='d-inline-block align-top' 
                        />{' '}
                        School Diary
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse>
                        {this.state.principal.role === 'ROLE_ADMIN' && (<AdminNavbar/>)}
                        {this.state.principal.role === 'ROLE_STUDENT' && (<StudentNavbar/>)}
                        {this.state.principal.role === 'ROLE_TEACHER' && (<TeacherNavbar/>)}
                        {this.state.principal.role === 'ROLE_PARENT' && (<ParentNavbar/>)}
                        <NavDropdown title={this.state.principal.username}>
                            <NavDropdown.Item href={INFO_PATH}>Info</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href={LOGOUT_PATH}>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Navbar>
            )
    }
}

export default Header
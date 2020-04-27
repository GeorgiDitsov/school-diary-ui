import React from 'react'
import PrincipalContext from '../../context/principal-context'
import LocalizationContext from '../../context/localization-context'
import { Route } from 'react-router-dom'
import { ROLE_TEACHER } from '../../utils/constants'
import Header from '../header/Header'
import { Container } from 'react-bootstrap'
import UnauthorizedError from '../error/UnauthorizedError'

const TeacherRoute = ({component: Component, ...rest}) => { 
    const principal = React.useContext(PrincipalContext)
    const translate = React.useContext(LocalizationContext)
    return (
        <Route {...rest}
            render = {
                props => 
                    (principal && principal.role === ROLE_TEACHER) ? 
                        <React.Fragment>
                            <Header principal={principal} translate={translate}/>
                            <Container className='justify-content-md-center my-5'>
                                <Component component={props.component} match={props.match}/>
                            </Container>
                        </React.Fragment>
                        : 
                        <UnauthorizedError/>
            }
        />
    )
}

export default TeacherRoute
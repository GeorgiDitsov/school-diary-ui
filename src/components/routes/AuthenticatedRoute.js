import React from 'react'
import PrincipalContext from '../../context/principal-context'
import LocalizationContext from '../../context/localization-context'
import { Route, Redirect } from 'react-router-dom'
import Header from '../header/Header'
import { Container } from 'react-bootstrap'
import { LOGIN_PATH } from '../../utils/url'

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
    const principal = React.useContext(PrincipalContext)
    const translate = React.useContext(LocalizationContext)
    return (
        <Route {...rest}
            render = {
                props => principal ? 
                    (<React.Fragment>
                        <Header principal={principal} translate={translate}/>
                        <Container className='justify-content-md-center my-5'>
                            <Component component={props.component}/>
                        </Container>
                    </React.Fragment>) 
                    : 
                    (<Redirect to={LOGIN_PATH}/>)
            }
        >
        </Route>
    )
}

export default AuthenticatedRoute
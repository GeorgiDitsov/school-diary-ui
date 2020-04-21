import React from 'react'
import PrincipalContext from '../context/principal-context'
import LocalizationContext from '../context/localization-context'
import { Jumbotron } from 'react-bootstrap'

const Info = () => {
    const principal = React.useContext(PrincipalContext)
    const translate = React.useContext(LocalizationContext)
    const [username] = React.useState(translate('username') + ': ' + principal.username)
    const [role] = React.useState(translate('role') + ': ' + principal.role)
    return (
        <Jumbotron>
            <h3>{username}</h3>
            <h3>{role}</h3>
        </Jumbotron>
    )
}

export default Info
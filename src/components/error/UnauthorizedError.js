import React from 'react'
import { Alert } from 'react-bootstrap'

function UnauthorizedError() {
    return (
        <Alert>
            <Alert.Heading>Error 401, unauthorized page.</Alert.Heading>
            <hr/>
            <p className="mb-0">
                Sorry for disturbing you, but you don't have access to this page.
            </p>
        </Alert>
    )
}

export default UnauthorizedError
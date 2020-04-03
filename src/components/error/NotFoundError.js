import React from 'react'
import { Alert } from 'react-bootstrap'

function NotFoundError() {
    return (
        <Alert variant="danger">
            <Alert.Heading>Error 404, page not found.</Alert.Heading>
            <hr/>
            <p className="mb-0">
                Sorry for disturbing you, but you are lost.
            </p>
        </Alert>
    )
}

export default NotFoundError
import React from 'react'
import { Button } from 'react-bootstrap'

const CreateButton = (props) => {
    return (
        <Button className='float-right' variant='success' onClick={() => props.onCreate()}>
            {props.buttonText}
        </Button>
    )
}

export default CreateButton
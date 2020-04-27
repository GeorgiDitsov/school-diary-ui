import React from 'react'
import { Button } from 'react-bootstrap'

const CreateButton = ({ buttonText, onCreate }) => {
    return (
        <Button className='float-right' variant='success' onClick={() => onCreate()}>
            {buttonText}
        </Button>
    )
}

export default CreateButton
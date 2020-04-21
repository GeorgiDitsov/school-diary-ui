import React from 'react'

const PrincipalContext = React.createContext({
    principal: {
        username: '',
        role: '',
        exp: undefined
    },
})

export default PrincipalContext
import React from 'react'

function Container({ children }) {

    return (
        <div>
            <div>Container componenti çalıştı</div>
            <div>{children}</div>
        </div>
    )
}

export default Container
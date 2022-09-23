import React from 'react'
import Sidebar from '../sidebar'

function Layout(props) {
    return (
        <div>
            <Sidebar />
           <div >{props.children}</div>
        </div>
    )
}

export default Layout

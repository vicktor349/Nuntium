import React from 'react'
import Navbar from './Navbar'

const Layout = ({ Children }) => {
    return (
        <div>
            <Navbar />
            {Children}
        </div>
    )
}

export default Layout
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTopButton from '../components/ScrollTopButton'
const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <ScrollTopButton />
            <Footer />
        </>
    )
}

export default Layout

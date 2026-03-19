import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
const MainLayout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar />
            <main className='flex-1 w-full max-w-7xl mx-auto '>{children}</main>
            <Footer />
        </div>




    )
}

export default MainLayout
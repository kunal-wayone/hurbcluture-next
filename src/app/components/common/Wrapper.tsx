import React from 'react'
import HeaderBar from './HeaderBar'
import Navbar from './Navbar'
import Footer from './Footer'
import CartSidebar from './CartSidebar'


const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <HeaderBar />
            <Navbar />
            <div className='mt-[9.6rem]'>
                {children}
            </div>
            <CartSidebar />
            <Footer />
        </>
    )
}

export default Wrapper
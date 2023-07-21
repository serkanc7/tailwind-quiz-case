import React from 'react'
import mobileMenu from './../images/mobile-menu.svg'

function Header() {
    return (
        <header className='text-brown bg-white md:bg-[#FFFBEB]'>
            <div className='flex justify-between items-center container p-4 md:py-6 md:px-0'>
                <div className='text-[32px] leading-9 font-bold'>Collers</div>
                <nav className='hidden md:block'>
                    <a href="/" className='font-medium'>Products</a>
                    <a href="/" className='font-medium ml-8'>Solutions</a>
                    <a href="/" className='font-medium ml-8'>Pricing</a>
                    <a href="/" className='font-medium ml-8'>Resources</a>
                    <a href="/" className='font-medium ml-8'>Log In</a>
                    <a href="/" className='font-medium ml-8 border-2 border-brown rounded-lg py-3 px-7'>Sign up now</a>
                </nav>
                <div className='md:hidden'>
                    <img src={mobileMenu} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header
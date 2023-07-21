import React from 'react'
import appStore from './../images/app-store.svg'
import googlePlay from './../images/google-play.svg'
import youtube from './../images/youtube.svg'
import facebook from './../images/facebook.svg'
import twitter from './../images/twitter.svg'
import instagram from './../images/instagram.svg'
import linkedin from './../images/linkedin.svg'
import worldIcon from './../images/world-icon.svg'

const Footer = () => {
    return (
        <footer className='bg-dark-blue text-white'>
            <div className='container'>
                <div className='flex flex-col md:flex-row py-12 gap-12 border-b-[1px] border-[#334155]'>
                    <nav className='flex-1 flex flex-col items-center md:items-start'>
                        <h3 className='text-base py-2 font-medium'>Product</h3>
                        <a href="/" className='text-base py-2'>Pricing</a>
                        <a href="/" className='text-base py-2'>Overview</a>
                        <a href="/" className='text-base py-2'>Browse</a>
                        <a href="/" className='text-base py-2'>Accessibility</a>
                        <a href="/" className='text-base py-2'>Five</a>
                    </nav>
                    <nav className='flex-1 flex flex-col items-center md:items-start'>
                        <h3 className='text-base py-2 font-medium'>Solutions</h3>
                        <a href="/" className='text-base py-2'>Brainstorming</a>
                        <a href="/" className='text-base py-2'>Ideation</a>
                        <a href="/" className='text-base py-2'>Wireframing</a>
                        <a href="/" className='text-base py-2'>Research</a>
                        <a href="/" className='text-base py-2'>Design</a>
                    </nav>
                    <nav className='flex-1 flex flex-col items-center md:items-start'>
                        <h3 className='text-base py-2 font-medium'>Support</h3>
                        <a href="/" className='text-base py-2'>Contact Us</a>
                        <a href="/" className='text-base py-2'>Developers</a>
                        <a href="/" className='text-base py-2'>Documentation</a>
                        <a href="/" className='text-base py-2'>Research</a>
                        <a href="/" className='text-base py-2'>Design</a>
                    </nav>
                    <div className='flex-1 flex flex-col justify-between'>
                        <div className='flex flex-col items-center md:items-start'>
                            <h3 className='text-base py-2 font-medium'>Get the App</h3>
                            <img className='my-2' src={appStore} alt="" />
                            <img src={googlePlay} alt="" />
                        </div>
                        <div className='flex flex-col items-center md:items-start mt-12 md:mt-0'> 
                            <h3 className='text-base font-medium mb-3'>Follow Us</h3>
                            <div className='flex gap-4'>
                                <img src={youtube} alt="" />
                                <img src={facebook} alt="" />
                                <img src={twitter} alt="" />
                                <img src={instagram} alt="" />
                                <img src={linkedin} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center py-12 md:py-6'>
                    <div className='text-base'>
                        Collers @ 2023. All rights reserved.
                    </div>
                    <nav className='flex flex-row gap-8'>
                        <a href="/" className='text-base py-3'>Terms</a>
                        <a href="/" className='text-base py-3'>Privacy</a>
                        <a href="/" className='text-base py-3'>Contact</a>
                        <a href="/" className='flex text-base py-3'><img className='pr-2' src={worldIcon} alt="" />EN</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'
import playCircle from './../images/play-circle.svg'
import shoes from './../images/shoes.svg'
import shape1 from './../images/shape-1.svg'
import shape2 from './../images/shape-2.svg'
import shape3 from './../images/shape-3.svg'
import trophy from './../images/trophy.svg'
import tunnel from './../images/tunnel.svg'
import tv from './../images/tv.svg'

const Hero = () => {
    return (
        <section className='bg-white md:bg-[#FFFBEB] bg-bg-1 bg-no-repeat bg-[right_bottom_200px] min-[480px]:bg-right-bottom'>
            <div className="container">
                <div className='flex flex-col md:flex-row items-center py-12 px-4 md:py-20 md:px-0 text-center md:text-left'>
                    <div className='flex-[3_3_0%]'>
                        <h1 className='text-black text-[56px] md:text-7xl font-extrabold leading-[62px] md:leading-[79px]'>Collectible Sneakers</h1>
                        <p className='text-lg py-8'>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                        <div className='flex items-center justify-center md:justify-start'>
                            <a href="/" className='text-brown text-xl leading-6 font-medium border-2 border-brown rounded-lg py-4 px-8'>Sign up now</a>
                            <a href="/" className='text-brown text-base font-medium flex items-center ml-4 py-2 px-3'><img src={playCircle} alt="play" className='mr-2' /> Watch Demo</a>
                        </div>
                    </div>
                    <div className='md:ml-20 flex-[2_2_0%]'>
                        <img className='w-full' src={shoes} alt="" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center py-12 px-4 md:py-20 md:px-0 text-black bg-[#FEF3C7] min-[480px]:bg-transparent'>
                    <div className='max-w-[373px] flex flex-col items-center text-center md:items-start md:text-left mb-8 md:mb-0'>
                        <div className='relative'>
                            <img src={trophy} alt=""/>
                            <img src={shape1} alt="" className='absolute top-0 left-7' />
                        </div>
                        <h2 className='font-medium text-xl leading-[22px] my-4'>Nibh viverra</h2>
                        <p className='text-lg'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                    </div>
                    <div className='max-w-[373px] flex flex-col items-center text-center md:items-start md:text-left mb-8 md:mb-0'>
                        <div className='relative'>
                            <img src={tunnel} alt="" />
                            <img src={shape2} alt="" className='absolute top-0 left-7' />
                        </div>
                        <h2 className='font-medium text-xl leading-[22px] my-4'>Cursus amet</h2>
                        <p className='text-lg'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                    </div>
                    <div className='max-w-[373px] flex flex-col items-center text-center md:items-start md:text-left'>
                        <div className='relative'>
                            <img src={tv} alt="" />
                            <img src={shape3} alt="" className='absolute top-0 left-10' />
                        </div>
                        <h2 className='font-medium text-xl leading-[22px] my-4'>Ipsum fermentum</h2>
                        <p className='text-lg'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
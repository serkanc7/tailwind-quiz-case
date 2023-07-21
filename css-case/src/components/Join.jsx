import React from 'react'
import videoSvg from './../images/video.svg' 
import tick from './../images/tick.svg'
import decoVideo from './../images/deco-video.svg'

const Join = () => {
  return (
    <section className='bg-white md:bg-[#FFFBEB]'>
        <div className='container pt-4 pb-14 px-4 md:px-0 md:py-[160px]'>
            <div className='bg-white shadow-join rounded-[30px] py-8 px-4 md:px-20 md:pt-10 md:pb-15  flex flex-col md:flex-row items-center justify-between relative'>
                <div className='flex flex-col items-center md:items-center z-10'>
                    <h2 className='text-black text-[32px] leading-[35px] md:text-[56px] md:leading-[62px] font-bold md:font-extrabold'>Why join us</h2>
                    <ul className='py-6'>
                        <li className='flex text-base md:text-xl leading-[22px] md:leading-9'><img src={tick} alt="" /> Est et in pharetra magna adipiscing ornare aliquam.</li>
                        <li className='flex text-base md:text-xl leading-[22px] md:leading-9'><img src={tick} alt="" /> Tellus arcu sed consequat ac velit ut eu blandit.</li>
                        <li className='flex text-base md:text-xl leading-[22px] md:leading-9'><img src={tick} alt="" /> Ullamcorper ornare in et egestas dolor orci.</li>
                    </ul>
                    <button className='text-brown font-medium text-xl leading-6 border-2 border-brown rounded-lg py-4 px-8'>Sign up now</button>
                </div>
                <div className='z-10'>
                    <img className='relative md:right-[-30px]' src={videoSvg} alt="" />
                </div>
                <img className='absolute right-[0px] z-0 bottom-[-30px] md:bottom-[-50px]' src={decoVideo} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Join
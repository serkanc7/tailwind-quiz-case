import React from 'react'
import card1 from './../images/card.svg'
import card2 from './../images/card1.svg'
import card3 from './../images/card2.svg'
import shop from './../images/shop.svg'

const Best = () => {
  return (
    <section className='bg-dark-blue text-white bg-backlights-mobile bg-[50%_75%] md:bg-backlights-desktop md:bg-[50%_80%] bg-no-repeat'>
        <div className='container py-12 px-4 md:py-20 md:px-0'>
            <div className='flex flex-col md:flex-row justify-between items-center mb-8 md:mb-20'>
                <h2 className='text-[32px] font-bold leading-9 md:text-[56px] md:leading-[62px] mb-8 md:mb-0'>The best of the best</h2>
                <a href="/" className='text-2xl leading-6 font-bold py-5 px-12 border-2 border-white rounded-lg'>Sign up now</a>
            </div>
            <div className='flex flex-col md:flex-row md:gap-x-12'>
                <div className='rounded-[10px] bg-dark-blue shadow-card flex flex-col mb-8 md:mb-0'>
                    <img src={card1}  className='rounded-tl-[10px] rounded-tr-[10px]' alt="" />
                    <div className='p-8'>
                        <h3 className='text-2xl leading-[26px] font-bold'>Title</h3>
                        <p className='text-lg mt-4 mb-8'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                        <button className='text-xl leading-6 font-medium border-2 rounded-lg flex justify-center items-center w-full p-4'>
                            <img src={shop} alt="" className='mr-4' />
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className='rounded-[10px] bg-dark-blue shadow-card flex flex-col mb-8 md:mb-0'>
                    <img src={card2} className='rounded-tl-[10px] rounded-tr-[10px]' alt="" />
                    <div className='p-8'>
                        <h3 className='text-2xl leading-[26px] font-bold'>Title</h3>
                        <p className='text-lg mt-4 mb-8'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                        <button className='text-xl leading-6 font-medium border-2 rounded-lg flex justify-center items-center w-full p-4'>
                            <img src={shop} alt="" className='mr-4'/>
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className='rounded-[10px] bg-dark-blue shadow-card flex flex-col'>
                    <img src={card3} className='rounded-tl-[10px] rounded-tr-[10px]' alt="" />
                    <div className='p-8'>
                        <h3 className='text-2xl leading-[26px] font-bold'>Title</h3>
                        <p className='text-lg mt-4 mb-8'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                        <button className='text-xl leading-6 font-medium border-2 rounded-lg flex justify-center items-center w-full p-4'>
                            <img src={shop} alt="" className='mr-4' />
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Best
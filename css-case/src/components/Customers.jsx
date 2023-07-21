import React, { useEffect, useState, useRef } from "react";
import leftButton from './../images/left-button.svg'
import rightButton from './../images/right-button.svg'
import logo from './../images/logo.svg'
import userThumb from './../images/user-thumb.svg'

const Customers = () => {
    const ref = useRef(null);
    const [contWidth, setContWidth] = useState(0);
    const [divider, setDivider] = useState(3);


    const getWidth = () => {
        const newWidth = ref.current.clientWidth;
        setContWidth(newWidth);
        if (newWidth < 768) {
            setDivider(1)
        } else {
            setDivider(3)
        }

    };

    const newsData = [{
        text: 'Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.',
        name: 'Ralph Edwards',
        position: 'Product Designer',
        time: '1'
    }, {
        text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        name: 'Hellen Jummy',
        position: 'Team Lead',
        time: '2'
    }, {
        text: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
        name: 'Hellana John',
        position: 'Co-founder',
        time: '3'
    }, {
        text: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
        name: 'David Oshodi',
        position: 'Manager',
        time: '4'
    },
        , {
        text: 'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
        name: 'Charolette Hanlin',
        position: 'CEO',
        time: '5'
    }]


    useEffect(() => {
        getWidth();
        window.addEventListener("load", getWidth);
        window.addEventListener("resize", getWidth);
        return () => {
            window.removeEventListener("load", getWidth);
            window.removeEventListener("resize", getWidth);
        };

    }, []);

    const scroll = (offset) => {
        ref.current.scrollLeft += offset;
    }

    return (
        <section className='bg-white md:bg-[#FFFBEB]'>
            <div className="pb-10">
                <div className='container'>
                    <div className='flex justify-center md:justify-between items-center  pt-20 pb-10'>
                        <h2 className='text-black text-[32px] leading-[35px] md:text-[56px] md:leading-[62px] font-bold md:font-extrabold'>Because they love us</h2>
                        <div className='hidden md:flex'>
                            <button onClick={() => scroll(-contWidth / divider - 20)} className='p-3 rounded-full border-2 border-[#78350F] mr-6' ><img src={leftButton} alt="" /></button>
                            <button onClick={() => scroll(contWidth / divider + 20)} className='p-3 rounded-full border-2 border-[#78350F]' ><img src={rightButton} alt="" /></button>
                        </div>
                    </div>
                </div>
                <div ref={ref} className='flex overflow-x-scroll gap-x-5 scroll-smooth no-scrollbar pt-10 bg-[#FDE68A]'>
                    {newsData.map((item) => (
                        <div key={item.time}>
                            <div style={{ width: (contWidth - 40) / divider }} className="p-8 bg-white rounded-[20px] flex flex-col h-full shadow-card">
                                <img className="py-4" src={logo} alt="" />
                                <p className="text-base md:text-2xl">
                                    {item.text}
                                </p>
                                <div className="flex items-center mt-4">
                                    <img className="mr-4" src={userThumb} alt="" />
                                    <div>
                                        <h3 className="text-[18px] font-bold">{item.name}</h3>
                                        <p className="text-base">{item.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Customers
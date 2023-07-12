import React from 'react'
import home1 from '../assets/home/home1.jpg'
import CountUp from 'react-countup';

const CounterUp = () => {
  return <>
  
  <div className='h-[90vh] md:h-[40vh] w-full mt-20'>
    <div style={{backgroundImage:`url(${home1})`, backgroundSize: 'cover'}}  className='h-full w-full bg-conver bg-center '>
        {/* <img src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/10/kids_3-410x260.jpg" alt="/" className=' object-cover h-full w-full'/> */}
    <div className='bg-secondary h-full w-full opacity-90 pt-20 md:flex justify-around items-center'>
        <div className='pl-5 mt-7'>
            <div className='flex'>
                <dvi>
                    <CountUp start={0} end={50} duration={20} className='text-white text-7xl'/>
                    {/* <h1 className='text-7xl text-white'>50</h1> */}
                </dvi>
                <div className=' pl-4 uppercase text-white text-xl flex justify-center items-center'>
                    Professional instructor
                </div>
            </div>
            <div className='h-[2px] w-20 mt-5 bg-yellow'></div>
        </div>

        <div className='pl-5 mt-7'>
            <div className='flex'>
                <dvi>
                <CountUp start={0} end={87} duration={20} className='text-white text-7xl'/>
                    {/* <h1 className='text-7xl text-white'>87</h1> */}
                </dvi>
                <div className=' pl-4 uppercase text-white text-xl flex justify-center items-center'>
                NEW COURSES EVERY YEAR
                </div>
            </div>
            <div className='h-[2px] w-20 mt-5 bg-yellow'></div>
        </div>

        <div className='pl-5 mt-7'>
            <div className='flex'>
                <dvi>
                <CountUp start={0} end={25} duration={20} className='text-white text-7xl'/>
                    {/* <h1 className='text-7xl text-white'>25</h1> */}
                </dvi>
                <div className=' pl-4 uppercase text-white text-xl flex justify-center items-center'>
                LIVE SESSIONS EVERY MONTH
                </div>
            </div>
            <div className='h-[2px] w-20 mt-5 bg-yellow'></div>
        </div>

        <div className='pl-5 mt-7'>
            <div className='flex'>
                <dvi>
                <CountUp start={0} end={277} duration={20} className='text-white text-7xl'/>
                    {/* <h1 className='text-7xl text-white'>277</h1> */}
                </dvi>
                <div className=' pl-4 uppercase text-white text-xl flex justify-center items-center'>
                REGISTERED STUDENTS
                </div>
            </div>
            <div className='h-[2px] w-28 mt-5 bg-yellow'></div>
        </div>
    </div>
    </div>
  </div>
  
  </>
}

export default CounterUp
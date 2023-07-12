import React from 'react'

const Event = () => {
  return <>
  
  <div>
    <h1 className='text-3xl py-12 px-16 text-secondary font-semibold font-poppins'>Upcomming Events</h1>
    <div className='flex pl-14 shadow-md'>
      <div className='h-[12rem]'>
      <div className='h-[6rem] w-[7rem] bg-darkYellow relative'>
        <div className='h-[15px] absolute left-4 top-2 w-[15px] rounded-full bg-secondary'></div>
        <div className='h-[15px] absolute right-4 top-2 w-[15px] rounded-full bg-secondary'></div>
        <div className='flex flex-col justify-center items-center pt-4'>
        <h1 className='font-bold text-secondary text-2xl'>20</h1>
        <h2 className='font-semibold text-secondary text-lx'>Oct</h2>
        </div>
        <div className=' mt-3 flex justify-center items-center font-bold text-white h-[3rem] w-full bg-secondary'>
          <h1>2026</h1>
        </div>
        </div>
      </div>
        <div className='pl-5'>
            <h1 className='text-xl text-secondary font-poppins1 font-semibold cursor-pointer hover:text-yellow transition duration-700 ease-in-out'>SAT Implementation Workshops November 2026</h1>
            <p className='pt-2 font-poppins text-[.9rem] font-medium text-[#555]' >Bimply dummy text of the printing and typesetting istryrem Ipsum has been the industry’s
               standard dummy text ever since the 1500s, when an unknown printer.when an unknown printer
                took a galley of type and scrambled…</p>
            <h1 className='text[1rem] mt-3 text-secondary font-bold '>11:00-13:30</h1>
        </div>
    </div>

    <div className='flex pl-14 mt-9 md:mt-20 shadow-md'>
      <div className='h-[12rem]'>
      <div className='h-[6rem] w-[7rem] bg-darkYellow relative'>
        <div className='h-[15px] absolute left-4 top-2 w-[15px] rounded-full bg-secondary'></div>
        <div className='h-[15px] absolute right-4 top-2 w-[15px] rounded-full bg-secondary'></div>
        <div className='flex flex-col justify-center items-center pt-4'>
        <h1 className='font-bold text-secondary text-2xl'>20</h1>
        <h2 className='font-semibold text-secondary text-lx'>Oct</h2>
        </div>
        <div className=' mt-3 flex justify-center items-center font-bold text-white h-[3rem] w-full bg-secondary'>
          <h1>2026</h1>
        </div>
        </div>
      </div>
        <div className='pl-5'>
            <h1 className='text-xl text-secondary font-poppins1 font-semibold cursor-pointer hover:text-yellow transition duration-700 ease-in-out'>SAT Implementation Workshops November 2026</h1>
            <p className='pt-2 font-poppins text-[.9rem] font-medium text-[#555]' >Bimply dummy text of the printing and typesetting istryrem Ipsum has been the industry’s
               standard dummy text ever since the 1500s, when an unknown printer.when an unknown printer
                took a galley of type and scrambled…</p>
            <h1 className='text[1rem] mt-3 text-secondary font-bold '>11:00-13:30</h1>
        </div>
    </div>

    <button className='uppercase bg-secondary px-8 text-2xl font-semibold py-3 text-white mt-14 ml-[40%]'>View All</button>

  </div>
  
  </>
}

export default Event
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import video from '../assets/home/video.jpg'
import { BsFillPlayFill } from 'react-icons/bs'

const Video = () => {
  return <>
  
  <div className='w-full h-[50vh] md:h-[100vh]'>
    <div className='relative h-full'>
        <img src={video} className='object-cover h-full w-full'/> 
        <div className='absolute flex flex-col justify-center items-center bg-primary opacity-75 top-0 left-0 w-full h-full'>
            <div className=' z-10 flex flex-col justify-center items-center'>
            <h1 className='text-white text-3xl md:text-4xl font-semibold'>Watch Campus Life Video Tour</h1>
            <p className='text-white px-12 py-3'>Lorem ipsum text of the printing and typesetting industryorem
                ever since industry standard dum an unknowramble</p>
            <div className=' group h-[80px] border-4 w-[80px] border-white rounded-[50%] mt-4 cursor-pointer hover:border-yellow flex justify-center items-center'>
                <BsFillPlayFill size={50} className='text-yellow group-hover:text-white'/>
            </div>
            </div>
        </div>
        {/* <div className='absolute top-0 left-0 h-full w-full'>
            <ReactPlayer src='https://youtu.be/cLRztK1zE6s'/>
        </div> */}
    </div>
  </div>
  
  </>
}

export default Video
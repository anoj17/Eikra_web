import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import video from '../assets/home/video.jpg'
import { BsFillPlayFill } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'

const Video = () => {
    const [showsVideo, setShowsVideo] = useState(false)

    const showVideo = () =>{
        setShowsVideo(!showsVideo)
    }

    const closeVideo = () =>{
        setShowsVideo(false)
    }

  return <>
  
  <div className='w-full h-[50vh] md:h-[80vh]'>
    <div className='relative h-full'>
        <img src={video} className='object-cover h-full w-full'/> 
        <div className='absolute flex flex-col justify-center items-center bg-primary opacity-75 top-0 left-0 w-full h-full'>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white text-3xl md:text-4xl font-semibold'>Watch Campus Life Video Tour</h1>
            <p className='text-white px-12 py-3'>Lorem ipsum text of the printing and typesetting industryorem
                ever since industry standard dum an unknowramble</p>
            <div onClick={showVideo} className=' group h-[80px] border-4 w-[80px] border-white rounded-[50%] mt-4 cursor-pointer hover:border-yellow flex justify-center items-center'>
                <BsFillPlayFill size={50} className='text-yellow group-hover:text-white'/>
            </div>
            </div>
        </div>

            {
                showsVideo ? <div className=' absolute top-0 left-0 h-full md:left-[20%] z-[9999] pl-5 md:h-[70vh] md:w-[60%] w-full md:pt-5'>
                <button onClick={closeVideo} className='transition duration-1000 ease-in text-white bg-primary'><ImCross size={15}/></button>
                <ReactPlayer url='https://youtu.be/1iIZeIy7TqM' controls={true} style={{backgroundSize:'cover'}} min-height='340px' max-width='445px'/>
            </div> : ""
            }
        
    </div>
  </div>
  
  </>
}

export default Video
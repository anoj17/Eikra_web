import React from 'react'
import { IoCall } from 'react-icons/io5';
import { GrMail } from 'react-icons/gr'
import { FaGraduationCap } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineGooglePlus, AiFillYoutube } from 'react-icons/ai'
import { BiWifi2 } from 'react-icons/bi'

const Topbar = () => {
  return <>
  
  <div className='p-2 bg-secondary justify-between px-10 items-center hidden lg:flex'>
    <div className='text-white flex'>
    <div className='flex justify-center items-center'>
        <IoCall size={20} className='text-yellow '/>
        <p className='hover:underline pl-2 cursor-pointer'>+9816146926</p>
    </div>
    <div className='pl-5 flex justify-center items-center'>
        <div>
            <GrMail size={20} className='text-yellow '/>
        </div>
        <p className='hover:underline pl-2 cursor-pointer'>info@gmail.com</p>
    </div>
    </div>

    <div className='flex'>
     <div className='text-yellow w-11 bg-black flex items-center justify-center rounded-[50%]'>
        <FaGraduationCap size={30} className=' -rotate-12'/>
        </div>
        <h1 className='text-white pl-3 font-bold text-[2rem] font-poppins uppercase'>Eikre</h1>
     </div>

     <div className='text-yellow flex justify-between items-center'>
        <div className='px-1'>
        <GrFacebookOption size={25} />
        </div>
            
        <div className='px-1'>
        <BsTwitter size={20}/>
        </div>

        <div className='px-1'>  
        <AiOutlineGooglePlus size={25} />
        </div>

        <div className='px-1'>  
        <AiFillYoutube size={25}/>
        </div>

        <div className='px-1'>  
        <BiWifi2 size={30} className=' rotate-45'/>
        </div>
     </div>
  </div>
  
  </>
}

export default Topbar
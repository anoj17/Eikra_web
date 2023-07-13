import React from 'react'
import { AiOutlineUser,AiOutlineStar,AiFillHeart } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { PiUsersThreeFill } from 'react-icons/pi'
import { TbBrandTorchain } from 'react-icons/tb'

const Products = (props) => {
  return <>
  
  <div className=' px-2 mt-5 shadow-md'>
    <div className='relative group overflow-hidden'>
        <img src={props.img} className='object-cover'/>
        <div className='flex justify-center items-center absolute h-[100%] w-[100%] group-hover:animate-to-rights group-hover:left-0 bg-primary opacity-75 top-0 left-[-100%]'>
          <div className='group-hover:block p-[8.5px] h-[40px] w-[40px] border border-yellow rounded-[50%]'>
             <TbBrandTorchain size={20} className='text-white'/>
          </div>
        </div>
    </div>
    <div className='overflow-hidden'>
    <h1 className='text-[1.3rem] cursor-pointer transition duration-700 pb-2 hover:text-yellow text-secondary font-bold'>{props.text}</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione, accusantium maxime quisquam excepturi odit  esse officiis impedit.</p>
    </div>
    <div className='flex justify-between items-center py-4 px-3 mt-5 shadow-md'>
      <div className='flex justify-center items-center'>
        <FaUser size={35} className='bg-[#666] text-white px-1 py-[1px] rounded-[50%]'/>
      
      <div className='flex text-yellow pl-4'>
        <AiOutlineStar size={20}/>
        <AiOutlineStar size={20}/>
        <AiOutlineStar size={20}/>
        <AiOutlineStar size={20}/>
        <AiOutlineStar size={20}/>  
      </div>
      </div>
      <div className=' text-[#666] flex'>
        <AiFillHeart size={20} />
        <PiUsersThreeFill size={20} />
      </div>
    </div>
 </div>
  
  </>
}

export default Products
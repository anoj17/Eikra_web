import React, { useState } from 'react'
import { FaGraduationCap } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { BsFillCartDashFill } from 'react-icons/bs'
import { AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { FaCaretDown } from 'react-icons/fa';

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  const changeMenu = () =>{
    setMenu(!menu)
  }

  return <>

    <div className='bg-white py-2'>
      <nav className='flex justify-between items-center w-[95%] m-auto overflow-y-hidden text-white'>

        <div className='flex justify-between items-center'>
          <div className='flex'>
          <div className='text-yellow w-11 bg-black flex items-center justify-center rounded-[50%]'>
            <FaGraduationCap size={30} className=' -rotate-12'/>
          </div>
          <h1 className='text-secondary pl-3 font-bold text-[2rem] font-poppins uppercase'>Eikre</h1>
          </div>
        </div>

        <div className='justify-center py-5 items-center hidden md:flex md:pl-[10px] md:pr-[10px]'>
          <ul className='flex justify-center items-center gap-6 lg:gap-9'>
            
            <div className='flex text-secondary hover:text-yellow'>
            <li className='group cursor-pointer uppercase font-bold hover:border-yellow py-2'>Category
              <div className='absolute overflow-hidden hidden group-hover:block  text-secondary z-[999999]'>
                <ul className='flex-col bg-secondary p-2 mt-9 items-start text-white justify-start'>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Kids</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Development</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Programming</li>
                <li className='py-3 px-16 hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Technology</li>
                </ul>
              </div>
            </li>
            <li className='flex justify-center items-center'><FaCaretDown size={20}/></li>
            </div>
           
            <div className='flex hover:text-yellow text-secondary '>
            <li className='group cursor-pointer font-bold py-2'>Home
              <div className='absolute overflow-hidden hidden group-hover:block z-[999999]'>
                <div className='flex justify-around items-center bg-secondary p-2 mt-9'>
                <ul className='flex-col items-start text-white justify-start'>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Home 1</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Home 2</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Home 3</li>
                <li className='py-3 px-16 hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Home 4</li>
                </ul>
                <ul className='flex-col items-start text-white justify-start'>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Home 1(ONEPAGE)</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Home 2(ONEPAGE)</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Home 3(ONEPAGE)</li>
                <li className='py-3 px-16 hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Home 4(ONEPAGE)</li>
                </ul>
              </div>
              </div>
            </li>
            <li className='flex justify-center items-center pl-1'><FaCaretDown size={20}/></li>
            </div>

            <div className='flex hover:text-yellow  text-secondary'>
            <li className='group cursor-pointer py-2 font-bold overflow-hidden'>Page
              <div className='absolute overflow-hidden text-white hidden group-hover:block z-[999999] '>
                <div className='flex justify-around items-center bg-secondary p-2 mt-9'>
                <ul className='flex-col items-start text-white justify-start'>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>ABOUTUS 1</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>ABOUTUS 2</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>ABOUTUS 3</li>
                <li className='py-3 px-16 hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>ABOUTUS 4</li>
                </ul>
                <ul className='flex-col items-start text-white justify-start'>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>EVENT 1</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>EVENT 2</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>EVENT 3</li>
                <li className='py-3 px-16 hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>EVENT 5</li>
                </ul>
                <ul className='flex-col items-start text-white justify-start'>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>INSTRUCTION 1</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>INSTRUCTION 2</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>INSTRUCTION 3</li>
                <li className='py-3 px-16 hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>INSTRUCTION 5</li>
                </ul>
              </div>
              </div>
            </li>
            <li className='flex justify-center items-center pl-1'><FaCaretDown size={20}/></li>
            </div>
           
            <div className='flex hover:text-yellow text-secondary'>
            <li className='group cursor-pointer py-2 font-bold overflow-hidden'>Category
              <div className='absolute overflow-hidden text-white hidden group-hover:block z-[999999] '>
                <ul className='flex-col bg-secondary p-2 mt-9 items-start text-white justify-start'>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>INFO INBOX</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>COURSE</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>INSTRUCTION</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>EVENT</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>EVENT COUNDOWN</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>TABLE</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>PRICING TABLE</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>POST</li>
                <li className='py-3 px-16 hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>COUNTER</li>
                </ul>
              </div>
            </li>
            <li className='flex justify-center items-center pl-1'><FaCaretDown size={20}/></li>
            </div>

            <div className='flex hover:text-yellow  text-secondary'>
            <li className='group cursor-pointer py-2 font-bold overflow-hidden'>Course
              <div className='absolute overflow-hidden text-white hidden group-hover:block z-[999999] '>
                <ul className='flex-col bg-secondary p-2 mt-9 items-start text-white justify-start'>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>COURCSE</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>SINGLE COURSE</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Programming</li>
                <li className='py-3 px-16 hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>Technology</li>
                </ul>
              </div>
            </li>
            <li className='flex justify-center items-center pl-1'><FaCaretDown size={20}/></li>
            </div>

            <div className='flex hover:text-yellow text-secondary'>
            <li className='group cursor-pointer py-2 font-bold  overflow-hidden'>Reasearch
              <div className='absolute overflow-hidden text-white transition hidden group-hover:block z-[999999] '>
                <ul className='flex-col bg-secondary p-2 mt-9 items-start text-white justify-start'>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>REASEARCH 1</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>REASEARCH 2</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>REASEARCH 3</li>
                <li className='py-3 px-16 hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>COURSE REASEARCH</li>
                </ul>
              </div>
            </li>
            <li className='flex justify-center items-center pl-1'><FaCaretDown size={20}/></li>
            </div>
            
            <div className='flex hover:text-yellow text-secondary'>
            <li className='group cursor-pointer py-2 font-bold overflow-hidden'>News
              <div className='absolute overflow-hidden text-white hidden group-hover:block z-[999999]  '>
                <ul className='flex-col bg-secondary p-2 mt-9 items-start text-white justify-start'>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>NEWS 1</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>NEWS 2</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>NEWS 3</li>
                <li className='py-3 px-16 hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>NEWS DETAILS</li>
                </ul>
              </div>
            </li>
            <li className='flex justify-center items-center pl-1'><FaCaretDown size={20}/></li>
            </div>
           
           <div className='flex hover:text-yellow text-secondary'>
            <li className='group cursor-pointer py-2 font-bold overflow-hidden'>Contact
              <div className='absolute overflow-hidden text-white hidden group-hover:block z-[999999] '>
                <ul className='flex-col bg-secondary p-2 mt-9 items-start text-white justify-start'>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>CONTACT 1</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>CONTACT 2</li>
                <li className='py-3 px-16 border-b-[.5px] border-[#204075] hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>CONTACT 3</li>
                <li className='py-3 px-16 hover:bg-[#204075] w-full cursor-pointer hover:text-yellow font-medium'>CONTACT DETAILS</li>
                </ul>
              </div>
            </li>
            <li className='flex justify-center items-center pl-1'><FaCaretDown size={20}/></li>
            </div>
           
          </ul>

        </div>

        <div className='flex justify-around items-center text-secondary'>
          <div>
            <BiSearch size={35} className='hover:text-yellow cursor-pointer'/>
          </div>
          <div className='h-[20px] w-[2px] bg-black ml-2'></div>
          <div className='pl-3'>
            <BsFillCartDashFill size={30} className='hover:text-yellow cursor-pointer'/>
          </div>

          <div className='pl-8 md:hidden' onClick={changeMenu}>
          {
            !menu ?  
            <AiOutlineMenu size={30} className='cursor-pointer hover:text-yellow'/>
            :
            <AiOutlineClose size={30} className='cursor-pointer hover:text-yellow'/>
          }
          </div>
       
        </div>
      </nav>
      {
        menu ? <div className='lg:hidden absolute pt-5 bg-primary flex-col items-center justify-center w-full'>
        <ul className='flex md:flex-row flex-col items-center justify-center gap-4'>
          <li className='cursor-pointer hover:text-yellow font-medium'>Category</li>
          <li className='cursor-pointer hover:text-yellow font-medium'>Home</li>
          <li className='cursor-pointer hover:text-yellow font-medium'>Page</li>
          <li className='cursor-pointer hover:text-yellow font-medium'>Elements</li>
          <li className='cursor-pointer hover:text-yellow font-medium'>Courses</li>
          <li className='cursor-pointer hover:text-yellow font-medium'>Reaserch</li>
          <li className='cursor-pointer hover:text-yellow font-medium'>News</li>
          <li className='cursor-pointer hover:text-yellow font-medium'>Contact</li>
        </ul>
      </div> : ''
      }

      
    </div>

  </>
}

export default Navbar
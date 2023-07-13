import React, { useState } from 'react';
import home1 from '../../assets/home/home1.jpg';
import home2 from '../../assets/home/home2.jpg';
import home3 from '../../assets/home/home3.jpg';
import home from '../../assets/home/home.webp';
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa';
import Button from '../../components/Button';
import MultiCarousel from '../../components/MultiCarousel';
import Video from '../../components/Video';
import SkilledInstructor from '../../components/SkilledInstructor';
import Post from '../../components/Post';
import Event from '../../components/Event';
import CounterUp from '../../components/CounterUp';
import StudentSay from '../../components/StudentSay';
import Education from '../../components/Education';
import { IoIosCall } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import { GrMail } from 'react-icons/gr'
import { GrFacebookOption } from 'react-icons/gr'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineGooglePlus, AiFillYoutube } from 'react-icons/ai'
import { BiWifi2 } from 'react-icons/bi'

const Home = () => {
  const [changeImage, setChangeImage] = useState(0)

  const slide =[
    {url:home1},
    {url:home2},
    {url:home3}
  ]

  const clickPrev = () =>{
    const currentIndex = changeImage === 0
    const newIndex = currentIndex ? slide.length - 1 : changeImage - 1
      setChangeImage(newIndex)
  }
  
  const clickFront = () =>{
    const lastIndex = changeImage === slide.length - 1
    const isLastIndex = lastIndex ? 0 : changeImage + 1
      setChangeImage(isLastIndex)
  }
 
  return (
    <>
      <section className='h-[90vh] w-full'>
        
        <div style={{backgroundImage:`url(${slide[changeImage].url})`, backgroundSize: 'cover'}} className='relative bg-no-repeats h-[35vh] md:h-[70vh] lg:h-[90vh] bg-center object-cover max-w-[100%]'>

        {/* <img src={home1} className='object-cover w-[100%] h-full mx-auto z-auto relative' alt="Home" /> */}
        <div className='flex justify-between items-center w-[94%] h-full'>
        <div onClick={clickPrev} className='text-[3rem] text-white pt-6 absolute left-4'>
            <BsChevronLeft className='cursor-pointer hover:text-yellow'/>
        </div>
            
        <div className='flex flex-col justify-center items-center md:items-start absolute left-7 right-5 px-10 md:left-16 md:text-left'>
          <div className='flex flex-col justify-center items-center animate-to-up'>
            <h1 className='text-white font-bold text-[1.8rem] md:text-[3.1rem] md:text-left'>Best Education WorldPres</h1>
            <h1 className='text-white font-bold text-[1.8rem] md:text-[3.1rem] md:text-left'>Theme for 2018</h1>
          </div>

          <div className=' animate-to-right pt-3 flex justify-center items-center md:text-[1.5rem] md:pt-7 md:pr-[8rem] text-[.8rem] px-4'>
          <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum facere animi repudiandae qui
            minima sequi, asperiores possimus
            repellat ducimus ab adipisci.</p>
          </div>
          <div className='pt-7 flex items-center justify-center animate-to-down'>
            <Button label='start a course'/>
          </div>
        </div> 
          
          <div className='text-[3rem] text-white pt-5 absolute right-4' onClick={clickFront}>
            <BsChevronRight className='cursor-pointer hover:text-yellow'/>
          </div>
      
        </div>
        <div className='grid md:grid-cols-3 md:absolute md:top-[77.5%] md:mx-6'>
          <div className='group md:bg-opacity-60 md:py-3 flex justify-around items-center py-8 px-2 bg-primary border border-yellow md:px-4 text-white'>
            <div>
            <h1 className='group-hover:text-yellow text-3xl font-semibold transition duration-1000 ease-in-out md:text-2xl'>Scholarship Facility</h1>
            <p className='text-1.2rem mt-4 text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
               <FaGraduationCap size={45} className='group-hover:scale-125 transition duration-1000 ease-in-out text-yellow'/>
            </div>

           <div className='group md:bg-opacity-60 md:border md:py-3 flex justify-around items-center py-8 px-2 bg-primary border border-yellow text-white md:px-4'>
            <div>
            <h1 className='group-hover:text-yellow text-3xl font-semibold transition duration-1000 ease-in-out md:text-2xl'>Scholarship Facility</h1>
            <p className='text-1.2rem mt-4 text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
               <FaGraduationCap size={45} className='group-hover:scale-125 transition duration-1000 ease-in-out text-yellow'/>
          </div>

          <div className='group md:bg-opacity-60 md:py-3 flex justify-around items-center py-8 px-2 bg-primary border border-yellow text-white md:px-4'>
            <div>
            <h1 className='group-hover:text-yellow text-3xl font-semibold transition duration-1000 ease-in-out md:text-2xl'>Scholarship Facility</h1>
            <p className='text-1.2rem mt-4 text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
               <FaGraduationCap size={45} className='group-hover:scale-125 transition duration-1000 ease-in-out text-yellow'/>
          </div>
        </div>

        </div>

      </section>

        <div className='flex h-[80vh]'>
          <div className='pl-9 py-16 mr-5'>
            <h1 className='text-secondary text-5xl font-bold'>Welcome To Our Campus</h1>
            <h3 className='mt-8 text-[#444] text-1rem font-bold'>Tmply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry’s standard.</h3>
            <p className='mt-3 text-[1rem] text-[#555]'>Smply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy 
              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
               book.Smply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s when an unknown 
               printerit to make a type specimen book.</p>

               <Button label='Read more' className='mt-9'/>
          </div>
          <div className=''>
            <img src={home} alt="home" className='object-cover h-[80vh] w-[2000px]'/>
          </div>
        </div>

        <div className='h-[90vh]'>
          <MultiCarousel/>
        </div>

      <div className=''>
        <Video/>
      </div>

      <div>
      <SkilledInstructor/>
      </div>

      <div className='md:flex md:justify-between bg-#[666]'>
        <div>
          <Post/>
        </div>
        <div className='ml-12'>
          <Event/>
        </div>
      </div>

      <div>
        <CounterUp/>
      </div>

      <div>
        <StudentSay/>
      </div>
          
      <div className='mt-9 px-20 py-24 md:py-10 h-[75vh] md:flex justify-center items-center bg-darkYellow'>
      
      <div className='md:mt-10 md:flex'>
        <div>
            <img src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/10/all.jpg" alt="/img" />
        </div>
        <div className='flex flex-col bg-secondary py-10 justify-center items-center'>
         
          <h1 className='text-3xl font-semibold md:text-3xl md:pl-14 text-white'>Join 29,12,093 Students</h1>
            
          <button className='bg-darkYellow uppercase font-medium mt-7 py-2 px-4'>Join Now</button>
        </div>
        </div>
      </div>

      <div className='px-5 h-[13rem] w-full'>
        <Education/>
      </div>

    <div className='bg-secondary py-5 md:py-8 mt-5 w-full flex flex-col'>
      <div className='w-full px-10 md:flex justify-around md:px-16'>
        <div className='text-white mt-10'>
          <h1 className='text-xl font-semibold'>Company</h1>
          <div className='h-[5px] rounded-lg mt-3 w-[3rem] bg-darkYellow'></div>
          <h2 className='font-medium text-[.9rem] mt-5'>About</h2>
          <h2 className='font-medium text-[.9rem] mt-5'>Pricing</h2>
          <h2 className='font-medium text-[.9rem] mt-5'>News</h2>
          <h2 className='font-medium text-[.9rem] mt-5'>Career</h2>
          <h2 className='font-medium text-[.9rem] mt-5'>Contact</h2>
          <h2 className='font-medium text-[.9rem] mt-5'>Events</h2>
        </div>

        <div className='text-white mt-10'>
          <h1 className='text-xl font-semibold'>Explore Courses</h1>
          <div className='h-[5px] rounded-lg mt-3 w-[3rem] bg-darkYellow'></div>
          <h2 className='font-medium text-[.9rem] mt-5'>Courses</h2>
          <h2 className='font-medium text-[.9rem] mt-5'>Course Two</h2>
          <h2 className='font-medium text-[.9rem] mt-5'>Single course</h2>
          <h2 className='font-medium text-[.9rem] mt-5'>Profile</h2>
          <h2 className='font-medium text-[.9rem] mt-5'>Login/Register</h2>
          <h2 className='font-medium text-[.9rem] mt-5'>My account</h2>
        </div>

        <div className='mt-10'>
          <h1 className='text-xl text-white font-semibold'>Contact</h1>
          <div className='h-[5px] rounded-lg mt-3 w-[3rem] bg-darkYellow'></div>

          <div className='mt-6 py-2 border-b border-white'>
            <div className='text-white flex'>
              <MdLocationOn size={20}/>
              <h1 className='font-medium text-[.9rem] pl-2'>Location :</h1>
            </div>
            <h1 className='font-medium text-[1rem] mt-2 text-white'>59 Street, NewYork City</h1>
          </div>

          <div className='mt-6 py-2 border-b border-white'>
            <div className='text-white flex'>
              <IoIosCall size={20}/>
              <h1 className='font-medium text-[.9rem] pl-2'>Call Us :</h1>
            </div>
            <h1 className='font-medium text-[1rem] mt-2 text-white'>59 Street, NewYork City</h1>
          </div>

          <div className='mt-6 py-2'>
            <div className='text-white flex'>
              <GrMail size={20}/>
              <h1 className='font-medium text-[.9rem] pl-2'>Mail Us :</h1>
            </div>
            <h1 className='font-medium text-[1rem] mt-2 text-white'>59 Street, NewYork City</h1>
          </div>
        </div>

        <div className='mt-10 ml-8 '>
          <h1 className='text-2xl text-white font-semibold'>NewsLetter</h1>
          <div className='h-[5px] rounded-lg mt-3 w-[3rem] bg-darkYellow'></div>
          <h1 className='font-medium text-[1.1rem] text-white md:mt-8 md:text-[.9rem] mt-12'>Fusce varittus, dolor tempor interdum<br/> tristiquei bibendum</h1>
          <div className='md:flex flex-col'>
          <input placeholder='E-mail' className='text-white hover:border-darkYellow transition duration-300 ease-in-out text-[1rem] px-[12rem] mt-7 border md:px-2 border-[#777] py-3 md:py-2 bg-secondary pl-4'/>
          <button className='bg-darkYellow md:w-[9rem] hover:brightness-75 transition duration-400 ease-in-out md:text-[.9rem] mt-2 text-[1.1rem] rounded-md text-[#333] font-bold py-3 px-5'>Subscribe Now</button>
          </div>
        </div>
      </div>

    <div className='flex flex-col justify-center items-center border border-[#999] md:border-0 md:mt-[4rem] mt-[6rem] py-6'>
      <div className='h-[1px] absolute w-full bg-[#777]'></div>
      <div className='text-white relative top-0 flex justify-between items-center '>
        <div className='px-1 rounded-full border bg-secondary border-[#777] py-1'>
        <GrFacebookOption size={25} />
        </div>
            
        <div className='px-1 mx-2 md:mx-5 rounded-full border bg-secondary border-[#777] py-1'>
        <BsTwitter size={25}/>
        </div>

        <div className='px-1 rounded-full border bg-secondary border-[#777] py-1'>  
        <AiOutlineGooglePlus size={25} />
        </div>

        <div className='px-1 mx-2 md:mx-5 rounded-full border bg-secondary border-[#777] py-1'>  
        <AiFillYoutube size={25}/>
        </div>

        <div className='px-1 rounded-full border bg-secondary border-[#777] py-1'>  
        <BiWifi2 size={25} className=' rotate-45'/>
        </div>
     </div>
     </div>

     <div className=' flex flex-col justify-center items-center py-2 md:py-0 md:flex-row md:justify-between md:px-28 md:items-center'>
      <div className='flex'>
      <div className='text-secondary py-2 px-2 bg-yellow flex items-center justify-center rounded-[50%]'>
        <FaGraduationCap size={20} className=' -rotate-12'/>
      </div>
        <h1 className='text-white ml-1 font-medium text-2xl uppercase'>Eikra</h1>
      </div>
     <div className='text-[#999] text-[.8rem] font-medium mt-4'>
      &copy; Copyright Eikra {new Date().getFullYear()}. Designed and Developed by RadiusTheme
     </div>
     </div>

    </div>
    </>
  );
}

export default Home;

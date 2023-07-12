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
        <div className='grid md:grid-cols-3 md:absolute md:top-[79.5%] md:mx-6'>
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
          
      <div className='mt-9 px-9 py-24 md:py-20 bg-darkYellow h-[77vh] md:flex'>

        <div>
            <img src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/10/all.jpg" alt="/img" />
        </div>
        <div className='flex flex-col bg-secondary py-12 md-py-40 justify-center items-center'>
          <h1 className='text-3xl font-semibold md:text-3xl flex justify-center items-center text-white'>Join 29,12,093 Students</h1>
          <button className='bg-darkYellow uppercase font-medium mt-5 py-2 px-4'>Join Now</button>
        </div>

      </div>
    </>
  );
}

export default Home;

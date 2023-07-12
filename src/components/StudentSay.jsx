import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Products from './Products';
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io'

const StudentSay = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
       
      };

      const Arrow = ({ onClick, label, className }) => (
        <button
          onClick={onClick} className={`${className}`}
          style={{
            // Your custom styles here
            backgroundColor: 'grey',
            color: 'white',
            border: 'none',
            borderRadius: '30%',
            width: '20px',
            height: '7px',
            cursor: 'pointer',
          }}
        >
          {label}
        </button>
      );

      const studentSay = [
        {
          heading : 'Martin Brain',
          skills : 'UI Designer',
          para : 'Bimply dummy text of the printing and typesetting istryrem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.when an unknown printer took a galley of type and scrambled…',
          img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/355/d33c66ce1b09b86165480bc5d19f6aee.jpeg'
        },
        {
          heading : 'David Fahim',
          skills : 'Web Developer',
          para : 'Bimply dummy text of the printing and typesetting istryrem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.when an unknown printer took a galley of type and scrambled…',
          img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/354/1f58ef405602c05780309f81f3133dfc.jpeg'
        },
        {
          heading : 'David Lee',
          skills : 'Web Developer',
          para : 'Bimply dummy text of the printing and typesetting istryrem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.when an unknown printer took a galley of type and scrambled…',
          img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/353/5c1b826d17206cfcbf53ac41f0dc8dc7.jpeg'
        }
        
      ]

  return <>
  
  <div className='px-7 mt-10 py-9'>
    {/* <div className='bg-black'> */}
    <span className='text-secondary pl-[7rem] md:pl-[30rem] md:text-4xl text-2xl font-bold absolute left-4'>What Our Students Says
    </span>
  <Carousel className='relative py-16' responsive={responsive} infinite={true} transitionDuration={800} customTransition="all 1" autoPlaySpeed={1000} arrows={true} customRightArrow={<Arrow className='absolute text-white right-[45%] md:right-[48%] bottom-2'/>} customLeftArrow={<Arrow className='absolute text-white right-[50%] bottom-2'/>}>
    {
         studentSay.map((item)=>(
         <div className='mt-16 pl-4'>
            <div>
                <h1 className='text-secondary font-bold text-2xl'>{item.heading}</h1>
                <h1 className='font-semibold text-[#555] mt-2'>{item.skills}</h1>
            </div>

            <div className='flex py-5 px-5 bg-lightWhite px- mt-12 relative'>
                <p>{item.para}</p>
                <div className='h-[7rem] w-[20rem] border-8 ml-3 border-white mt-[-60px]'>
                <img src={item.img} alt='/img' className='h-full w-full object-cover'/>
                </div>
            </div>
         </div>
        
          ))
    }
 </Carousel>

     {/* </div> */}
  </div>
  
  </>
}

export default StudentSay
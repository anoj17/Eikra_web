import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Products from './Products';
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io'

const SkilledInstructor = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
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
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            // borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
          }}
        >
          {label}
        </button>
      );

      const skill = [
        {
          heading : 'Daziy Miller',
          skills : 'php expert',
          img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/357/c1886f3710b06e187044a39689872fae.jpeg'
        },
        {
          heading : 'Rosy Janner',
          skills : 'WordPress Ninja',
          img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/356/cd35d7ff8516eadf2078ad687f305ae1.jpeg'
        },
        {
          heading : 'David Lee',
          skills : 'Web Developer',
          img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/355/d33c66ce1b09b86165480bc5d19f6aee.jpeg'
        },
        {
          heading : 'Mike Hussy',
          skills : 'android Programmer',
          img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/354/1f58ef405602c05780309f81f3133dfc.jpeg'
        },
        {
          heading : 'Tom Steven',
          skills : 'Data Scientist',
          img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/353/5c1b826d17206cfcbf53ac41f0dc8dc7.jpeg'
        },
        
      ]

  return <>
  
  <div className='px-7 mt-10 py-9'>
    {/* <div className='bg-black'> */}
    <span className='text-secondary pl-4 text-4xl font-bold absolute left-4'>Our Skill Instructors
    </span>
  <Carousel className='relative pt-10' responsive={responsive} infinite={true} transitionDuration={800} customTransition="all 1" autoPlaySpeed={1000} arrows={true} customRightArrow={<Arrow label={<IoIosArrowForward size={30}/>} className='absolute text-white right-4 top-3'/>} customLeftArrow={<Arrow label={<IoIosArrowBack size={30}/>} className='absolute text-white right-14 top-3'/>}>
    {
         skill.map((item)=>(
          <div className=' px-3 mt-5 shadow-lg'>
          <div className='relative group overflow-hidden h-full w-full cursor-pointer'>
              <img src={item.img} className='object-cover h-full w-full hover:scale-125 transition duration-1000 ease-in-out'/>
          </div>
          <div className='overflow-hidden'>
          <h1 className='text-[1.3rem] cursor-pointer transition duration-700 hover:text-yellow text-secondary font-bold'>{item.heading}</h1>
          <h2 className='text-[#555] font-semibold'>{item.skills}</h2>
          </div>
          <div className='w-[60px] h-1 bg-yellow mt-4'>
            
          </div>
         
      </div>
        
          ))
    }
 </Carousel>

     {/* </div> */}
  </div>
  
  </>
}

export default SkilledInstructor
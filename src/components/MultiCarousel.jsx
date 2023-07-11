import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Products from './Products';
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io'

const MultiCarousel = () => {

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

      const product = [
        {
            text: 'Learn PHP Programming from Scratch',
            img: 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/4-410x260.jpg'
        },
        {
            text : 'Learning Python for Data Analysis and Visualization',
            img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/6-410x260.jpg'
        },
        {
            text : 'Built a full web chat app from scratch',
            img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/15-410x260.jpg'
        },
        {
            text : 'Master MicroServices with spring Boot and cloud',
            img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/13-410x260.jpg'
        },
        {
            text : 'The complete javascript course for beginners',
            img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/12-410x260.jpg'
        },
        {
            text : 'The complete javascript course for beginners',
            img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/12-410x260.jpg'
        },
      ];
  return <>
  
  <div className='px-7 mt-10 py-9'>
    {/* <div className='bg-black'> */}
    <span className='text-secondary pl-4 text-4xl font-bold absolute left-4'>Featured courses
    </span>
  <Carousel className='relative pt-10' responsive={responsive} infinite={true} transitionDuration={500} customTransition="all .5" autoPlaySpeed={1000} arrows={true} customRightArrow={<Arrow label={<IoIosArrowForward size={30}/>} className='absolute text-white right-2 top-3'/>} customLeftArrow={<Arrow label={<IoIosArrowBack size={30}/>} className='absolute text-white right-11 top-3'/>}>
    {
         product.map((item)=>(
            <Products text={item.text} img={item.img}/>
          ))
    }
 </Carousel>

     {/* </div> */}
  </div>
  
  </>
}

export default MultiCarousel
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Education = () => {

    const education = [
        {
          img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/3-1.jpg'
        },
        {
          img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/4-1.jpg'
        },
        {
          img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/1-2.jpg'
        },
        {
          img : 'https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/2-1.jpg'
        }
      ]
    
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
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
  return <>

    <div className='px-2 mt-10 py-9'>
        <Carousel  responsive={responsive} infinite={true} swipeable={true}  transitionDuration={800} autoPlaySpeed={1000} >
          {
            education.map((item)=>(
              <div>
                <img src={item.img} alt="/img" className='object-cover' />
              </div>
            ))
          }
        </Carousel>
      </div>

  </>
}

export default Education
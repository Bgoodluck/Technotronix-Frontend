import React from 'react'
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { carousel } from '../data/EcomData';
import { useContext } from 'react';
import EcomContext from '../context/EcomContext';


function Carousel() {
  // const {slide} = useContext(EcomContext)

  return (
    <div>
        <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

            {carousel.map((item)=>(
                
            <TECarouselItem
            itemID={item.id}
            key={item.id}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={item.img}
              className="block w-full lg:h-[95vh]"
              alt="..."
            />
            </TECarouselItem>
            ))}   
          
        </div>
      </TECarousel>
    </div>
  )
}

export default Carousel
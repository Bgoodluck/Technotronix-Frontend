import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import moto from '../assets/car1.mp4'
import moto2 from '../assets/car2.mp4'
import moto3 from '../assets/car3.mp4'
import moto4 from '../assets/car4.mp4'
import moto5 from '../assets/car5.mp4'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import EcomContext from '../context/EcomContext';

function NewandUpcomingArrival() {
const {newArrivals, arrivals} = useContext(EcomContext)


  return (
<div >
<div>
      <h1 className='text-black font-bold text-2xl text-center'>New Arrivals</h1>
      <TECarousel showControls showIndicators crossfade ride="carousel">
        <div className="relative w-full h-[600px] overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video className="w-full" autoPlay loop muted>
              <source
                src={moto}
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video className="w-full" autoPlay loop muted>
              <source
                src={moto2}
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video className="w-full" autoPlay loop muted>
              <source
                src={moto3}
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video className="w-full" autoPlay loop muted>
              <source
                src={moto4}
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={5}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video className="w-full" autoPlay loop muted>
              <source
                src={moto5}
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
      </div>


{/* <div className='flex flex-wrap flex-row  justify-between items-center gap-10 '>
    <div className='ml-24'>
        <h1 className='text-orange-500 font-bold text-2xl'>New Arrivals</h1>

        <TECarousel showControls showIndicators ride="carousel">
  <div className="relative w-[700px] h-[700px] overflow-hidden after:clear-both after:block after:content-[''] border border-black  text-center rounded-lg shadow-xl pb-[10px]">
    {newArrivals.map((item) => (
      <TECarouselItem
        key={item.id}
        itemID={item.id} // Use item.id as itemID
        className="relative float-left -mr-[100%] hidden w-[700px] h-[700px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      >
        <Link to={`/detail/${item.id}`}>
          <img
            src={item.img}
            className="block w-full lg:h-[80vh]"
            alt="..."
          />
        </Link>
        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-orange-500 font-bold md:block">
          <h5 className="text-xl">ABG Automobile Limited</h5>
          <p>A place where just don't sell you a car but also provide you with exceptional services.</p>
        </div>
      </TECarouselItem>
    ))}
  </div>
</TECarousel>

        
    </div>

    <div>
        <h1 className=' text-orange-500 font-bold text-2xl'>Upcoming Arrivals</h1>
    <TECarousel showControls showIndicators ride="carousel">
         <div className="relative w-[600px] h-[600px] overflow-hidden after:clear-both after:block after:content-[''] border border-black  text-center rounded-full shadow-xl pb-[10px] mr-10">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-[600px] h-[600px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            {newArrivals.map((item) =>(
               <Link to={`/detail/${item.id}`} key={item.id}>
               <img
                 src={item.img}
                 className="block w-full lg:h-[80vh]"
                 alt="..."
               />
               </Link> 

            ))}
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-orange-500 font-bold md:block">
              <div>
              <h5 className="text-xl">ABG Automobile Limited</h5>
              <p className='px-12'>
                A place where just don't sell you a car but also provide you with exceptional services.
              </p>
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-[600px] h-[600px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            {newArrivals.map((item) =>(
               <Link to={`/detail/${item.id}`} key={item.id}>
               <img
                 src={item.img}
                 className="block w-full lg:h-[80vh]"
                 alt="..."
               />
               </Link> 

            ))}
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-orange-500 font-bold md:block">
              <h5 className="text-xl">ABG Automobile Limited</h5>
              <p>
                We provide you with a blend of luxury mixed with affordability on all our cars.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-[600px] h-[600px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            {newArrivals.map((item) =>(
               <Link to={`/detail/${item.id}`} key={item.id}>
               <img
                 src={item.img}
                 className="block w-full lg:h-[80vh]"
                 alt="..."
               />
               </Link> 

            ))}
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-orange-500 font-bold md:block">
              <h5 className="text-xl">ABG Automobile Limited</h5>
              <p>
                Remember we are your provider of Elegant, Classy and Luxury affordable cars.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-[600px] h-[600px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            {newArrivals.map((item) =>(
               <Link to={`/detail/${item.id}`} key={item.id}>
               <img
                 src={item.img}
                 className="block w-full lg:h-[80vh]"
                 alt="..."
               />
               </Link> 

            ))}
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-orange-500 font-bold md:block">
              <h5 className="text-xl">ABG Automobile Limited</h5>
              <p>
                Remember we are your provider of Elegant, Classy and Luxury affordable cars.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={5}
            className="relative float-left -mr-[100%] hidden w-[600px] h-[600px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            {newArrivals.map((item) =>(
               <Link to={`/detail/${item.id}`} key={item.id}>
               <img
                 src={item.img}
                 className="block w-full lg:h-[80vh]"
                 alt="..."
               />
               </Link> 

            ))}
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-orange-500 font-bold md:block">
              <h5 className="text-xl">ABG Automobile Limited</h5>
              <p>
                Remember we are your provider of Elegant, Classy and Luxury affordable cars.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={6}
            className="relative float-left -mr-[100%] hidden w-[600px] h-[600px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            {newArrivals.map((item) =>(
               <Link to={`/detail/${item.id}`} key={item.id}>
               <img
                 src={item.img}
                 className="block w-full lg:h-[80vh]"
                 alt="..."
               />
               </Link> 

            ))}
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-orange-500 font-bold md:block">
              <h5 className="text-xl">ABG Automobile Limited</h5>
              <p>
                Remember we are your provider of Elegant, Classy and Luxury affordable cars.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={7}
            className="relative float-left -mr-[100%] hidden w-[600px] h-[600px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
           {newArrivals.map((item) =>(
               <Link to={`/detail/${item.id}`} key={item.id}>
               <img
                 src={item.img}
                 className="block w-full lg:h-[80vh]"
                 alt="..."
               />
               </Link> 

            ))}
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-orange-500 font-bold md:block">
              <h5 className="text-xl">ABG Automobile Limited</h5>
              <p>
                Remember we are your provider of Elegant, Classy and Luxury affordable cars.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={8}
            className="relative float-left -mr-[100%] hidden w-[600px] h-[600px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            {newArrivals.map((item) =>(
               <Link to={`/detail/${item.id}`} key={item.id}>
               <img
                 src={item.img}
                 className="block w-full lg:h-[80vh]"
                 alt="..."
               />
               </Link> 

            ))}
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-orange-500 font-bold md:block">
              <h5 className="text-xl">ABG Automobile Limited</h5>
              <p>
                Remember we are your provider of Elegant, Classy and Luxury affordable cars.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={9}
            className="relative float-left -mr-[100%] hidden w-[600px] h-[600px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            {newArrivals.map((item) =>(
               <Link to={`/detail/${item.id}`} key={item.id}>
               <img
                 src={item.img}
                 className="block w-full lg:h-[80vh]"
                 alt="..."
               />
               </Link> 

            ))}
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-orange-500 font-bold md:block">
              <h5 className="text-xl">ABG Automobile Limited</h5>
              <p>
                Remember we are your provider of Elegant, Classy and Luxury affordable cars.
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </div>
</div> */}

    <div className='text-center mt-10 mx-6 my-6'>
        <h1 className='font-bold text-2xl'>"Mission Statement"</h1>
        <p className='font-semibold pt-6 px-8 text-xl'>'Our mission is to earn our Customer’s loyalty by delivering sales and service experiences with high quality, excellent value, integrity and enthusiasm. We will function as a team, work ethically, and focus on meeting and striving to exceed the expectations of our Customers.'</p>
    </div>
    <div className='bg-orange-300 border border-orange-500 '>
    <div className='flex flex-col'>
        <div className='my-6 px-10 py-6'>
            <h1 className='font-semibold text-xl px-6 text-center'>A VISION STATEMENT IS A WRITTEN PICTURE OF THE BEST WE CAN BE AS AN ORGANIZATION. IT DESCRIBES AN ORGANIZATION IN ITS IDEAL STATE AND IS FUTURE-ORIENTED.</h1>
        </div>
        <div className='font-bold text-2xl ml-12 mt-6'><h2 className=' '>VISION</h2></div>
    </div>
    <div className='flex flex-wrap my-6'>
        <div className="container border border-orange-500 mx-auto mt-8 p-8 bg-white max-w-md rounded-lg shadow-xl">
            <p>We will listen to our Customers and team members. We will ask questions (not assume) seeking to understand specific needs, desires, and expectations. We will seek to understand before we will seek to be understood.</p>
        </div>
        <div className="container border border-orange-500 mx-auto mt-8 p-8 bg-white max-w-md rounded-lg shadow-lg">
            <p>We will work in an environment of mutual trust and respect. We will be caring and responsive to requests while being honest and timely, avoiding false expectations.</p>
        </div>
        <div className='container border border-orange-500 mx-auto mt-8 p-8 bg-white max-w-md rounded-lg shadow-lg'>
            <p>We will think in terms of exceeding Customer expectations while doing what is fair; i.e. striving to go the extra step that transforms Customer Satisfaction into Customer Enthusiasm.
            </p>
        </div>
        <div className='container border border-orange-500 mx-auto mt-8 p-8 bg-white max-w-md rounded-lg shadow-lg'>
            <p>We will make it happen. Speed is essential in creating a win-win culture for the Customer and Capital.</p>
        </div>
        <div className='container border border-orange-500 mx-auto mt-8 p-8 bg-white max-w-md rounded-lg shadow-lg'>
            <p>We will follow-up with the Customer to ensure that the Customer's expectations were met or exceeded.</p>
        </div>
        <div className='container border border-orange-500 mx-auto mt-8 p-8 bg-white max-w-md rounded-lg shadow-lg'>
            <p>We will be proactive by anticipating the needs of our Customers and team members.</p>
        </div>
    </div>
    </div>
</div>






  )
}

export default NewandUpcomingArrival
'use client'

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const flashNewsData = [
{
    id:1,
    news:"Aditya-L1 solar observatory is successfully inserted into Halo-Orbit around Sun-Earth L1",
    url:""

} ,

{
    id:2,
    news:"Mission Gaganyaan: TV D1 Test Flight is accomplished. Crew Escape System performed as intended. Mission Gaganyaan gets off on a successful note. ",
    url:"https://www.isro.gov.in/Gaganyaan_TV-D1_Mission.html"

} ,
{
    id:3,
    news:"Aditya-L1: HEL1OS captures first High-Energy X-ray glimpse of Solar Flares",
    url:"https://www.isro.gov.in/Aditya_L1.html"
},
{
    id:4,
    news:"XPoSat is launched successfully by PSLV-C58",
    url:"https://www.isro.gov.in/PSLV_C58_XPoSat_Mission.html"
}

]
const Flashnews = () => {
  return (
    <div className='   bg-black        w-full flex justify-center items-center '>
        <div className='  max-md:max-h-40  w-5/6  my-3   min-h-0    max-h-24 backdrop-blur-xl    bg-gray-300/10 rounded-xl border-2 border-white/30 hover:border-white transition-all duration-300 ease-in-out cursor-pointer   '>
            <div className=' w-full flex items-center font-semibold text-orange-500 justify-center  h-6  p-2'>
                <p>Flash news</p>
                </div>  
              
                <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} interval={5000} autoPlay={true}>

                    {flashNewsData.map((data)=>{
                        return <Link key={data.id} href={data.url}> <div  className=' flex justify-center items-center  min-h-16 p-1    '>
                        <p className='  text-white text-sm pb-6 hover:text-cyan-300'>{data.news}</p>
                        </div></Link>
                    })}
             
               
                </Carousel>
        </div>


    </div>
  )
}

export default Flashnews
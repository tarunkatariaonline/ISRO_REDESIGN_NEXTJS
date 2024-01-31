import React from 'react'
import Latestnewscard from './Latestnewscard'
import Link from 'next/link'
const latestNewsData = [
  {
    id:1,
    timetoread:"4 ",
    imgurl:"https://www.isro.gov.in/media_isro/image/insat_3ds_sdsc.png",
    desc:"INSAT-3DS Satellite Flagged off to SDSC-SHAR",
    url:"https://www.isro.gov.in/INSAT_3DS_Satellite_Flagged_off_to_SDSC_SHAR.html"
  },
  {
    id:2,
    timetoread:"7 ",
    imgurl:"https://www.livemint.com/lm-img/img/2024/01/27/600x338/PTI01-06-2024-000159B-0_1706373158623_1706373192068.jpg",
    desc:"POEM-3 Mission achieves all its Payload objectives",
    url:"https://www.isro.gov.in/POEM-3_Mission_achieves_Payload_objectives.html"
  }
  ,{
    id:3,
    timetoread:"5 ",
    imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Erdfunkstelle_Raisting_2.jpg/640px-Erdfunkstelle_Raisting_2.jpg",
    desc:"SSPACE/IIST lends tracking support to space startup",
    url:"https://www.isro.gov.in/IIST_lends_tracking_support_to_space_startup.html"
  }
]
const Latestnews = () => {
  return (
    <div className=' w-full relative z-10      flex justify-center items-center '>
    <div  className='  w-5/6      flex  flex-col  justify-center'>
        
    
    <div className=' flex justify-between my-10'>
    <div>  
    <p className="text-3xl font-medium text-white max-md:text-xl py-2">Latest News</p>
    <p className=' text-slate-200/80  py-2'>Stay up to date with the latest from India's space sector.</p>
    </div>
    <div className=' max-md:w-full '>
        <button className=' max-md:text-sm  text-white bg-gray-300/50 hover:bg-gradient-to-r   from-blue-400/50 to-orange-400/50 backdrop-blur-3xl  px-5 py-2 rounded-lg'>All News &rarr;</button>
    </div>
    </div>

    <div className=' flex  flex-wrap py-2 w-full  justify-center    '>


       {/* cards */}

{latestNewsData.map((news )=>{
  return   <Latestnewscard key={news.id}  url={news.url}  timetoread={news.timetoread} imgurl={news.imgurl}  desc={news.desc}   /> 

})}



      
    </div>
    </div>
   </div>
  )
}

export default Latestnews
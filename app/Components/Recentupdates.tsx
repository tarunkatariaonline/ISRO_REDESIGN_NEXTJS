import React from 'react'
import Recentupdatescard from './Recentupdatescard'
import Link from 'next/link'
const recentUpdateData = [
  {
    id:1,
    title:"PSLV-C58/XPoSat Mission",
    desc:"Launched on: January 01, 2024",
    imgurl:"https://www.isro.gov.in/media_isro/image/index/Recent/pslvc58xposat.jpg.webp",
    url:"https://www.isro.gov.in/PSLV_C58_XPoSat_Mission.html"
  },{
    id:2,
    title:"Gaganyaan TV-D1 Mission",
    desc:"Launched on: October 21, 2023",
    imgurl:"https://www.isro.gov.in/media_isro/image/index/GaganyaanTVD1/GaganyaanTVD1.jpg.webp",
    url:"https://www.isro.gov.in/Gaganyaan_TV-D1_Mission.html"
  },{
    id:3,
    title:"PSLV-C57/Aditya-L1 Mission",
    desc:"Launched on: September 02, 2023",
    imgurl:"https://www.isro.gov.in/media_isro/image/index/PSLVC56/PSLVC56_PostImg.jpg.webp",
    url:"https://www.isro.gov.in/Aditya_L1.html"
  },{
    id:4,
    title:"Halo Orbit Insertion",
    desc:"January 6, 2024",
    imgurl:"https://www.isro.gov.in/media_isro/image/index/Recent/haloorbitinsertionl1.jpg",
    url:"https://www.isro.gov.in/halo-orbit-insertion-adtya-l1.html"
  }
]
const Recentupdates = () => {
  return (
    <div className=' w-full   relative z-10       flex justify-center items-center '>
    <div  className='  w-5/6   my-10   flex  flex-col  justify-center'>
    <p className="text-3xl font-medium text-white py-2 max-md:text-xl">Recent Updates</p>
    <p className=' text-slate-200/80  py-2'>stay up-to date with ISRO's latest programmes</p>

    <div className=' flex  flex-wrap py-2 w-full  justify-center    '>


       {/* cards */}

       {recentUpdateData.map((updatenews,index)=>{
        return   <Recentupdatescard key={updatenews.url} imgurl={updatenews.imgurl}  title={updatenews.title} desc={updatenews.desc} url = {updatenews.url}/>
       })}
      
    

      
    </div>
    </div>
   </div>
   
  )
}

export default Recentupdates
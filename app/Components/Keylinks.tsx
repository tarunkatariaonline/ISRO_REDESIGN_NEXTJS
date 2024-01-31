import React from 'react'
import Keylinkscard from './Keylinkscard'
import { FaVideo } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaHammer } from "react-icons/fa";
import Link from 'next/link';

const keylinkscardsdata = [
    {   id:1,
        icon:FaVideo,
        heading:"Press Release",
        text:"Find out the latest press release from ISRO",
        url:"https://www.isro.gov.in/Press.html"
    },{  
        id:2,
        icon:FaBriefcase,
        heading:"Careers",
        text:"Join ISRO workforce technical or administrative openings available",
        url:"https://www.isro.gov.in/Careers.html"
    }
    ,{  id:3,
        icon:FaGraduationCap,
        heading:"Students",
        text:"ISRO empowers students for space tech awareness",
        url:"https://www.isro.gov.in/Students.html"
    }

    ,{  id:4,
        icon:FaHammer,
        heading:"Tenders",
        text:"Portal for ISRO tender notification regurarly updated",
        url:"https://www.isro.gov.in/Tenders.html"
    }
]

const Keylinks = () => {
  return (
    <>
    <div className=' w-full  relative   z-10   flex justify-center items-center '>
     <div  className='  w-5/6  my-10      flex  flex-col  justify-center'>
     <p className="text-3xl  max-md:text-xl font-medium text-white py-2">Key Links</p>
     <p className=' text-slate-200/80 py-2'>All the important portals to explore opportunities and information about ISRO</p>

     <div className=' flex  flex-wrap py-2 w-full  justify-center    '>


        {/* cards */}

        {keylinkscardsdata.map((data)=>{
            return <Link href={data.url} key={data.id}> <Keylinkscard Icon ={data.icon} heading={data.heading} text={data.text}/></Link>
        })}

        
       
       

        
        
        
       

       
     </div>
     </div>
    </div>
    </>
  )
}

export default Keylinks
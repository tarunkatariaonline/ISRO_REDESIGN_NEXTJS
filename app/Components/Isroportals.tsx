import React from 'react'
import Isroportalscard from './Isroportalscard'
import Link from 'next/link'
const isroPortalsData =[
  {
    id:1,
    imgurl:"https://www.isro.gov.in/media_isro/image/hormenu/spark.png.webp",
    name:"SPARK",
    desc:"India's first virtual space tech museum. Eplore all the achivements of ISRO and learn.",
    weburl:"https://spacepark.isro.gov.in/spacepark/"
  },
  {
    id:2,
    imgurl:"https://www.isro.gov.in/media_isro/image/hormenu/vedas.png.webp",
    name:"VEDAS",
    desc:"Visualisation of Earth Observation Data and Archived System portal",
    weburl:"https://vedas.sac.gov.in/en/"
  },
  {
    id:3,
    imgurl:"https://www.isro.gov.in/media_isro/image/hormenu/stem.png.webp",
    name:"ISRO STEM",
    desc:"Knowledge portal on Space Education. explore Space technology and it's application.",
    weburl:"https://www.isro.gov.in/Students.html"
  },

  {
    id:4,
    imgurl:"https://www.isro.gov.in/media_isro/image/hormenu/igrasp.png.webp",
    name:"I-GRASP",
    desc:"ISRO Grant in Aid for Space Research. The portal invites proposals from academia.",
    weburl:"https://www.isro.gov.in/igrasp_portal.html"
  },
  
  {
    id:5,
    imgurl:"https://www.isro.gov.in/media_isro/image/hormenu/mosdac.jpg.webp",
    name:"MOSDAC",
    desc:"Meteorological and Oceanographic Satellite Data Archival Centre Portal.",
    weburl:"https://www.mosdac.gov.in/"
  },
  {
    id:6,
    imgurl:"https://www.isro.gov.in/media_isro/image/hormenu/issdc.png.webp",
    name:"ISSDC",
    desc:"ISSDC is the main data center for Indian Space Science Mission payload archives.",
    weburl:"https://www.issdc.gov.in/"
  },
  {
    id:7,
    imgurl:"https://www.isro.gov.in/media_isro/image/hormenu/isro1.png.webp",
    name:"NDEM",
    desc:"National Database for Emergency Management (NDEM) is a unique Geo-portal",
    weburl:"https://ndem.nrsc.gov.in/login.php"
  },

  {
    id:8,
    imgurl:"https://www.isro.gov.in/media_isro/image/hormenu/bhuvan.png.webp",
    name:"BHUVAN",
    desc:"Indian Geo-platform of space research oraganization for Visualisation portal.",
    weburl:"https://bhuvan.nrsc.gov.in/home/index.php"
  },

  {
    id:9,
    imgurl:"https://www.isro.gov.in/media_isro/image/hormenu/bhoonidhi.png.webp",
    name:"BHOONIDHI",
    desc:"Bhoonidhi enables access to our extensive archive of Remote Sensing data from satellites.",
    weburl:"https://bhoonidhi.nrsc.gov.in/bhoonidhi/home.html"
  },
  
  
]
const Isroportals = () => {
  return (
    
<div className=' w-full  relative z-10   min-h-0 py-10      flex justify-center items-center '>
     <div  className='  w-5/6  my-10     flex  flex-col  justify-center'>
     <p className="text-3xl font-medium text-white py-2 max-md:text-xl">ISRO Portals</p>
     <p className=' text-slate-200/80  py-2'>Link to all the ISRO Portals in one place</p>

     <div className=' flex  flex-wrap py-2 w-full  justify-center    '>


        {/* cards */}
        {
          isroPortalsData.map((portal,index)=>{
            return <Link href={portal.weburl} key={portal.id}><Isroportalscard  bgshage={(index%2===0)?"to-orange-300/20":"to-blue-400/20"} name={portal.name} imgurl={portal.imgurl} desc={portal.desc}/> </Link> 
          })
        }
        
        
       

      
        
       

       
     </div>
     </div>
    </div>
    
  )
}

export default Isroportals
'use client'
import React, { useState } from 'react'
import IsroLogo from '@/public/logo.png'
import Image from 'next/image'
import { BiArrowBack, BiArrowToRight, BiSolidDownArrow } from "react-icons/bi";
import { FaArrowRight, FaCross, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BsBackpackFill } from 'react-icons/bs';
import { MdCancel } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const headerDataArray = [
    {   
        id:1,
        title:"About",
        urlArray:[{
            id:1,
            title:"Profile",
            url:"https://www.isro.gov.in/profile.html"
        },{  id:2,
            title:"Vision, Mission and Objectives",
            url:"https://www.isro.gov.in/profile.html"
        },{  id:3,
            title:"Citizen charter",
            url:"https://www.isro.gov.in/citizencharter.html"
        }
        ,{  id:4,
            title:"Organisational structure",
            url:"https://www.isro.gov.in/organisation.html"
        },{  id:5,
            title:"DoS Centers/units/enterprises",
            url:"https://www.isro.gov.in/isro_centre.html"
        },{  id:6,
            title:"Secretary, DoS/ Chairman, ISRO",
            url:"https://www.isro.gov.in/leadership.html"
        },{  id:7,
            title:"Former Secretaries/Chairmen",
            url:"https://www.isro.gov.in/formerchairman.html"
        },{  id:8,
            title:"Space Commission",
            url:"https://www.isro.gov.in/whoswho.html"
        },{  id:9,
            title:"Autonomous bodies",
            url:"https://www.isro.gov.in/autonomous.html"
        }
    ]

    }, {   
        id:2,
        title:"Activities",
        urlArray:[{
            id:1,
            title:"Missions accomplished",
            url:"https://www.isro.gov.in/Mission.html"
        },{  id:2,
            title:"Science",
            url:"https://www.isro.gov.in/Science.html"
        },{  id:3,
            title:"Spacecrafts",
            url:"https://www.isro.gov.in/Spacecrafts.html"
        },{  id:4,
            title:"Payloads",
            url:"https://www.isro.gov.in/Payloads.html"
        },{  id:5,
            title:"Launchers",
            url:"https://www.isro.gov.in/Launchers.html"
        },{  id:6,
            title:"Science",
            url:"https://www.isro.gov.in/Science.html"
        },{  id:7,
            title:"Research & Development",
            url:"https://www.isro.gov.in/Researchdevelopment.html"
        },{  id:8,
            title:"Gaganyaan",
            url:"https://www.isro.gov.in/Gaganyaan.html"
        },{  id:9,
            title:"Ground Segment activities",
            url:"https://www.isro.gov.in/GroundSegmentActivities.html"
        }
    ]

    },{   
        id:3,
        title:"Services",
        urlArray:[{
            id:1,
            title:"Launch service",
            url:"https://www.isro.gov.in/launchservices.html"
        },{  id:2,
            title:"Mission support",
            url:"https://www.isro.gov.in/SatelliteSystemBusSubSystemTesting.html"
        },{  id:3,
            title:"Mission support",
            url:"https://www.isro.gov.in/missionsupport.html"
        },{  id:4,
            title:"Ground systems support",
            url:"https://www.nsilindia.co.in/ground-infrastructure-space"
        },{  id:5,
            title:"Satellite Navigation services",
            url:"https://www.isro.gov.in/SatelliteNavigationServices.html"
        },{  id:6,
            title:"Meteorological & Oceanographic Satellite Data",
            url:"https://www.isro.gov.in/MeteorologicalOceanographicApplications.html"
        },{  id:7,
            title:"Disater Management: National & international",
            url:"https://www.isro.gov.in/DisaterManagementNationalInternational.html"
        },{  id:8,
            title:"Aerial Services & Digital Mapping",
            url:"https://www.isro.gov.in/AerialServicesDigitalMapping.html"
        },{  id:9,
            title:"North-East India region specific applications Services",
            url:"https://www.isro.gov.in/North-EastIndiaRegionSpecificApplications.html"
        }
    ]

    },
    {   
        id:4,
        title:"Programmes",
        urlArray:[{
            id:1,
            title:"Sponsored Research",
            url:"https://www.isro.gov.in/SponsoredResearch.html"
        },{  id:2,
            title:"Academic courses",
            url:"https://www.isro.gov.in/AcademicCourses.html"
        }
        ,{  id:3,
            title:"Outreach",
            url:"https://www.isro.gov.in/Outreach.html"
        }
        ,{  id:4,
            title:"Technology Transfer",
            url:"https://www.isro.gov.in/TechnologyTransfer.html"
        }
        ,{  id:5,
            title:"UNNATI",
            url:"https://www.isro.gov.in/UNNATI.html"
        }
        ,{  id:6,
            title:"Student Satellite",
            url:"https://www.ursc.gov.in/student-satellites/index.jsp"
        }
        ,{  id:7,
            title:"Fellowships",
            url:"https://www.isro.gov.in/Fellowships.html"
        }
        ,{  id:8,
            title:"VIKAS Scholarship",
            url:"https://www.prl.res.in/Vikas/"
        }
        ,{  id:9,
            title:"Summer internship",
            url:"https://www.prl.res.in/prl-eng/summer_internship"
        }
        ,{  id:10,
            title:"YUVIKA",
            url:"https://www.isro.gov.in/YUVIKA.html"
        }
       
    ]

    }, {   
        id:5,
        title:"Resources",
        urlArray:[{
            id:1,
            title:"Science Data",
            url:"https://www.isro.gov.in/Sciencedata.html"
        },{  id:2,
            title:"Database for Emergency Management",
            url:"https://www.isro.gov.in/DBEM.html"
        },{  id:3,
            title:"Info for Climate & Enviroment studies",
            url:"https://www.isro.gov.in/InfoClimateEnv.html"
        }
        ,{  id:4,
            title:"Forecast from NARL",
            url:"https://forecast.narl.gov.in/forecast/nsrf/"
        }
        ,{  id:5,
            title:"Meteorology & Oceanographic data",
            url:"https://www.mosdac.gov.in/live/index_one.php?url_name=india"
        }
        ,{  id:6,
            title:"Mobile Apps",
            url:"https://www.isro.gov.in/MobileApps.html"
        }
        ,{  id:7,
            title:"NAVIC Time",
            url:"https://www.sac.gov.in/Vyom/time_current.jsp"
        }
        ,{  id:8,
            title:"Atlases: River basin",
            url:"https://www.nrsc.gov.in/KR_Atlas_TCHP"
        }
        ,{  id:9,
            title:"Atlases: Oceans, Moon, Mars",
            url:"https://www.mosdac.gov.in/atlases"
        }
    ]

    },{   
        id:6,
        title:"Engage with Us",
        urlArray:[{
            id:1,
            title:"Join ISRO",
            url:"https://www.isro.gov.in/Careers.html"
        },{  id:2,
            title:"Visit ISRO",
            url:"https://www.isro.gov.in/Outreach.html"
        },{  id:3,
            title:"Do a Project",
            url:"https://www.isro.gov.in/DoAProject.html"
        },{  id:4,
            title:"FAQ",
            url:"https://www.isro.gov.in/FAQ.html"
        },{  id:5,
            title:"Training",
            url:"https://www.isro.gov.in/Training.html"
        },{  id:6,
            title:"Space on wheels",
            url:"https://www.isro.gov.in/SpaceOnWheels.html"
        },{  id:7,
            title:"Students",
            url:"https://www.isro.gov.in/Students.html"
        },{  id:8,
            title:"Academic institutions",
            url:"https://www.isro.gov.in/AcademicInstitutions.html"
        },{  id:9,
            title:"Feedback",
            url:"https://feedback.isro.gov.in/ISROAPP/fFBF"
        }
    ]

    }
]



const Header = () => {
   const [showSidebar,setShowSidebar] = useState(false)
   const [showSidebar2,setShowSidebar2] = useState(false)
   const [sidebar2Data,setSideSidebar2Data] = useState<any>(null); 

  const sidebarhandle = (data:any)=>{
   setSideSidebar2Data(data);
   setShowSidebar2(true)
  }
   return (
    <>
     <div className=' h-20 w-full inset-0     bg-gray-900/30 backdrop-blur-sm absolute z-50 flex items-center max-md:hidden max-lg:hidden justify-between'>
       <div className=' flex px-4   ' >
        <Image className='  w-16 p-2  h-16 border-r-2  border-white' src={IsroLogo} alt='logo'/>
         <div className='  px-2 mx-2 flex  flex-col  justify-center  '>
            <p className=' text-white text-sm font-semibold  tracking-wide'>Indian Space </p>
            <p className=' text-white text-sm font-semibold tracking-wide'>Research Organisation</p>
            <p className='   text-white text-xs font-light '>Department Of Space</p>
         </div>
       </div>
       <div className='navbar flex   items-center justify-center'>

       <button className=' text-white m-3 transition-all duration-300 ease-in-out hover:text-orange-400 flex items-center text-sm'>Home </button>


             {headerDataArray.map((item,index)=>{
                return <div key={item.id} className=' relative group'>
                <button className=' text-white m-3 transition-all duration-300 ease-in-out hover:text-orange-400 flex items-center text-sm '>{item.title} <BiSolidDownArrow className='  flex ml-1 ' /></button>
        
                <div  className='  min-w-60 border-t-2 border-orange-600 hidden rounded-lg    group-hover:block   z-50  inset-0 backdrop-filter   backdrop-blur-3xl absolute top-[89%]  left-[14px] '>

                    {item.urlArray.map((i,index)=>{
                        return   <Link href={i.url} key={i.id}> <button  className=' w-full  p-2 border-b-2 border-orange-600  hover:text-orange-500 text-sm text-white bg-slate-900/95 '>{i.title}</button>
                        </Link>
                    })}
               
                 
               </div>
                </div>
        
             })}
        
       

      




       
        </div>

        <div className=' last box flex items-center h-12 mr-8   '>
       
         <div className=' flex text-white items-center border-r-2  h-12 mx-3  border-white'>
            <FaSearch className=' cursor-pointer text-white mx-2 hover:text-orange-400 '/>
            <p className=' flex items-center mx-2 cursor-pointer hover:text-orange-400 text-sm'>En<BiSolidDownArrow className=' mx-1'/></p>

         </div>
       <img className='  w-8 h-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Emblem_of_India_%28gold%29.svg/1285px-Emblem_of_India_%28gold%29.svg.png" alt="" />

       </div>

    

       </div>
         
         {/* mobile header */}
       <div className=' w-full h-16  lg:hidden bg-black/80 backdrop-blur-md  top-0  z-50  flex items-center justify-between '>
           <div className=' p-2 flex items-center'>
            <button className=' text-white text-3xl  hover:text-orange-400 ' onClick={()=>setShowSidebar(true)}><IoMenu /></button>
           </div>

           <div>
           <Image className='   ml-4 w-16 p-2  h-16 ' src={IsroLogo} alt='logo'/>
           </div>

           <div className=' flex  p-2 text-white items-center   h-10 mx-3  '>
            <FaSearch className='  text cursor-pointer text-xl text-white  hover:text-orange-400 '/>
           
         </div>
       
  
      
       </div>


       {showSidebar&& <div className=' fixed top-0 left-0 right-0 bottom-0 w-full bg-black  z-50 h-full'>

<div className=' w-full h-16  flex items-center p-2'>
     <MdCancel onClick={()=>setShowSidebar(false)} className=' text-white text-3xl'/>
     <div className=' w-full  justify-center items-center flex mr-10'>
        <Image className=' h-12 w-12 ' src={IsroLogo} alt='logo'/>
     </div>
    </div> 

    <div className=' w-full bg-black h-full py-2'>
     
    
   
    <div    className=' h-12    group   border-b-2  border-white   hover:border-b-4 hover:border-orange-500 cursor-pointer  text-white flex justify-between items-center p-4'>
        <p className=' flex items-center    group-hover:text-orange-500 font-bold'>Home</p>
        <FaArrowRight className=' group-hover:text-orange-500'/>
     </div>
    {headerDataArray.map((item)=>{
        return  <div  key={item.id} onClick={()=>sidebarhandle(item.urlArray)} className=' h-12    group  my-2   border-b-2  border-white   hover:border-b-4 hover:border-orange-500 cursor-pointer  text-white flex justify-between items-center p-4'>
        <p className=' flex items-center    group-hover:text-orange-500 font-bold'>{item.title}</p>
        <FaArrowRight className=' group-hover:text-orange-500'/>
     </div>
    })}


    
       
    
    
    
    </div>

</div>
}   


{showSidebar2&&<div className=' fixed top-0 left-0 right-0 bottom-0 w-full  bg-black  z-50 h-full'>

<div className=' w-full h-16  flex items-center p-2 '>
     <FaArrowAltCircleLeft onClick={()=>setShowSidebar2(false)} className=' text-white text-2xl'/>
     <div className=' w-full  justify-center items-center flex mr-10'>
        <Image className=' h-12 w-12 ' src={IsroLogo} alt='logo'/>
     </div>
    </div> 

    <div className=' w-full bg-black h-full py-2'>



  {sidebar2Data?.map((i:any,index:number)=>{
    return  <Link href={i.url} key={index} > <div className=' h-12   group  my-2   border-b-2  border-white   hover:border-b-4 hover:border-orange-500 cursor-pointer  text-white flex justify-between items-center p-4'>
    <p className=' flex items-center    group-hover:text-orange-500 font-bold'>{i.title} </p>
    <FaExternalLinkAlt className=' group-hover:text-orange-500'/>
 </div></Link> 
  })}
    
    
    
    

    
    
   
    
    
   
    
    
    
    </div>

</div>
} 



{/* sidebar */}
     {/* {showSidebar&&<div className=' sidebar z-50  p-8  fixed top-0 left-0 right-0 bottom-0   bg-black/80 backdrop-blur-md'>
        
        <div className=' flex justify-end items-center'>
        <p className=' p-2 text-xl  font-semibold text-white' onClick={()=>setShowSidebar(false)}>X</p>
        </div>
    
      <div className='   overflow-y-auto  p-8   bg-gray-600 w-full rounded-xl'>
      <div  className='flex justify-between items-center  hover:text-orange-400 cursor-pointer  '>
         <p className=' p-2 text-white hover:text-orange-400'>Home</p>
         
         </div>
          
      
      {
       headerDataArray.map((item,index)=>{
           return <div key={item.id} className='   min-h-10 text-white   p-2 group  ' >
           <div  className='flex justify-between items-center  hover:text-orange-400 cursor-pointer '>
         <p className=''>{item.title}</p>
         <BiSolidDownArrow/>
         </div>
          
          <div className='  hidden  group-hover:flex flex-col justify-start items-start  ml-4 p-2 mt-2 border-t-2 border-b-2 border-orange-400  '>
            
            {
            item.urlArray.map((i,index)=>{
               return <Link className=' w-full' href={i.url} key={i.id} ><div  className=' cursor-pointer hover:text-orange-500 border-b-2 w-full  py-2 '>
                <button className='   text-sm   '>{i.title}</button>
               </div></Link> 
            })
            }
          
          
         
          </div>
         </div>
       })
      }
     
       
   <div>
     
     
   </div>

      </div>
        
      </div>}   */}
    
    </>
  )
}

export default Header
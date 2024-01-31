import Image from 'next/image'
import React from 'react'
import IsroLogo from '@/public/logo.png'
import { FaFacebook } from 'react-icons/fa6'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    const date = new Date();

    

  return (

    <>
    <div className='  relative  z-10 bg-gradient-to-t    from-black/10 to-black/80 w-full '>
     <div className='  w-full    flex max-md:block'>
       <div className=' p-12'>
       <Image className=' w-14 h-14' src={IsroLogo} alt=''/>
       <p className=' text-white font-semibold'>Address</p>
       <p className=' text-white text-xs'>ISRO Headquarters, Antariksh Bhavan, <br /> New BEL Road
Bengaluru-560 094
 <br />
Phone: +91 80 22172294 / 96
<br />
Email: isropr@isro.gov.in</p>
 <div className=' text-white'>
   <p className=' py-1' >Social</p> 
   <div className='  py-1 cursor-pointer flex'>
   <Link href={"https://www.facebook.com/ISRO/"} > <FaFacebook className=' mr-4 hover:text-orange-400'/> </Link>
   <Link href={"https://twitter.com/isro?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"}> <BsTwitter className=' mr-4  hover:text-orange-400'/> </Link>
   <Link href={"https://www.youtube.com/channel/UCw5hEVOTfz_AfzsNFWyNlNg"}> <BsYoutube className=' mr-4   hover:text-orange-400'/></Link>
   <Link href={"https://www.instagram.com/isro.dos/?hl=en"}> <FaInstagram className=' mr-4  hover:text-orange-400'/> </Link>
     </div>
 </div>
       </div>


       <div className=' w-full  flex  max-md:block   max-md:px-12  max-lg:px-0  pt-2   justify-around'>
         <div className=' w-40   flex  flex-col justify-center'>
          <p className=' text-white font-semibold py-2'>Quick Links</p>
         
           <Link  href={'https://www.isro.gov.in/RTI.html'} className=' text-white py-1 hover:text-orange-400   text-xs font-light '> <p>RTI</p></Link>
           <Link  href={'https://www.isro.gov.in/contact.html'} className='text-white  py-1 hover:text-orange-400  text-xs font-light  '> <p>Contact us</p></Link>
           <Link  href={'https://www.isro.gov.in/FAQ.html'} className=' text-white  py-1 hover:text-orange-400  text-xs font-light'> <p>FAQ</p></Link>
           <Link  href={'https://www.isro.gov.in/ISROAPP/fFBFNC'} className=' text-white  py-1 hover:text-orange-400  text-xs font-light'> <p>Feedback</p></Link>
           
          
         </div>

         <div className=' w-40 h-full flex  flex-col justify-center'>
          <p className=' text-white font-semibold py-2'>Reports</p>
        
           <Link  href={'https://www.isro.gov.in/Press.html'} className=' text-white py-1 hover:text-orange-400   text-xs font-light '> <p>Press Release</p></Link>
     
           <Link  href={'https://www.isro.gov.in/AnnualReports.html'} className=' text-white py-1 hover:text-orange-400   text-xs font-light'> <p>Annual Report</p></Link>
           <Link  href={'https://www.isro.gov.in/media_isro/pdf/ISMDataSheets.pdf'} className='  text-white py-1 hover:text-orange-400   text-xs font-light'> <p>ISM Data Sheets</p></Link>
           <Link  href={'https://www.isro.gov.in/Chandrayaan_2.html'} className='  text-white py-1 hover:text-orange-400   text-xs font-light'> <p>Chandrayaan-2</p></Link>
           
          
         </div>

         <div className=' w-40  h-full flex  flex-col justify-center'>
          <p className=' text-white font-semibold  py-2'>Govt Portals</p>
         
           <Link  href={'https://www.nvsp.in/'} className='  text-white py-1 hover:text-orange-400   text-xs font-light '> <p>National Voter's Service</p></Link>
           <Link  href={'https://www.isro.gov.in/publications.html'} className='  text-white py-1 hover:text-orange-400   text-xs font-light'> <p>CCSTEAP</p></Link>
           <Link  href={'https://www.pib.gov.in/'} className=' text-white py-1 hover:text-orange-400   text-xs font-light'> <p>PIB</p></Link>
           <Link  href={'https://www.isro.gov.in/publications.html'} className='  text-white py-1 hover:text-orange-400   text-xs font-light'> <p>Publications</p></Link>
        
         
          
         </div>
       </div>
       

   
     </div>
      
      <div className=' flex justify-center  flex-col  items-center'>
        <p className=' text-white text-sm  '>Developed by Tarun Kataria ♥ </p>
        <p className=' text-white text-sm'>© Copyright {date.getFullYear()} ISRO. All Rights Reserved</p>
      </div>
      </div>
     </>
  )
}

export default Footer
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa"
import nipul1 from "../images/nipul1.png"
import Navbar from './Navbar'

function Home() {
  return (
    <div className='h-full w-full flex flex-col items-center'>
      <Navbar/> 

     <div className='flex flex-col gap-4 items-center w-full'>
     <div className='px-2 py-5 mt-7 text-[#071A45] font-semibold text-6xl text-center font-lato' >
        <p className=' '>CONNECTING DREAMS TO REALITY </p>
        <p className='text-[#3996B9]'>YOUR PREMIER</p>
         <p>REAL ESTATE MARKETPLACE</p>
      </div>
      <div>
        <p className='text-xl text-center font-normal font-lato'>Where every search ends with a home</p>
      </div>
      <div className='flex justify-center gap-10 text-xl text-[#FFFFFF] p-5 font-lato'>
        <div className='bg-[#3A7DFF] p-4 pl-6 rounded-full flex justify-center items-center'>
     
        <button className='pr-4'>Find Your Home </button>
        <FaLongArrowAltRight />
        </div>
        <div className='bg-[#3A7DFF] p-4 pl-6 rounded-full flex justify-center items-center'>
     
        <button className='pr-4'>List Your Property</button>
        <FaLongArrowAltRight />
        </div>
        
      </div>
     </div>
     <img src={nipul1} className='rounded-6xl h-[750px] w-full object-cover ' alt="home image"  />
    </div>
  )
}

export default Home

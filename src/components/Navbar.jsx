import React from 'react'

function Navbar() {
  return (
<>
  <div className='flex w-full items-center justify-center'>
  <div className='flex justify-between px-5 py-5 my-4 items-center w-full max-w-6xl'>
   <div >
   <span className='text-[40px] font-extrabold font-lato'>XYZ<span className='text-[40px] font-normal'>INDUSTRIES</span></span></div>
   <div className='flex gap-5 text-sm items-center bg-[#071A45] px-6 py-4 list-none rounded-full text-[#C9C6C2] font-lato'>
    <li>Home</li>
    <li>About Us</li>
    <li>Property</li>
    <li>Services</li>
    <li>Contact</li>   
   </div>
   <div className='flex gap-6 items-center'>
   <button className='py-3 px-5 rounded-full border border-[#071A45] text-[#071A45] font-lato'>Sign Up</button>
<button className='py-3 px-5 rounded-full bg-blue-400 text-white font-lato'>Sign In</button>

   </div>

   </div>
  </div>
</>
  )
}

export default Navbar

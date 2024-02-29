import React from 'react'

function Card2({
    rank,title,desc
}) {
  return (
    <div className='w-[260px] h-[400px] border-l-[1px] border-zinc-600 py-[50.5px] pl-[24px] flex flex-col justify-between  '>
    <div className=''>
    <p className='text-[80px] font-[300]'>{rank}</p>
    <p className='text-[20px]'>{title}</p>
    </div>
    <div className=' w-[16px] h-[16px] bg-[#2C8FB5] rounded-[4px]'/>
    <p className='text-[text-[16px] text-[#071A45B2] font-[400] '>
   {desc}
    </p>
    </div>
  )
}

export default Card2
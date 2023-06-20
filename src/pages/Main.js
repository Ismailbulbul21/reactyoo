import React from 'react'
import img1 from '../sawiro/360_F_571912904_2FymjuUT1mlvDmKjPfQV2AYxLuYFMxgO.jpg'
export const Main = () => {
  return (
    <div className='flex  justify-between items-center  mt-8 w-full p-12 gap-12 max-sm:flex-col'>
        
<div className='  max-w-[500px]'>

<div>

<h1 className=' text-green-500 font-bold text-3xl mb-2'>Let's beat the bear Market</h1>
<p className=' font-bold'>Crypto casino is one of the world leading special investment communities that allows people grow their wealth.</p>
</div>

<button className='mt-5 bg-green-600 p-3  rounded-lg hover:opacity-75'>Start Investing</button>

</div>


<div className='max-w-[500px]'>

<div className=''>
<img src={img1} className='max-sm:h-[270px] rounded-xl ' />   
</div>

</div>

    </div>
  )
}

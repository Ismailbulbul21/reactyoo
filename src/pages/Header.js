import React, { useState } from 'react'
import {ImCancelCircle} from 'react-icons/im'
import {AiOutlineMenu} from 'react-icons/ai'

export const Header = () => {
    const[show,setShow]=useState(true)

const handleShow =()=>{

   setShow(!show) 
}

  return (
    <div className='flex items-center justify-between h-[75px] w--full p-12  max-sm:p-2 '>
        
<div className=''>

<a className=' text-green-400 text-2xl font-bold     ' href='#'>Crypto Casino</a>


</div>

<div className='flex gap-5 items-center justify-center  '>

<ul className='flex gap-5 max-sm:hidden   '>
<li className='hover:text-slate-400'><a href='#'>Home</a></li>
<li><a href='#'>About</a></li>
<li><a href='#'>Contact</a></li>
<li><a href='#'>Market</a></li>

</ul>

<div className=' max-sm:hidden '>
<button className='flex font-bold capitalize bg-green-700 p-3 rounded-lg px-7  hover:opacity-80  '>SIGNUP</button>


</div>

<div onClick={handleShow} className='sm:hidden p-4 z-10'>
{
show ? <AiOutlineMenu size={25}/> : <ImCancelCircle size={22}/>


}


</div>



<ul className={show ? 'hidden' : 'flex flex-col h-screen w-full absolute top-0 left-0  sm:hidden items-center justify-center gap-20 bg-slate-500 text-[19px] font-bold'}>

<div className=' absolute top-4   '>
<button className='flex font-bold capitalize bg-green-700 p-3 rounded-lg px-7  hover:opacity-80  '>SIGNUP</button>


</div>

<li className='hover:text-slate-400'><a href='#'>Home</a></li>
<li className='hover:text-slate-400'><a href='#'>About</a></li>
<li className='hover:text-slate-400'><a href='#'>Contact</a></li>
<li className='hover:text-slate-400'><a href='#'>Market</a></li>






</ul>





</div>











    </div>
  )
}

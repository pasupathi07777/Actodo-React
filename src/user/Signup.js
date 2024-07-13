import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { arrProvider } from '../data/Dataprovider'


const Signup = () => {

    let  {setuserName,userName,userpass,setuserpass,handleSumit}=useContext(arrProvider)

  return (
    <div className="bg-black w-full ">

      <div className="flex flex-col gap-2 px-10 py-10 bg-white rounded-md ">

        <h1 className='font-semibold text-[24px]'>Hey Hi</h1>

        <p>I help you manage your activities after your login :)</p>

        <input type="text" className='border border-black rounded-md focus:outline-none px-2 py-1 max-w-[450px] ' placeholder='username' value={userName} onChange={(event)=>setuserName(event.target.value)} />

        <input type="password" className='border border-black rounded-md focus:outline-none px-2 py-1 max-w-[450px]' placeholder='password'    value={userpass} onChange={(event)=>setuserpass(event.target.value)} />

        <input type="password" className='border border-black rounded-md focus:outline-none px-2 py-1 max-w-[450px]' placeholder='confirm password' />

        <button type="button" className='w-fit px-2 py-1 bg-[#CA8201] rounded-md' onClick={()=>{handleSumit("signup")}}>Submit</button>

        <p>Alredy have a account ? <Link onClick={()=>{setuserName("");setuserpass("")}} to={'/'} className='underline' >Login</Link> </p>



      </div>
    </div>

  )
}

export default Signup
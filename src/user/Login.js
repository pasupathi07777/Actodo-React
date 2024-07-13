import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import  { arrProvider } from '../data/Dataprovider'
//{ userName, setuserName, userpass, setuserpass,handleSumit,alert,setalert }

const Login = () => {
  let { userName, setuserName, userpass, setuserpass,handleSumit,alert,setalert }=useContext(arrProvider)

  return (
    <div className="bg-black w-full ">

      <div className="flex flex-col gap-2 px-10 py-10 bg-white rounded-md ">
        <h1 className='font-semibold text-[24px]'>Hey Hi</h1>

       {alert? <p>I help you manage your activities after your login :)</p>:<p className='text-red-700'>Sign up First</p>}

        <input type="text" className='border border-black rounded-md focus:outline-none px-2 py-1 max-w-[450px] ' placeholder='username' value={userName} onChange={(event)=>setuserName(event.target.value)} />

        <input type="password" className='border border-black rounded-md focus:outline-none px-2 py-1 max-w-[450px]' placeholder='password'  value={userpass} onChange={(event)=>setuserpass(event.target.value)} />


        <button type="button" className='w-fit px-2 py-1 bg-[#685BAE] rounded-md' onClick={()=>{handleSumit("login")}}>Submit</button>

        <p>Don't have a account ? <Link onClick={()=>{setuserName("");setuserpass("");setalert(true)}} to={'/signup'} className='underline' >Sign up</Link> </p>




      </div>
    </div>
  )
}

export default Login
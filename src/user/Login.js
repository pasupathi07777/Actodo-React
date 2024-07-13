import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { arrProvider } from '../data/Dataprovider'
//{ userName, setuserName, userpass, setuserpass,handleSumit,alert,setalert }

const Login = () => {
  let { userName, setuserName, userpass, setuserpass, handleSumit, alert, setalert } = useContext(arrProvider)

  return (
    <div className="bg-black w-full h-[100vh] flex items-center px-3  overflow-hidden ">

      <div className="flex flex-col   bg-white rounded-md w-full px-3   py-10 sm:px-10 min-h-[350px]  ">
        <h1 className='font-semibold text-[24px] sm:text-[32px]'>Hey Hi</h1>

        {alert ? <p className='text-[14px] sm:text-[16px]' >I help you manage your activities after your login :)</p> : <p className='text-red-700'>Sign up First</p>}

        <div className="all-input flex flex-col gap-2 mt-3">
          <input type="text" className='border border-black rounded-md focus:outline-none px-2 py-1 max-w-[450px] ' placeholder='username' value={userName} onChange={(event) => setuserName(event.target.value)} />

          <input type="password" className='border border-black rounded-md focus:outline-none px-2 py-1 max-w-[450px]' placeholder='password' value={userpass} onChange={(event) => setuserpass(event.target.value)} />


          <button type="button" className='w-fit px-2 py-1 bg-blue-200 rounded-md' onClick={() => { handleSumit("login") }}>Submit</button>
        </div>

        <p className='mt-3'>Don't have a account ? <Link onClick={() => { setuserName(""); setuserpass(""); setalert(true) }} to={'/signup'} className='underline text-blue-600 font-semibold' >Sign up</Link> </p>




      </div>
    </div>
  )
}

export default Login
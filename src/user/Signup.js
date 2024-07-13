import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { arrProvider } from '../data/Dataprovider'


const Signup = () => {

  let { setuserName, userName, userpass, setuserpass, handleSumit } = useContext(arrProvider)

  return (
    <div className="bg-black w-full  h-[100vh] flex items-center px-3  justify-center  overflow-hidden">

      <div className="flex flex-col   px-3   py-10 bg-white rounded-md  w-full  sm:px-10 min-h-[350px] ">

        <h1 className='font-semibold text-[24px] sm:text-[32px]'>Hey Hi</h1>

        <p className=' text-[14px] sm:text-[16px]'>I help you manage your activities after your login :)</p>

        <div className="all-input flex flex-col  gap-2 mt-3">
          <input type="text" className='border border-black rounded-md focus:outline-none px-2 py-1 max-w-[450px] ' placeholder='username' value={userName} onChange={(event) => setuserName(event.target.value)} />

          <input type="password" className='border border-black rounded-md focus:outline-none px-2 py-1 max-w-[450px]' placeholder='password' value={userpass} onChange={(event) => setuserpass(event.target.value)} />

          <input type="password" className='border border-black rounded-md focus:outline-none px-2 py-1 max-w-[450px]' placeholder='confirm password' />

          <button type="button" className='w-fit px-2 py-1 bg-yellow-500 rounded-md' onClick={() => { handleSumit("signup") }}>Submit</button>
        </div>

        <p className='mt-2'>Alredy have a account ? <Link onClick={() => { setuserName(""); setuserpass("") }} to={'/'} className='underline text-blue-600 font-semibold' >Login</Link> </p>



      </div>
    </div>

  )
}

export default Signup
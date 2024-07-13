import React, { useContext } from 'react'
import { arrProvider } from '../data/Dataprovider'

const Userinput = () => {
    let {userInput,setUserInput,handleSumitTwo}=useContext(arrProvider)
    return (
        <div className="User-input flex rounded-md overflow-hidden border border-black ">
            <input type="text" placeholder='Next Activity?' value={userInput} className='focus:outline-none px-2 w-full py-2'  onChange={(event)=>setUserInput(event.target.value)
            }  />
            <input type="submit" value="Add" className='bg-black text-white px-4 py-2' onClick={handleSumitTwo} />
        </div>
    )
}

export default Userinput
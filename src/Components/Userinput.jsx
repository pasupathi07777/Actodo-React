import React, { useContext } from 'react'
import { arrProvider } from '../data/Dataprovider'

const Userinput = () => {
    let {userInput,setUserInput,handleSumitTwo}=useContext(arrProvider)
    return (
        <div className="User-input flex ">
            <input type="text" placeholder='Next Activity?' value={userInput} className='border border-black focus:outline-none px-1'  onChange={(event)=>setUserInput(event.target.value)
            }  />
            <input type="submit" value="Add" className='bg-black text-white px-1' onClick={handleSumitTwo} />
        </div>
    )
}

export default Userinput
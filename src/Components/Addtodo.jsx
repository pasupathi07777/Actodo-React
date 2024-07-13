import React, { useContext } from 'react'
import Userinput from './Userinput'
import { arrProvider } from '../data/Dataprovider';

const Addtodo = () => {
    const { handleSumit,userInput , setUserInput } = useContext(arrProvider);
    return (
        <div className=" flex flex-col gap-2">
            <h1 className='font-semibold text-[24px]'>Manage Activities</h1>
            <Userinput userInput={userInput} setUserInput={setUserInput} handleSumit={handleSumit} />


        </div>
    )
}

export default Addtodo
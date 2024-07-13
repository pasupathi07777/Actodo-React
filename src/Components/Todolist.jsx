import React, { useContext } from 'react'
import { arrProvider } from '../data/Dataprovider'

const Todolist = () => {
    let {display,handleDelete}=useContext(arrProvider)
    return (
        <div className="flex-grow bg-[#9890BC] p-2 border rounded-md">
            <h1 className='font-semibold text-[24px]'>Today Activity</h1>
           
                {
                    display.length? (
                        display.map((e, i) => (
                           <div className="flex justify-between " key={i}>
                             <p >{i+1 }.{e.detail}</p>
                             <button type="button" className='text-red-700' onClick={()=>handleDelete(e.id)}>Delete</button>
                           </div>
                        ))
                    ) : <p>no items</p>
                }
            
        </div>
    )
}

export default Todolist
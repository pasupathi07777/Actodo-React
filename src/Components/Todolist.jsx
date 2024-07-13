import React, { useContext } from 'react'
import { arrProvider } from '../data/Dataprovider'

const Todolist = () => {
    let { display, handleDelete, delIcon } = useContext(arrProvider)
    return (
        <div className="flex-grow bg-[#9890BC] p-2 border rounded-md">
            <h1 className='font-semibold text-[24px]'>Today Activity</h1>
            <div className="box flex flex-col gap-1 ">

                {
                    display.length ? (
                        display.map((e, i) => (
                            <div className="flex justify-between items-center  " key={i}>
                                <p  >{`${i + 1}. ${e.detail}`}</p>
                                <button type="button" className='text-red-700 flex justify-center items-center' onClick={() => handleDelete(e.id)}>
                                    <img className='w-5 cursor-pointer' src={delIcon} alt='
                                    delete' srcSet=''></img>

                                </button>
                            </div>
                        ))
                    ) : <p>empty</p>
                }
            </div>

        </div>
    )
}

export default Todolist
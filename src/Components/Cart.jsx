import React from 'react'
import cisx from 'clsx'

const Cart = ({e}) => {
  return (
    <div className={cisx(`bg-${e.bgColor} flex-grow text-center py-4 px-2   border rounded-md`)} style={{backgroundColor:e.bgColor}}>
        <h1 className='font-semibold text-[24px]'>{e.title}</h1>
        <p>{e.subTitle}</p>
    </div>
  )
}

export default Cart
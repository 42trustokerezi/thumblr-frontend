import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import './main.css'

const TopMenu = () => {
  return (
    <div className="top-menu h-24 bg-[#2c2a4a] grid grid-cols-3">
        <h3 className="col-span-2 text-xl text-white ml-2 mt-7">Platform Launch</h3>
        <div className="flex justify-evenly">
            <button className='h-12 mt-4 bg-[#6247aa] text-white px-6 font-light text-sm rounded-full'>+ Add a New Task</button>
            <div className="user-settings mt-7 fa-layers" 
            >
            <FontAwesomeIcon className="settings" icon={faEllipsisVertical} />
            </div>
        </div>
    </div>
  )
}

export default TopMenu
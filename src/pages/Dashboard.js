import React from 'react'
import Sidebar from '../components/Sidebar'
import Tasks from '../components/Tasks'
import TopMenu from '../components/TopMenu'

const Dashboard = () => {
  return (
    <div className="dashboard grid grid-cols-5 h-screen">
            <Sidebar/>
        <div className="bg-[#97dffc] col-span-4">
            <TopMenu/>
            <Tasks/>
        </div>
    </div>
  )
}

export default Dashboard
import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar-container bg-[#2c2a4a]">
        <div className="sidebar-wrapper w-64 pl-10">
        <div className="h-20 align-middle"><h1 className="text-3xl font-bold mt-5 text-white">Thumblr</h1></div>
        <section>
            <p className="font-thin text-white pb-3">All boards</p>
            <ul className="text-[#dee2e6]">
                <li className="pb-3">Platform Board</li>
                <li className="pb-3">Market Board</li>
                <li className="pb-3">Roadmap</li>
            </ul>
            <p className="pb-3 text-[#6247aa]">+ Create New Board</p>
        </section>
        </div>
    </div>
  )
}

export default Sidebar
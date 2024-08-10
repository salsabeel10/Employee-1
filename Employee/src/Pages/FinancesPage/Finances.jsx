import React from 'react'
import Header from '../../Components/Header'
import Sidebar2 from '../../Components/Sidebar2'

const Finances = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar*/}
      <Sidebar2 className="md:w-64" />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header className="p-4" />
      </div>
    </div>
  )
}

export default Finances

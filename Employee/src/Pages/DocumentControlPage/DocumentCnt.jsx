import React from 'react'
import Header from '../../Components/Header'
import Sidebar2 from '../../Components/Sidebar2'

const DocumentCnt = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar - Hidden on small screens, visible on medium screens and above */}
      <Sidebar2 className="md:w-64" />
      <div className="flex-1 flex flex-col">
        {/* Header takes full width */}
        <Header className="p-4" />
        {/* Form takes remaining space */}
      </div>
    </div>
  )
}

export default DocumentCnt

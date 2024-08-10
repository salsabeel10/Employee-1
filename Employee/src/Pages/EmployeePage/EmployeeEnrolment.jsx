import React from 'react'
import FormEmpEnroll from '../../Components/FormEmpEnroll'
import Sidebar2 from '../../Components/Sidebar2'
import Header from '../../Components/Header'
import ButtonEmp from './ButtonEmp'


const EmployeeEnrolment = () => {
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar2 className="md:w-64" />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header className="p-4" />
        <ButtonEmp />
        {/* Form */}
        <main className="flex-1 p-4">
          <FormEmpEnroll />
        </main>
      </div>
    </div>
  )
}

export default EmployeeEnrolment

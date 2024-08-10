import React from 'react'
import EmployeeEnrolment from './Pages/EmployeePage/EmployeeEnrolment'
import { Route, Routes, Navigate } from 'react-router-dom'
import ComputeSalary from './Pages/EmployeePage/ComputeSalary'
import TimeSheet from './Pages/TimeSheetPage/TimeSheet'
import Invoice from './Pages/InvoicePage/Invoice'
import ProjectInit from './Pages/ProjectInitiationPage/ProjectInit'
import ResourcePlan from './Pages/ResourcePlannerPage/ResourcePlan'
import DocumentCnt from './Pages/DocumentControlPage/DocumentCnt'
import Finances from './Pages/FinancesPage/Finances'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employee" replace />} />
      <Route exact path="/employee" element={<EmployeeEnrolment />} />
      <Route path="/employee/computeSalary" element={<ComputeSalary />} />
      <Route path="/timeSheetEntry" element={<TimeSheet />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/projectInitiation" element={<ProjectInit />} />
      <Route path="/resourcePlanner" element={<ResourcePlan />} />
      <Route path="/documentControl" element={<DocumentCnt />} />
      <Route path="/finances" element={<Finances />} />
    </Routes>
  )
}

export default App

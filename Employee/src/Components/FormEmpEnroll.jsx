import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDollarSign,
  faEye,
  faEyeSlash,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

const FormEmpEnroll = () => {
  const [isPassword, setIsPassword] = useState(true)
  const togglePasswordVisibility = () => {
    setIsPassword(!isPassword)
  }
  return (
    <div className="px-4 mt-1 w-full md:w-[90%]">
      <form className="p-3 border-2 border-blue-300">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Third Column - Employee Profile */}
          <div className="flex flex-col items-center order-1 lg:order-3">
            <label className="block text-black mb-2">Employee Picture</label>
            <div className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mb-4 bg-gray-300 rounded-full flex items-center justify-center">
              <span>Profile</span>
            </div>
            <button className="border text-gray-800 hover:bg-blue-100 px-4 py-2 rounded transition w-full md:w-auto">
              Upload Picture (300 X 250px)
            </button>
          </div>

          {/* First Column */}
          <div className="order-2">
            <div className="mb-4">
              <label className="block text-black">Employee Name</label>
              <input
                type="text"
                placeholder="Bond"
                className="w-full placeholder-gray-700 border rounded px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Joining Date</label>
              <input
                type="date"
                className="w-full text-gray-700 border rounded px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black ">Location</label>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Your Location"
                  className="w-full placeholder-gray-700 border rounded px-2 py-1 pr-10"
                />
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black">Division</label>
              <select className="w-full placeholder-gray-700 bg-white border rounded px-1 py-2">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-black ">Salary</label>
              <div className="relative w-full">
                <input
                  type="number"
                  placeholder="$9999"
                  className="w-full placeholder-gray-700  border rounded px-2 py-1 pr-10"
                />
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-2 btn px-4 py-2 rounded  w-full md:w-auto"
            >
              Save Employee
            </button>
          </div>

          {/* Second Column */}
          <div className="order-3 lg:order-2">
            <div className="mb-4">
              <label className="block text-black">Employee ID</label>
              <input
                type="number"
                placeholder="23343425445"
                className="w-full placeholder-gray-700 border rounded px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Designation</label>
              <input
                type="text"
                placeholder="primary bread"
                className="w-full placeholder-gray-700 border rounded px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Business Unit</label>
              <select className="w-full text-gray-700 bg-white border rounded px-2 py-2">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-black">Department</label>
              <select className="w-full text-gray-700 bg-white border rounded px-1 py-2">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="relative w-full">
              <label className="block text-black">Authorization Code</label>
              <div className="relative">
                <input
                  type={isPassword ? 'password' : 'text'}
                  placeholder="Enter Code"
                  className="w-full placeholder-gray-700 border rounded px-3 py-1 text-gray-700 pr-24 pl-4" // Adjust padding for the button
                />
                <FontAwesomeIcon
                  icon={isPassword ? faEyeSlash : faEye}
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-16 my-auto text-blue-500 cursor-pointer" // Position icon before button
                />
                <button className="absolute inset-y-0 right-0 btn text-sm px-3 py-1 rounded-sm">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormEmpEnroll

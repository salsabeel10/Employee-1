import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Support = () => {
  return (
    <div className="relative mt-1">
      <div className="absolute bottom-1 right-4 bg-[#6F73F6] text-white px-3 py-3 rounded-full shadow-lg cursor-pointer">
        <FontAwesomeIcon icon={faHeadset} size="lg" />
      </div>
    </div>
  )
}

export default Support
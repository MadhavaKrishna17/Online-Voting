import React from 'react'
import { IoMdTrash } from 'react-icons/io'
const ElectionCandidate = ({fullName, image, motto, id, party}) => {
  return (
   <li className="electionCandidate">
      <div className="electionCandidate__image">
        <img src={image} alt={fullName} />
        </div>
          <h5>{fullName}</h5>
          <small>{motto?.length > 50 ? motto.substring(0,50)+"...":motto}</small>
          <button className="electionCandidate__btn"><IoMdTrash /></button>
   </li>
  )
}

export default ElectionCandidate
import React from 'react'
import { useDispatch } from 'react-redux'
import { UiActions } from '../store/ui-slice'
import { voteActions } from '../store/vote-slice'

const Candidate = ({image, id, fullName, motto, party}) => {

   const dispatch = useDispatch()
    // close  confirm vote Modal
    const openCandidateModal = () =>{
        dispatch(UiActions.openVoteCandidateModal())
        dispatch(voteActions.changeSelectedVoteCandidate(id))



    }
  return (
     <article className="candidate">
        <diV className="candidate__image">
            <img src={image} alt={fullName}/>
        </diV>
        <h5>{fullName?.length > 20 ? fullName.substring(0,20)+ "..." : fullName}</h5>
        <h3>[{party}]</h3>
        <small>{motto?.length > 40 ? motto.substring(0,40)+ "..." : motto}</small>
        <button className="btn primary" onClick={openCandidateModal}>Vote</button>
 
     </article>
  )
}

export default Candidate
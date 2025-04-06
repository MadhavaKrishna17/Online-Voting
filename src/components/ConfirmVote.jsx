import React, { useEffect, useState } from 'react'
import { candidates } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { UiActions } from '../store/ui-slice'

 const ConfirmVote = () => {
    const [modalCandidate, setModalCandidate] = useState({})

    const dispatch = useDispatch()
    // close  confirm vote Modal
    const closeCandidateModal = () =>{
        dispatch(UiActions.closeVoteCandidateModal())
    }



    //get selected candidate id from redux store

    const selectedVoteCandidate = useSelector(state => state.vote.selectedVoteCandidate)


   //get the selected Candidate
   const fetchCandidate = ()=>{
    candidates.find(candidate => {
        if(candidate.id===selectedVoteCandidate){
            setModalCandidate(candidate)
        }

    })
   }

   useEffect(()=>{
        fetchCandidate()
   }, [])


  return (
         <section className="modal">
            <div className="modal__content confirm__vote-content">
                <h5>Please confirm your vote.</h5>
                <div className="confirm__vote-image"> 
                    <img src = {modalCandidate.image} alt={modalCandidate.fullName} />
                </div>
                <h2>{modalCandidate?.fullName?.length > 20 ? modalCandidate?.fullName?.sustring(0,20)+ "...":modalCandidate?.fullName}</h2>
                <h3>{modalCandidate.party}</h3>
                <p>{modalCandidate?.motto?.length > 40 ? modalCandidate?.motto?.sustring(0,40)+ "...":modalCandidate?.motto}</p>
                <div className="confirm__vote-cta">
                    <button className="btnteritary" onClick={closeCandidateModal}>Cancel</button>
                    <button className="btnsecondary">Confirm</button>
                </div>
            </div>
         </section>
  )

}

export default ConfirmVote
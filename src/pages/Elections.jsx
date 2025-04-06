import React, { useState } from 'react'
import { elections as dummyElections } from '../data'
import Election from '../components/Election'
import AddElectionModal from '../components/AddElectionModal'
import {useDispatch, useSelector} from 'react-redux'
import { UiActions } from '../store/ui-slice'


const Elections = () => {
  const [elections, setElections] = useState(dummyElections)
  const dispatch = useDispatch()

  // open add election model
  const openModal = () => {
    dispatch(UiActions.openElectionModal())
  }


  const electionModalShowing = useSelector(state => state.ui.electionModalShowing)

  return (
    <>
     <section className="elections">
      <div className="container elections__container">
        <h2>A Leader is one who knows the way, goes the way and shows the way...</h2>
        <h3> So vote your "<span style={{ color: "red" }}>X</span>" wisely....</h3>
        <header className="elections__header">
          <h1>Ongoing Elections</h1>
          <button className="btn primary" onClick={openModal}>Create New Election</button>

        </header>
        <menu className="elections__menu">
          {
            elections.map(election => <Election key={election.id} {...election}/>)
          }
        </menu>
      </div>

     </section>
     {electionModalShowing && <AddElectionModal /> }

     
     </>
  )
}

export default Elections
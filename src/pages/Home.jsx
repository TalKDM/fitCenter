import React from 'react'
import Navbar from '../components/Navbar'
import News from '../components/News'

const Home = (props) => {
  return (
    <div className='mainHomeDiv'>
      <div className="secondHomeDiv">
        <div className="upperHomeDiv">
          <News currentUser={props.currentUser} sortedWorkoutDates={props.sortedWorkoutDates} setSortedWorkoutDates={props.setSortedWorkoutDates}/>
        </div>
      </div>
    </div>
  )
}

export default Home
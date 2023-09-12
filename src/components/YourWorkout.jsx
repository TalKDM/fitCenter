import React, { useState } from 'react'
import '../style/yourWorkout.css'

const YourWorkout = (props) => {
    const [change,setChange] = useState(false)
    const ex = props.currentUser.workoutPlan.map(x => x)

    const handleChange = () => {
        setChange(!change)
    }




  return (
    <div className='mainYourWorkoutDiv'>
        <div className="secondYourWorkout">
            <div className="displayWorkout">
                {
                    props.currentUser.workoutPlan.length < 1 ?
                    <h1>No workouts!</h1>
                    :
                    props.currentUser.workoutPlan.map((val,index) => {
                        const deleteWorkout = () => {
                            const item = props.currentUser.workoutPlan[index]
                            const deleteWorkout = props.currentUser.workoutPlan.filter(x => x !== item)
                            props.currentUser.workoutPlan = deleteWorkout
                            props.setCurrentUser(props.currentUser)
                            props.notify3()
                            handleChange()
                        }
                        return (
                            <div className="workoutSquare" key={index}>
                                <div className="workoutSquareTitle">
                                <h1>{val[0]}</h1>
                                <button onClick={deleteWorkout}>X</button>
                                </div>
                                <h3>{val[1]}</h3>
                                <h3>{val[2]}</h3>
                                <h3>{val[3]}</h3>
                                <h3>{val[4]}</h3>
                                <h3>{val[5]}</h3>
                                <h3>{val[6]}</h3>
                                <h3>{val[7]}</h3>
                                <h3>{val[8]}</h3>
                                <h3>{val[9]}</h3>
                                <h3>{val[10]}</h3>

                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    </div>
  )
}

export default YourWorkout

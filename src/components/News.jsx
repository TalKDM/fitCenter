import React from 'react'
import '../style/news.css'
import { useNavigate } from 'react-router-dom'

const News = (props) => {
    const nav = useNavigate();



  return (
    <div className='newsMainDiv'>
        <div className="secondMainDiv">
            <div className="newsHeader">
                <div className="welcomeHeader">
                <h1>Welcome to</h1>
                <h1 className='fitCenter'>Fit-Center</h1>
                </div>
                <p>Where you can view your workouts history,and build your own personal workout plan!</p>
            </div>
            <div className="latestWorkoutNews">
            <h1>your latest workout:</h1>
                {props.currentUser.workouts.length > 0 ?
                    props.currentUser.workouts.map((val,index) => {
                        const newestWorkout = () => {
                            if(val.new === true) {
                                return val.workoutDate
                            }else {
                                return;
                            }
                        };
                        return (
                            <div className="latestWorkoutBtn">
                                <button onClick={() => {nav('/WorkoutLog')}}>{newestWorkout()}</button>
                            </div>
                        )
                    })
                    :
                    <h2> No workout's found,Start workout!🏋🏻</h2>
                }
            </div>
        </div>  
    </div>
  )
}

export default News
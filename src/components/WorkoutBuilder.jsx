import React, { useState } from 'react'
import '../style/workoutBuilder.css'
import FullBodyWorkout from './FullBodyWorkout';
import WorkoutAb from './WorkoutAb';
import WorkoutAbc from './WorkoutAbc';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const WorkoutBuilder = (props) => {
    const [currentWorkout,setCurrentWorkout] = useState('');
    const typeOfWorkout = ['Full Body','AB','ABC'];
    const [newWorkoutPlan,setNewWorkoutPlan] = useState([]);


    const limitEx = () => {
        if(newWorkoutPlan.length >= 10) {
            alert("Full Body workout has a limit of 10 exercises!")
        }
    }
    limitEx()

    const createNewWorkout = () => {
        const newWorkout = newWorkoutPlan.map(x => x.exerciseName)
        newWorkout.unshift(currentWorkout+' workout')
        const workoutToObj = Object.assign({}, newWorkout)
        props.currentUser.workoutPlan.push(workoutToObj)
        console.log(props.currentUser.workoutPlan);
        setNewWorkoutPlan([]);
        props.notify2()
    }

  return (
    <div className='mainWorkoutBuilderDiv'>
        <div className="secondWorkoutBuilder">
            <div className="chooseOptions">
            <h2>Choose your type of workout:</h2>
          {
            typeOfWorkout.map((val,index) => {

                const catchWorkout = () => {
                    if(val === 'Full Body') {
                        setCurrentWorkout('Full Body');
                    }else if(val === 'AB') {
                        setCurrentWorkout('AB');
                    }else if(val === 'ABC') {
                        setCurrentWorkout('ABC');
                    }
                };

              return (
                <div className="chooseWorkoutBtn">
                <button onClick={catchWorkout}>{val}</button>
                </div>
              )
            })
          }
            </div>
            <div className="displayCurrentWorkout">
                {
                    currentWorkout === 'Full Body' &&
                    <FullBodyWorkout setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} newWorkoutPlan={newWorkoutPlan} setNewWorkoutPlan={setNewWorkoutPlan}/>
                }
                {
                    currentWorkout === 'AB' &&
                    <WorkoutAb currentUser={props.currentUser}/>
                }
                {
                    currentWorkout === 'ABC' &&
                    <WorkoutAbc currentUser={props.currentUser}/>
                }
            </div>
            <div className="arrow">
                <h1>⇩</h1>
                </div>
                {
                currentWorkout === '' ?
                <p></p>
                :
                <div className="workoutDiv">
                    <div className="titleWorkoutDiv">
                        {
                            currentWorkout === 'Full Body' &&
                            <h1>Full Body Workout</h1>
                        }
                        {
                            currentWorkout === 'AB' &&
                            <h1>AB Workout</h1>
                        }
                        {
                            currentWorkout === 'ABC' &&
                            <h1>ABC Workout</h1>
                        }
                        {
                            newWorkoutPlan.length === 0 ?
                            <h2 style={{color:"white"}}>Start Add Exercises!</h2>
                            :
                            newWorkoutPlan.map((val,index) => {
                                index += 1
                                return (
                                <div className="workoutDisplaySquare" >
                                <h2 className='numberEx'>({index})</h2>
                                <Popup
                                trigger={<button>{val.exerciseName}</button>}
                                position="top center"
                                nested
                                >
                                <div className="popUpEx">
                                    <h2>{val.exerciseName}</h2>
                                    <img src={val.exerciseImg.img} width="180px" style={{borderRadius:"20px"}}/>
                                    <p>1){val.exerciseInstructions.stepOne}</p>
                                    <p>2){val.exerciseInstructions.stepTwo}</p>
                                    <p>3){val.exerciseInstructions.stepThree}</p>
                                </div>
                                </Popup>
                                </div>
                                )
                            })
                        }
                    </div>
                    <div className="buttonCreateNewWorkout">
                        {
                            newWorkoutPlan.length > 0 &&
                            <button onClick={createNewWorkout}>Create New Workout</button>
                        }
                    </div>
                </div>
                }
        </div>
    </div>
  )
}

export default WorkoutBuilder


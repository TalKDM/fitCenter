import React, { useState } from 'react'
import '../style/workoutLog.css'


const WorkoutLog = (props) => {
    const [exercises,setExercises] = useState();
    const [openWorkout,setOpenWorkout] = useState(false);
    const [openWeight,setOpenWeight] = useState(false);
    const [exerciseWeight,setExerciseWeight] = useState({})



    const handleOpenWorkout = () => {
        setOpenWorkout(!openWorkout)
    }

    const handleOpenWeight = () => {
        setOpenWeight(!openWeight)
    }


    const openCurrentExercises = (index) => {
        setOpenWorkout(true)
        const userExercises = props.currentUser.workouts[index]
        setExercises(userExercises.exercises)    
    }

    const searchExercise = (index) => {
        const exactEx = props.exercisesLab.find(x => x.name === exercises[index].exercise)
        window.open(
            exactEx.link
        )
    };

    
  return (
    <div className='mainWorkoutLog'>
        <div className="secondWorkoutLog">
        <div className="title">
            <h1>Workout Log</h1>
        </div>
        <div className="latestWorkout">
            <h2>Latest workouts:</h2>
            {
                props.currentUser.workouts.length === 0 ?
                <div className="workoutDateDiv">
                    <h2>No workout's to display</h2>
                </div>
                :
                props.currentUser.workouts.map((val,index) => {
                    return (
                        <div className="workoutDateDiv" key={index}>
                            <button onClick={() => {openCurrentExercises(index)}}>{val.workoutDate}</button>
                        </div>
                    )
                })
            }
        </div>
        {
                openWorkout && exercises.map((val,index) => {
                    const two = val
                    const addWeightFun = (e) => {
                        let addWeight = exercises[index].weight
                        addWeight.push({
                            weight: exerciseWeight
                        })
                        setExercises([...exercises])
                        handleOpenWeight()
                    };
                    return (
                        <div className="exerciseDiv" key={index}>
                            <div className="exerciseName" key={index}>
                            <h3>Exercise name:</h3>
                            <button onClick={() => {searchExercise(index)}}>{val.exercise}</button>
                            </div>
                            <h3>Sets: {val.sets}</h3>
                            <img src={val.image} width="120px" style={{borderRadius:"50%",border:"3px solid #03045E"}}/>
                            <button className='openWeightSectionBtn' onClick={handleOpenWeight}>Add weight</button>
                            {openWeight &&
                            <div className="addWeight">
                                <label htmlFor="Weight">Weight:</label>
                                <input type="number" name='Weight' placeholder='Enter:' onChange={(e) => {setExerciseWeight(e.target.value)}}/>
                                <p>KG</p>
                                <div className="addKgBtn">
                                <button onClick={addWeightFun}>+</button>
                                </div>
                            </div>
                }
                            {val.weight.length === 0 ?
                            <h4 style={{letterSpacing:"1px",color:"red"}}>Add weight to the exercise!</h4>
                            :
                            val.weight.map((val,index) => {
                                const changeWeight = () => {
                                    const filter = two.weight.filter(x => x !== val)
                                    two.weight = filter
                                    setExercises([...exercises])
                                }
                                index += 1
                                return (
                                    <div className="exerciseWeightNumber">
                                        <p>Set:{index}</p>
                                    <h5>{val.weight} KG</h5>
                                    <button onClick={() => {changeWeight()}}>X</button>
                                    </div>
                                )
                            })
                        }
                        </div>
                    )
                })
            }
            {
                openWorkout &&
                <div className="exerciseCloseDiv">
                    <button className='CloseBtn' onClick={handleOpenWorkout}>Close</button>
                </div>
            }
        </div>
    </div>
  )
}

export default WorkoutLog
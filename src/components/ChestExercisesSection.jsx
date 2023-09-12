import React, { useState } from 'react'
import '../style/chestExercisesSection.css'




const ChestExercisesSection = (props) => {
    const [resistance,setResistance] = useState("");
    const formOfResistance = ['Body weight','Free Weight','Machine','Cable'];






  return (
    <div className='mainChestExercisesSection'>
        <div className="secondChestExercisesSection">
            <div className="titleChestExercisesSection">
                <h1>Chest Exercises</h1>
            </div>
            <div className="formOfResistanceDiv">
                <h2>Choose your Exercise resistance:</h2>
                <div className="formOfResistanceDivButtons">
                {
                    formOfResistance.map((val,index) => {
                        const chooseResistance = () => {
                            if(val === 'Body weight') {
                                setResistance('Body weight');
                            }else if(val === 'Free Weight') {
                                setResistance('Free Weight');
                            }else if(val === 'Machine') {
                                setResistance('Machine');
                            }else if(val === 'Cable') {
                                setResistance('Cable');
                            }
                        }
                        return (
                            <>
                            <button onClick={chooseResistance}>{val}</button>
                            </>
                        )
                    })
                }
                </div>
            </div>
            <div className="showChosenExercises">
                {
                    resistance === 'Body weight' &&
                    <div className="bodyWeightExerciseDiv">
                        {
                            props.muscleGroup.filter(x => x.howToDo === "body weight").map((val,index) => {
                                const addToFavExercises = () => {
                                    props.currentUser.favExercises.push(val);
                                    props.notify()
                                }
                                return (
                                    <div className="bodyWeightExerciseSquare" key={index}>
                                    <h2>{val.exerciseName}</h2>
                                    <img src={val.exerciseImg.img} width="200px" style={{borderRadius:"25%",border:"3px solid #03045E"}}/>
                                    <div className="exerciseExp">
                                    <h4><p>Step 1 :</p> {val.exerciseInstructions.stepOne}</h4>
                                    <h4><p>Step 2 :</p> {val.exerciseInstructions.stepTwo}</h4>
                                    <h4><p>Step 3 :</p> {val.exerciseInstructions.stepThree}</h4>
                                    </div>
                                    <div className="favBtn">
                                    <button onClick={addToFavExercises}>Add to favorite exercises</button>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                }
                {
                    resistance === 'Free Weight' &&
                    <div className="bodyWeightExerciseDiv">
                        {
                            props.muscleGroup.filter(x => x.howToDo === "free weight").map((val,index) => {
                                const addToFavExercises = () => {
                                    props.currentUser.favExercises.push(val);
                                    props.notify()
                                }
                                return (
                                    <div className="bodyWeightExerciseSquare" key={index}>
                                    <h2>{val.exerciseName}</h2>
                                    <img src={val.exerciseImg.img} width="200px" style={{borderRadius:"25%",border:"3px solid #03045E"}}/>
                                    <div className="exerciseExp">
                                    <h4><p>Step 1 :</p> {val.exerciseInstructions.stepOne}</h4>
                                    <h4><p>Step 2 :</p> {val.exerciseInstructions.stepTwo}</h4>
                                    <h4><p>Step 3 :</p> {val.exerciseInstructions.stepThree}</h4>
                                    </div>
                                    <div className="favBtn">
                                    <button onClick={addToFavExercises}>Add to favorite exercises</button>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                }
                {
                    resistance === 'Machine' &&
                    <div className="bodyWeightExerciseDiv">
                        {
                            props.muscleGroup.filter(x => x.howToDo === "machine").map((val,index) => {
                                const addToFavExercises = () => {
                                    props.currentUser.favExercises.push(val);
                                    props.notify()
                                }
                                return (
                                    <div className="bodyWeightExerciseSquare" key={index}>
                                    <h2>{val.exerciseName}</h2>
                                    <img src={val.exerciseImg.img} width="200px" style={{borderRadius:"25%",border:"3px solid #03045E"}}/>
                                    <div className="exerciseExp">
                                    <h4><p>Step 1 :</p> {val.exerciseInstructions.stepOne}</h4>
                                    <h4><p>Step 2 :</p> {val.exerciseInstructions.stepTwo}</h4>
                                    <h4><p>Step 3 :</p> {val.exerciseInstructions.stepThree}</h4>
                                    </div>
                                    <div className="favBtn">
                                    <button onClick={addToFavExercises}>Add to favorite exercises</button>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                }
                {
                    resistance === 'Cable' &&
                    <div className="bodyWeightExerciseDiv">
                        {
                            props.muscleGroup.filter(x => x.howToDo === "cable").map((val,index) => {
                                const addToFavExercises = () => {
                                    props.currentUser.favExercises.push(val);
                                    props.notify()
                                }
                                return (
                                    <div className="bodyWeightExerciseSquare" key={index}>
                                    <h2>{val.exerciseName}</h2>
                                    <img src={val.exerciseImg.img} width="200px" style={{borderRadius:"25%",border:"3px solid #03045E"}}/>
                                    <div className="exerciseExp">
                                    <h4><p>Step 1 :</p> {val.exerciseInstructions.stepOne}</h4>
                                    <h4><p>Step 2 :</p> {val.exerciseInstructions.stepTwo}</h4>
                                    <h4><p>Step 3 :</p> {val.exerciseInstructions.stepThree}</h4>
                                    </div>
                                    <div className="favBtn">
                                    <button onClick={addToFavExercises}>Add to favorite exercises</button>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default ChestExercisesSection
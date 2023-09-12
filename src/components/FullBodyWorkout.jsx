import React, { useState } from 'react'
import '../style/workout.css'

const FullBodyWorkout = (props) => {



  return (
    <div className='mainFullBodyWorkoutDiv'>
        <div className="secondFullBodyWorkout">
            <div className="chooseFavEx">
                <div className="favExTitle">
                <h1>favorite exercises</h1>
                </div>
                <div className="listCon">
                <div className="favExList">
                <h4>Legs Exercises</h4>
                    {
                        props.currentUser.favExercises.map((val,index) => {
                            const legsEx = val.targetMuscle === 'Legs'
                            const pickExercises = () => {
                                props.setNewWorkoutPlan([...props.newWorkoutPlan, val])
                                const filter = props.currentUser.favExercises.filter(x => x.exerciseName !== val.exerciseName)
                                props.currentUser.favExercises = filter
                            }
                            return (
                                <div className="favList">
                                {legsEx &&
                                <>
                                <button onClick={pickExercises}>{val.exerciseName}</button>
                                </>}
                                </div>
                            )
                        })
                    }
                    <h4>Back Exercises</h4>
                    {
                        props.currentUser.favExercises.map((val,index) => {
                            const backEx = val.targetMuscle === 'Back'
                            const pickExercises = () => {
                                props.setNewWorkoutPlan([...props.newWorkoutPlan, val])
                                const filter = props.currentUser.favExercises.filter(x => x.exerciseName !== val.exerciseName)
                                props.currentUser.favExercises = filter
                            }
                            return (
                                <div className="favList">
                                {backEx &&
                                <>
                                <button onClick={pickExercises}>{val.exerciseName}</button>
                                </>}
                                </div>
                            )
                        })
                    }
                    <h4>Chest Exercises</h4>
                    {
                        props.currentUser.favExercises.map((val,index) => {
                            const chestEx = val.targetMuscle === 'Chest'
                            const pickExercises = () => {
                                props.setNewWorkoutPlan([...props.newWorkoutPlan, val])
                                const filter = props.currentUser.favExercises.filter(x => x.exerciseName !== val.exerciseName)
                                props.currentUser.favExercises = filter
                            }
                            return (
                                <div className="favList">
                                {chestEx &&
                                <>
                                <button onClick={pickExercises}>{val.exerciseName}</button>
                                </>}
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="favExList2">
                    <h4>Shoulders Exercises</h4>
                    {
                        props.currentUser.favExercises.map((val,index) => {
                            const shouldersEx = val.targetMuscle === 'Shoulders'
                            const pickExercises = () => {
                                props.setNewWorkoutPlan([...props.newWorkoutPlan, val])
                                const filter = props.currentUser.favExercises.filter(x => x.exerciseName !== val.exerciseName)
                                props.currentUser.favExercises = filter
                            }
                            return (
                                <div className="favList">
                                {shouldersEx &&
                                <>
                                <button onClick={pickExercises}>{val.exerciseName}</button>
                                </>}
                                </div>
                            )
                        })
                    }
                    <h4>Arms Exercises</h4>
                    {
                        props.currentUser.favExercises.map((val,index) => {
                            const armsEx = val.targetMuscle === 'Arms'
                            const pickExercises = () => {
                                props.setNewWorkoutPlan([...props.newWorkoutPlan, val])
                                const filter = props.currentUser.favExercises.filter(x => x.exerciseName !== val.exerciseName)
                                props.currentUser.favExercises = filter
                            }
                            return (
                                <div className="favList">
                                {armsEx &&
                                <>
                                <button onClick={pickExercises}>{val.exerciseName}</button>
                                </>}
                                </div>
                            )
                        })
                    }
                    <h4>Abs Exercises</h4>
                    {
                        props.currentUser.favExercises.map((val,index) => {
                            const absEx = val.targetMuscle === 'Abs'
                            const pickExercises = () => {
                                props.setNewWorkoutPlan([...props.newWorkoutPlan, val])
                                const filter = props.currentUser.favExercises.filter(x => x.exerciseName !== val.exerciseName)
                                props.currentUser.favExercises = filter
                            }
                            return (
                                <div className="favList">
                                {absEx &&
                                <>
                                <button onClick={pickExercises}>{val.exerciseName}</button>
                                </>}
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullBodyWorkout

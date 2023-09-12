import React, { useState } from 'react'
import '../style/exerEncy.css'
import Popup from 'reactjs-popup';
import ChestExercisesSection from '../components/ChestExercisesSection';
import LegsExercisesSection from '../components/LegsExercisesSection';
import 'reactjs-popup/dist/index.css';
import WorkoutBuilder from '../components/WorkoutBuilder';
import { SearchExerciseBar } from '../components/SearchExerciseBar';
import BackExercisesSection from '../components/BackExercisesSection';
import YourWorkout from '../components/YourWorkout';


const ExerciseEncyclopedia = (props) => {
    const [muscleGroup,setMuscleGroup] = useState([]);
    const [openFavExercises,setOpenFavExercises] = useState(false);




    const handleOpenFavExercises = () => {
        setOpenFavExercises(!openFavExercises);
    } 

    

    const muscles = ['Legs','Back','Chest','Shoulders','Arms','Abs'];

  return (
    <div className='mainEncyDiv'>
        <div className="secondEncyDiv">
            <div className="musclesButtons">
                {
                    muscles.map((val,index) => {
                        const showMuscleGroup = () => {
                            if(val === 'Chest') {
                                setMuscleGroup(props.chestExercises)
                            }else if(val === 'Legs') {
                                setMuscleGroup(props.legsExercises)
                            }else if(val === 'Back') {
                              setMuscleGroup(props.backExercises)
                            }
                        }
                        return (
                            <div className="bodyPartsButtons" key={index}>
                                <button onClick={showMuscleGroup}>{val}</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className="searchBarSection">
              <SearchExerciseBar allExercises={props.allExercises} setFoundSearchEx={props.setFoundSearchEx}/>
            </div>
            <div className="favExercises">
            <Popup
                trigger={<button>Your Workout's</button>}
                modal
                nested
                >
                        {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Your Workout's</div>
        <div className="content">
          <YourWorkout notify3={props.notify3} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser}/>
        </div>
      </div>
    )}
  </Popup>
                <Popup
                trigger={<button>Create New Workout</button>}
                modal
                nested
                >
                        {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Workout Builder</div>
        <div className="content">
          <WorkoutBuilder notify2={props.notify2} currentUser={props.currentUser}/>
        </div>
      </div>
    )}
  </Popup>
            </div>
            <div className="showFavoriteExercises">
            </div>
            <div className="displayExercises">
                {
                    muscleGroup.length === 0 &&
                    <>
                    <h1>Choose Muscle Group!</h1>
                    </>
                }
                {
                    muscleGroup.find(x => x.targetMuscle === 'Chest') &&
                    <div className="chestExercisesDiv">
                    <ChestExercisesSection notify={props.notify} favExercise={props.favExercise} setFavExercise={props.setFavExercise} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} chestExercises={props.chestExercises} setMuscleGroup={setMuscleGroup} muscleGroup={muscleGroup}/>
                    </div>
                }
                {
                    muscleGroup.find(x => x.targetMuscle === 'Legs') &&
                    <div className="chestExercisesDiv">
                    <LegsExercisesSection notify={props.notify} favExercise={props.favExercise} setFavExercise={props.setFavExercise} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} chestExercises={props.chestExercises} setMuscleGroup={setMuscleGroup} muscleGroup={muscleGroup}/>
                    </div>
                }
                {
                    muscleGroup.find(x => x.targetMuscle === 'Back') &&
                    <div className="chestExercisesDiv">
                    <BackExercisesSection notify={props.notify} favExercise={props.favExercise} setFavExercise={props.setFavExercise} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} chestExercises={props.chestExercises} setMuscleGroup={setMuscleGroup} muscleGroup={muscleGroup}/>
                    </div>
                }
            </div>
        </div>
        
    </div>
  )
}

export default ExerciseEncyclopedia


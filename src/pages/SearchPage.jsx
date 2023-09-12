import React from 'react'
import '../style/searchPage.css'
import { useNavigate } from 'react-router-dom'

const SearchPage = (props) => {
    const nav = useNavigate();

  return (
    <div className='mainSearchPageDiv'>
        <div className="secondSearchPage">
            <button onClick={() => {nav('/ExerciseEncyclopedia')}} className='backBtn'>⇦Back</button>
        <div className="foundExerciseDiv">
        <h2>{props.foundSearchEx.exerciseName}</h2>
        <img src={props.foundSearchEx.exerciseImg.img} width="200px" style={{borderRadius:"25%",border:"3px solid #03045E"}}/>
        <div className="exerciseExp">
        <h4><p>Step 1 :</p> {props.foundSearchEx.exerciseInstructions.stepOne}</h4>
        <h4><p>Step 2 :</p> {props.foundSearchEx.exerciseInstructions.stepTwo}</h4>
        <h4><p>Step 3 :</p> {props.foundSearchEx.exerciseInstructions.stepThree}</h4>
        </div>
        </div> 
        </div>
    </div>
  )
}

export default SearchPage
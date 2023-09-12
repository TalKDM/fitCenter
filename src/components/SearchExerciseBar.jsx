import React, { useState } from 'react'
import '../style/searchBar.css'
import { backExercises } from '../assets/backExercises'
import { chestExercises } from '../assets/chestExercises'
import { legsExercises } from '../assets/legsExercises'
import { useNavigate } from 'react-router-dom'


export const SearchExerciseBar = (props) => {
    const [searchTerm,setSearchTerm] = useState('');

    const nav = useNavigate()


  return (
    <div className='mainSearchBarDiv'>
        <div className="secondSearchBar">
            <input type="text" placeholder='Search Exercise:'  onChange={(e) => {setSearchTerm(e.target.value)}}/>
            <div className="resultEx">
            {
            props.allExercises.filter((val) => {
                if ( searchTerm === "") {
                    return 
                }else if (val.exerciseName.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val,index) => {
                const pickSearchEx = () => {
                    props.setFoundSearchEx(val)
                    nav(`/SearchPage/${val.exerciseName}`)
                }
                return (
                    <div key={index} className='exerciseNameSearchBar'>
                        <button onClick={pickSearchEx}>{val.exerciseName}</button>
                        <img onClick={pickSearchEx} src={val.exerciseImg.img} width="70px" />
                    </div>
                )
            })
            }
            </div>
        </div>
    </div>
  )
}


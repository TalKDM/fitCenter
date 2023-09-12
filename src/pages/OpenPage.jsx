import React, { useState } from 'react'
import '../style/openPage.css'
import Logo from '../assets/img/FitCenterLogo.png'
import { useNavigate } from 'react-router-dom'
import {ArrowCircleLeft} from 'phosphor-react'

const OpenPage = (props) => {
    const [logIn,setLogIn] = useState(false);
    const nav = useNavigate()

    const userLogIn = () => {
        setLogIn(!logIn)
    } ;

    const back = () => {
        setLogIn(!logIn)
    }

    const logInUser = () => {
        const userExist = props.allUsers.find(x => x.email === props.email);
        if(props.email === 'admin' || props.password === 'admin') {
            const admin = {
                fullName: 'admin',
                email: props.email,
                gender: 'GOD',
                password: props.password,
                workouts: [{
                    workoutDate: '12/08/2023',
                    new: false,
                    exercises: [
                        {
                            exercise: 'chest press with barbell',
                            sets: '4 of 10',
                            image: "https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg",
                            weight: []
                        },
                        {
                            exercise: 'goblet squat',
                            sets: '4 of 10',
                            image: "https://static.strengthlevel.com/images/illustrations/goblet-squat-1000x1000.jpg",
                            weight: []
                        },
                    ]
                },
                {
                    workoutDate: '22/08/2023',
                    new: true,
                    exercises: [
                        {
                            exercise: 'Dumbbell row',
                            sets: '4 of 10',
                            image: "https://static.strengthlevel.com/images/illustrations/dumbbell-row-1000x1000.jpg",
                            weight: []
                        },
                        {
                            exercise: 'Leg press',
                            sets: '4 of 10',
                            image: "https://static.strengthlevel.com/images/illustrations/sled-leg-press-1000x1000.jpg",
                            weight: []
                        },
                    ]
                }
            
            ],
                favExercises: [],
                workoutPlan: [],
                inbox: [
                    {
                        new: true,
                        title: 'New workout has added',
                        content: `the workout of 06/09/2023 had been added to your workout log.`
                    },
                    {
                        new: false,
                        title: 'New workout has added',
                        content: `the workout of 01/09/2023 had been added to your workout log.`
                        
                    },
                    {
                        new: false,
                        title: 'Where are you?',
                        content: `bla bla bla bla!🐶💩🐩.`
                        
                    }
                ]
            }
            props.setCurrentUser(admin);
            props.setAllUsers(admin);
            nav('/Home')
        }else if(!userExist) {
          alert(`${props.email} does not exist in the system!`);
        }else if(userExist.password !== props.password) {
          alert('incorrect password!')
        }else {
        props.setCurrentUser(userExist)
        nav('/Home')
        }
    };




  return (
    <div className='mainOpenPageDiv'>
            <div className="secondOpenPageDiv">
            <div className="welcome">
                <h1>Welcome</h1>
                {
                logIn === true && 
                <div className="backButtonDiv">
                <button onClick={back} className='backButton'><ArrowCircleLeft size={56} color="#00B4D8" weight="fill" /></button>
                </div>
                }
            </div>
            <div className="openPageLogo">
                <img src={Logo} width="70%"/>
            </div>
            <div className="openPageButtons">
                {
                    logIn === false ? 
                    <>
                    <button onClick={userLogIn}>Log in</button>
                    <button onClick={() => {nav('/Register')}}>Register</button>
                    </>
                    :
                    <div className="logInInput">
                    <input type="text" placeholder='Enter your email:' onChange={(e) => {props.setEmail(e.target.value)}}/><br/>
                    <input type="password"  placeholder='Enter your password:' onChange={(e) => {props.setPassword(e.target.value)}}/><br/>
                    <button onClick={logInUser}>Log in</button>
                    </div>
                }
            </div>
            </div>
    </div>
  )
}

export default OpenPage
import React from 'react'
import '../style/register.css'
import Logo from '../assets/img/FitCenterLogo.png'
import { useNavigate } from 'react-router-dom'

const Register = (props) => {
    const nav = useNavigate();

    const fullName = props.fullName
    const email = props.email
    const gender = props.gender
    const birthday = props.birthday
    const password = props.password

    const fetchRegisterNewUser = () => {
        fetch('/Register',{
          method:"post",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({fullName,email,gender,birthday,password})
        }).then(res => res.json()).then(data => {
          if(data.msg === 'ok') {
            alert(`Welcome ${fullName} to Fit-Center`)
            nav('/')
          }else {
            alert('Error!')
          }
        })
      };

    const registerNewUser = () => {
        const errors = {};
        const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        const emailRegex = /@/
        const fullNameRegex =  (/(?=.*[0-9])/)
        if (props.fullName.length <= 3) {
            errors.fullName = "full name must be longer than 3 characters and without special characters and without numbers!";
            props.setError(errors)
        }if (props.email.length <= 8 || emailRegex.test(props.email) === undefined) {
            errors.email = "email must be at least 8 chars and include @";
            props.setError(errors)
        }if (props.password.length < 8) {
            errors.password = "Password must be at least 8 chars with at least one uppercase and one lowercase and special character";
            props.setError(errors)
        }if(props.password !== props.confirmPassword) {
            errors.confirmPassword = "passwords doesn't match!";
            props.setError(errors)
        }else {
            const newUser = {
                fullName: props.fullName,
                email: props.email,
                gender: props.gender,
                password: props.password,
                workouts: [],
                exercises: [],
                favExercises: [],
                inbox: []
            }
            props.setAllUsers([...props.allUsers, newUser])
            nav('/')
        }
    };

    const handleKeyDown = (e) => {
        console.log(e.key);
        if(e.key === 'Enter') {
            registerNewUser()
        }
    }


  return (
    <div className='mainRegisterDiv'>
        <div className="secondRegisterDiv">
        <div className="registerLogo">
            <img src={Logo} width='200px' />
        </div>
        <div className="titleRegister">
            <h1>Register</h1>
        </div>
        <div className="userDetailsRegister">
            <input type="text"  placeholder='Enter you full name:' onChange={(e) => {props.setFullName(e.target.value)}}/><br />
            {props.error && <div className="errorsDiv">{props.error.fullName}</div> }
            <input type="text" placeholder='Enter you email:' onChange={(e) => {props.setEmail(e.target.value)}}/><br />
            {props.error && <div className="errorsDiv">{props.error.email}</div> }
            <select className='genderSelect'  onChange={(e) => {props.setGender(e.target.value)}}>
                <option value="Choose" selected>Choose your gender:</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select><br />
            <label htmlFor="birthday">Birthday: </label>
            <input type="date" id='birthday' name='birthday' onChange={(e) => {props.setBirthday(e.target.value)}}/><br />
            <input type="password" placeholder='Enter your password:' onChange={(e) => {props.setPassword(e.target.value)}}/><br />
            {props.error && <div className="errorsDiv">{props.error.password}</div> }
            <input type="password" placeholder='Confirm password:' onChange={(e) => {props.setConfirmPassword(e.target.value)}}/>
            {props.error && <div className="errorsDiv">{props.error.confirmPassword}</div> }
        </div>
        <div className="registerButton">
            <button onClick={fetchRegisterNewUser}>Register</button>
        </div>
        </div>
    </div>
  )
}

export default Register
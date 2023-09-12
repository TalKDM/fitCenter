import React, { useState } from 'react'
import '../style/userSettings.css'
import {MagnifyingGlass} from 'phosphor-react'

const UserSettings = (props) => {
    const [openFullNameChange,setOpenFullNameChange] = useState(false);
    const [openChangePass,setOpenChangePass] = useState(false);
    const [msg,setMsg] = useState({});




    const handleOpenFullNameChange = () => {
        setOpenFullNameChange(!openFullNameChange)
    }

    const handleOpenChangePass = () => {
        setOpenChangePass(!openChangePass)
    }

    const msgDis = () => {
        const massages = {};
        massages.changedName = "";
        setMsg(massages)
    }


    const changeUserFullName = () => {
        const massages = {};
        const numbers = /[0-9]/
        if(props.fullName === '' || props.fullName.length < 5 || numbers.test(props.fullName)) {
            alert(`${props.fullName} is not a valid name,name must be greater than 5 chars and without numbers!`)

        }else {
            props.currentUser.fullName = props.fullName
            massages.changedName = "your name has been changed!"
            setMsg(massages)
            handleOpenFullNameChange()
            setTimeout(msgDis, 2000);
        }
    }

    const changeCurrentPassword = () => {
        const massages = {};
        if(props.password.length <= 7) {
            massages.password = "Password must be at least 8 chars with at least one uppercase and one lowercase and special character";
            setMsg(massages)
        }else if (props.password !== props.confirmPassword) {
            massages.confirmPassword = "passwords doesn't match!";
            setMsg(massages)
        }else if (props.confirmPassword === "") {
            massages.confirmPassword = "confirm password input is empty!";
        }else {
            props.currentUser.password = props.password
            handleOpenChangePass()
            massages.changedPass = "your name has been changed!";
            setMsg(massages)
            setTimeout(msgDis, 2000);
            props.setPassword("")
            props.setConfirmPassword("")
        }
    }



  return (
    <div className='mainUserSettingsDiv'>
        <div className="secondUserSetting">
            <div className="userSettingsTitle">
                <h1>user settings</h1>
            </div>
            <div className="traineeName">
                <h2>{props.currentUser.fullName}</h2>
                <h4>- Trainee full name</h4>
            <div className="changeIcon">
                <button  className='traineeNameBtn' onClick={handleOpenFullNameChange}>🖋</button>
            </div>
            {
                openFullNameChange && 
                <div className="changeUserFullName">
                    <input type="text" placeholder='Enter new name:' onChange={(e) => {props.setFullName(e.target.value)}}/>
                    <button onClick={changeUserFullName} className='changeNameBtn'>OK</button>
                </div>
            }
            {msg && <div className="changedNameMsgDiv">{msg.changedName}</div> }
            </div>
            <div className="changePassword">
                {openChangePass === false ?
                <button onClick={handleOpenChangePass}>Change password</button>
                :
                <div className="inputChangeNameDiv">
                <input type="password" placeholder='Enter new password:' onChange={(e) => {props.setPassword(e.target.value)}}/>
                <input type="password" placeholder='Confirm new password:' onChange={(e) => {props.setConfirmPassword(e.target.value)}}/>
                <button onClick={changeCurrentPassword}>✔</button>
                </div>
                }
                <div className="changePassMsg">
                {msg && <div className="changedNameMsgDiv2">{msg.password}</div> }
                {msg && <div className="changedNameMsgDiv2">{msg.confirmPassword}</div> }
                {msg && <div className="changedNameMsgDiv2">{msg.changedPass}</div> }
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserSettings
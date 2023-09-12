import React, { useState } from 'react'
import '../style/navbar.css'
import {YoutubeLogo, InstagramLogo, FacebookLogo} from 'phosphor-react'
import Logo from '../assets/img/FitCenterLogo.png'
import { useNavigate } from 'react-router-dom'
import UserDropMenu from './UserDropMenu'

const Navbar = (props) => {
    const [openUserDropMenu,setOpenUserDropMenu] = useState(false);

    const nav = useNavigate();

    const handleUserMenu = () => {
        setOpenUserDropMenu(!openUserDropMenu)
    };

  return (
    <div className='mainNavbarDiv'>
        <div className="secondNavbarDiv">
        <div className="upperDiv">
            <div className="mediaLogo">
            <YoutubeLogo size={28} color="#ededed" weight="duotone" />
            <InstagramLogo size={28} color="#ededed" weight="duotone" />
            <FacebookLogo size={28} color="#ededed" weight="duotone"/>
            </div>
            <div className="user">
                <h5>Welcome {props.currentUser.fullName}</h5>
                <div className="character">
                {props.currentUser.gender === "Male" ? <button onClick={handleUserMenu}>👨🏽</button> : <button onClick={handleUserMenu}>👩🏽</button> }
                </div>
            </div>
        </div>
        <div className="centerDiv">
            <div className="leftButtons">
            <button onClick={() => {nav('/WorkoutLog')}} className='navBtn'>Workout Log</button>
            </div>
            <div className="logo">
                <img src={Logo} width='120px' onClick={() => {nav('/Home')}} />
            </div>
            <div className="rightButtons">
            <button onClick={() => {nav('/ExerciseEncyclopedia')}} className='navBtn'>Exercise Encyclopedia</button>
            </div>
        </div>
        <div className="userMenuOpen">
                {openUserDropMenu && <UserDropMenu handleUserMenu={handleUserMenu} setCurrentUser={props.setCurrentUser}/>}
            </div>
        </div>
    </div>
  )
}

export default Navbar
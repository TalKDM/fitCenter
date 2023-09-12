import React from 'react'
import '../style/userDropMenu.css'
import { useNavigate } from 'react-router-dom'

const UserDropMenu = (props) => {
    const nav = useNavigate()

    const logOutBtn = () => {
        props.setCurrentUser([]);
        nav('/')
    };

    const userSettingsLink = () => {
        nav('/UserSettings')
        props.handleUserMenu()
    };

    const userInboxLink = () => {
        nav('/Inbox')
        props.handleUserMenu()
    };

    const links = [
        {
            linkName: 'Inbox',
            link: userInboxLink
        },
        {
            linkName: 'user settings',
            link: userSettingsLink
        },
        {
            linkName: 'Help',
            link: 'blank'
        },
        {
            linkName: 'Log out',
            link: logOutBtn
        }
    ];


  return (
    <div className='mainUserDropMenuDiv'>
        <div className="secondUserDropMenuDiv">
            <div className="closeDiv">
            <div className="linksDiv">
                {
                    links.map((val,index) => {
                        return (
                            <div className="menuDiv" key={index}>
                                <button onClick={val.link}>{val.linkName}</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className="closeBtn">
                <button onClick={props.handleUserMenu}>X</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default UserDropMenu
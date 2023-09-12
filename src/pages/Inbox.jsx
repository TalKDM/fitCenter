import React, { useState } from 'react'
import '../style/inbox.css'

const Inbox = (props) => {
    const [openInboxMsg,setOpenInboxMsg] = useState([]);

  return (
    <div className='mainInboxDiv'>
        <div className="secondInboxDiv">
            <div className="inboxTitle">
                <h1>Inbox</h1>
            </div>
            <div className="inboxSection">
                <div className="massagesLeftDiv">
                    {
                        openInboxMsg && 
                        <div className="displayMsg">
                            <h2>{openInboxMsg}</h2>
                        </div>
                    }
                </div>
                <div className="massagesRightDiv">
                    {
                        props.currentUser.inbox.map((val,index) => {
                            const handleOpenInboxMsg = () => {
                                setOpenInboxMsg(val.content)
                            }
                            const color = val.new ? "red" : "white"
                            return (
                                <div className="inboxMsg">
                                    <button onClick={handleOpenInboxMsg} style={{color:color}}>{val.title}</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Inbox
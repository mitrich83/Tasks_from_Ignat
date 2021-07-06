import React from 'react'
import classes from './Message.module.css'

export type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={classes.message}>
            <div className={classes.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={classes.angle}>

            </div>
            <div className={classes.messageBox}>

                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.messageText}>
                    {props.message}
                </div>
                <div className={classes.time}>
                    {props.time}
                </div>
            </div>


        </div>


    )
}

export default Message

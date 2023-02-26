import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType

};

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            <img
                id={'hw1-avatar-' + props.message.id}
                src={props.message.user.avatar}
                className={s.avatar}/>
            <div className={s.angle}/>
            <div className={s.content}>
                <div className={s.name}>{props.message.user.name}</div>
                <div className={s.text}>{props.message.message.text}</div>
                <div className={s.time}>{props.message.message.time}</div>
            </div>
        </div>
    )
}

export default Message

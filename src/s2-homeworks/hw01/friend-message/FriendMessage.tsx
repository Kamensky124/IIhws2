import React from 'react'
import s from './FriendMessage.module.css'

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: any) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    //
                />

                <div className={s.svgAppendix}>
                    <svg width="9" height="20" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox"
                                    id="a">
                                <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1"
                                                result="shadowBlurOuter1"/>
                                <feColorMatrix
                                    values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0"
                                    in="shadowBlurOuter1"/>
                            </filter>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                            <path
                                d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                                fill="rgba(0, 0, 0, 0.85)" filter="url(#a)"/>
                            <path
                                d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                                fill="rgba(0, 0, 0, 0.85)" className="corner"/>
                        </g>
                    </svg>
                </div>

                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {props.message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage

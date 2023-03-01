import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    let [disabledStart, disabledStop] = [false,false]

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

        stop()
        disabledStart=true
        disabledStop=false
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    // BAD AK - hook can't be called inside function
    // React.useEffect(() => {
    //     // Running side-effect when component mounted (componentDidMount)
    //     const myInterval = setInterval(() => {
    //         setDate(new Date(restoreState('hw9-date', Date.now())));
    //     }, 1000);
    //     // Clear side-effect when component unmount (componentWillUnmount)
    //     return () => {
    //         clearInterval(myInterval);
    //     }
    // },[])


    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        clearInterval(timerId);
        disabledStart=false
        disabledStop=true
        // BAD AK
        // setTimerId(undefined)
    }

    const onMouseEnter = () => { // пишут студенты // показать
        // дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

// minimized by system local settings
    const stringTime = date?.toLocaleTimeString() || <br/> //нет даты - сайт не дергается благодаря br
    const stringDate = date?.toLocaleDateString() || <br/>

    // const stringTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() || <br/> // 'date->time' часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    // const stringDate = date.getDate() + "." + date.getMonth() + "." + date.getFullYear() || <br/> // 'date->date' день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)



    const stringDay = Intl
        .DateTimeFormat("en-US", {weekday: "long"})
        .format(date) || <br/> // пишут студенты

    const stringMonth = Intl
        .DateTimeFormat("en-US", {month: "long"})
        .format(date) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                {/*нет show то br чтобы не дергалось*/}
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={disabledStart} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={disabledStop} // пишут студенты // задизэйблить если таймер не запущен

                    onClick={stop}
                >
                    stop
                </SuperButton>
                <SuperButton onClick={(event) => console.log(disabledStart,disabledStop)}></SuperButton>
            </div>
        </div>
    )
}

export default Clock

// (timerId) ? ((timerId === undefined) ? 'true' : 'false')

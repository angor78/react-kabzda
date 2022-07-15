import {useEffect, useState} from "react";
import s from './AnalogClock.stories.module.css'

export default {
  title: 'UseEffectTimer demo/AnalogClock'
}


export const AnalogClock = () => {

  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const intID = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(intID)
    }
  }, [])
  const secondStyle = {
    transform:`rotate(${time.getSeconds()*6}deg)`
  }
  const minuteStyle = {
    transform:`rotate(${time.getMinutes()*6}deg)`
  }
  const hourStyle = {
    transform:`rotate(${time.getHours()*30}deg)`
  }

  return (
    <div>
      <div className={s.clock}>
        <div className={s.dot}></div>
        <div>
          <div className={s.hour_hand} style={hourStyle}></div>
          <div className={s.minute_hand} style={minuteStyle}></div>
          <div className={s.second_hand} style={secondStyle}></div>
        </div>
        <div>
          <span className={s.h3}>3</span>
          <span className={s.h6}>6</span>
          <span className={s.h9}>9</span>
          <span className={s.h12}>12</span>
        </div>
      </div>
    </div>
  )
}
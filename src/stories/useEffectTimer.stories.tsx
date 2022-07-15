import {useEffect, useState} from "react";


export default {
  title: 'UseEffectTimer demo'
}


export const DigitalClock = () => {
  console.log('render SimpleExample')
  const [time, setTime] = useState(new Date())
  useEffect(() => {
   const intID =  setInterval(() => {
      setTime(new Date())
    }, 1000)
    return ()=>{clearInterval(intID)}
  }, [])

  return (
    <div>
      {time.getHours() < 10 ? '0' + time.getHours() : time.getHours()}:
      {time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}:
      {time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()}
    </div>
  )
}
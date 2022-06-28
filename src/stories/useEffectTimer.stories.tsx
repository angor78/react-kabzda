import {useEffect, useState} from "react";


export default {
  title: 'UseEffectTimer demo'
}


export const SimpleExample = () => {
  console.log('render SimpleExample')
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    setInterval(()=>{
      setTime(new Date())
    },1000)

  },[time])

  return (
    <div>
     {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </div>
  )
}
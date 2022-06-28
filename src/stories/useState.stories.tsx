import {useState} from "react";


export default {
  title:'UseState demo'
}

// function dificultCounting() {
//   console.log('render dificultCounting')
//   return 312312312138909
// }
// export const Example1 = ()=>{
//   console.log('render Example1')
//   const [counter,setCounter]=useState(dificultCounting)
//   return(
//     <div>
//       {counter}
//       <button onClick={()=>setCounter(counter+1)}>+</button>
//     </div>
//   )
// }
export const Example2 = ()=>{
  console.log('render Example1')
  const [counter,setCounter]=useState(0)
  const changer = (state:number)=>state+1
  return(
    <div>
      {counter}
      <button onClick={()=>setCounter(changer)}>+</button>
    </div>
  )
}
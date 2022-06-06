import React, {useReducer} from "react";
import {onOffReducer, TOGGLE_ON_OFF} from "./onOffReducer";

export function OnOff() {
 // const [on, setOn] = useState(false)
  const [state, dispatch] = useReducer(onOffReducer,{on:true})

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "5px",
    backgroundColor: state.on ? 'lightgreen' : "white"
  }
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    marginLeft: "2px",
    display: "inline-block",
    padding: "5px",
    backgroundColor: state.on ? 'white' : "red"
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: '1px solid black',
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: state.on ? 'lightgreen' : "red"

  }

  return (
    <div>
      <div style={onStyle} onClick={()=>{
        dispatch({type: TOGGLE_ON_OFF})
      }}>On
      </div>
      <div style={offStyle} onClick={()=>{
        dispatch({type: TOGGLE_ON_OFF})
      }}>Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  )
}


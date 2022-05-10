import React, {useState} from "react";

type OnOffType = {
  //on: boolean
}

export function OnOff(props: OnOffType) {
  const [on, setOn] = useState(false)

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "5px",
    backgroundColor: on ? 'lightgreen' : "white"
  }
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    marginLeft: "2px",
    display: "inline-block",
    padding: "5px",
    backgroundColor: on ? 'white' : "red"
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: '1px solid black',
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? 'lightgreen' : "red"

  }

  return (
    <div>
      <div style={onStyle} onClick={()=>{setOn(true)}}>On
      </div>
      <div style={offStyle} onClick={()=>{setOn(false)}}>Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  )
}


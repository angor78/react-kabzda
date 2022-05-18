import React from "react";

type OnOffControlType={
  on:boolean
  setOn:(on:boolean)=>void
}

export function OnOffControl(props:OnOffControlType) {

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "5px",
    backgroundColor: props.on ? 'lightgreen' : "white"
  }
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    marginLeft: "2px",
    display: "inline-block",
    padding: "5px",
    backgroundColor: props.on ? 'white' : "red"
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: '1px solid black',
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.on ? 'lightgreen' : "red"

  }

  return (
    <div>
      <div style={onStyle} onClick={()=>{props.setOn(true)}}>On
      </div>
      <div style={offStyle} onClick={()=>{props.setOn(false)}}>Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  )
}


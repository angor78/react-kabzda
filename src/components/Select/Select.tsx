import React, {useState} from "react";


export type ItemType = {
  title: string
  value: any
}
type SelectPropsType = {
  items: ItemType[]
  titleSelect: string
  onSelect: (isOpen: boolean) => void
  selectName: (value: any) => void
  isOpen: boolean
}

export const Select = (props: SelectPropsType) => {

  const selectedItemStyle = {
    border:"1px solid grey",
    width: "100px",
    borderRadius: "3px",
  }
  const wrapItemsStyle = {
    display:'block',
    width: "100px",
    backgroundColor: "rgba(0,0,0,0.1)",
    padding:"1px 0"
  }

  function nameToTitle() {
    let userObj = props.items.find(u => u.value === props.titleSelect)
    if (userObj) {
      return userObj.title
    } else {
      return <div>Select name</div>
    }
  }


  return (
    <div onClick={() => props.onSelect(!props.isOpen)}>
      <div style={selectedItemStyle}>
        <span>Name:</span>
        {nameToTitle()}
      </div>
      <div onBlur={() => props.onSelect(props.isOpen)} style={wrapItemsStyle}>
        {!props.isOpen && props.items.map((i, index) => <div  key={index} onClick={() => {
          props.selectName(i.value)
        }}>{i.title}</div>)}
      </div>
    </div>
  )
}






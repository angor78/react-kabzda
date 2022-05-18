import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type StarType = {
  selected: boolean
  onClick:()=>void
}
type RatingControlPropsType = {
  value: RatingValueType
  onClick:(value:RatingValueType)=>void
}

export const RatingControl = (props: RatingControlPropsType) => {
  return (
    <div>
      <Star selected={props.value > 0} onClick={()=>props.onClick(1)} />
      <Star selected={props.value > 1} onClick={()=>props.onClick(2)} />
      <Star selected={props.value > 2} onClick={()=>props.onClick(3)} />
      <Star selected={props.value > 3} onClick={()=>props.onClick(4)} />
      <Star selected={props.value > 4} onClick={()=>props.onClick(5)} />
    </div>
  )
}

const Star = (props: StarType) => {
  return <span onClick={props.onClick}>
    {props.selected ? <b>star </b> : ' star '}</span>


}

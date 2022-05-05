import React from "react";

type RatingType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}
type StarType = {
  selected: boolean
}

const Rating: React.FC<RatingType> = (props) => {
  console.log("Rating rendering")
  return (
    <div>
      <Star selected={props.value >0}/>
      <Star selected={props.value >1}/>
      <Star selected={props.value >2}/>
      <Star selected={props.value >3}/>
      <Star selected={props.value >4}/>
    </div>
  )
}

const Star: React.FC<StarType> = (props) => {

  console.log("Star rendering")
  if (props.selected === true) {
    return (<span><b>star </b> </span>)
  } else {
    return (<span>star </span>)
  }
}

export default Rating
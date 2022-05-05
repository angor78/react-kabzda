import s from "./OnOff.module.css"
import React from "react";

type OnOffType = {
  isActive: boolean
}

export function OnOff(props: OnOffType) {
  // if (props.isActive === true) {
  //   return (
  //     <div className={s.onColorGreen}>
  //       <OnOffBody />
  //     </div>
  //
  //   )
  // }
  // if (props.isActive === false) {
  //   return (
  //     <div className={s.offColorRed}>
  //       <OnOffBody/>
  //     </div>
  //
  //   )
  // }
  return (
    <div>
      {props.isActive && <div className={s.onColorGreen}><OnOffBody/></div>}
      {!props.isActive && <div className={s.offColorRed}><OnOffBody/></div>}
    </div>
  )
}

const OnOffBody = () => {
  return (
    <div className={s.onOfBlock}>
      <span>On</span>
      <span>Off</span>
      <span> </span>
    </div>
  )
}
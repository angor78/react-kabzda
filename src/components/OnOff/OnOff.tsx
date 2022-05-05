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
      {props.isActive && <OnOffBody isActive={props.isActive}/>}
      {!props.isActive && <OnOffBody isActive={props.isActive}/>}
    </div>
  )
}

const OnOffBody = (props: OnOffType) => {
  if (props.isActive) {
    return (
      <div className={s.onOfBlock}>
        <div className={s.onColorGreen}>
          <span> On </span>
          <span>Off</span>
          <span></span>
        </div>
      </div>
    )
  }
  if (!props.isActive) {
    return (
      <div className={s.onOfBlock}>
        <div className={s.offColorRed}>
          <span> On </span>
          <span>Off</span>
          <span></span>
        </div>
      </div>
    )
  }
  return (
    <div className={s.onOfBlock}>
      <span> On </span>
      <span>Off</span>
      <span></span>
    </div>
  )

}
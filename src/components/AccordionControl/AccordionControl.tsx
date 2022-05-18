import React from "react";

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onClick:(collapsed:boolean)=>void
}

export function AccordionControl(props: AccordionPropsType) {

    return (
      <div>
        <AccordionTitle title={props.titleValue}
                        onClick={()=>props.onClick(!props.collapsed)}/>
        {!props.collapsed&&<AccordionBody/>}
      </div>
    )
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={props.onClick}>{props.title}</h3>
  )
}

export default AccordionControl
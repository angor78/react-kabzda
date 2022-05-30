import React from "react";

export type ItemType = {
  title: string
  value: any
}
type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: (collapsed: boolean) => void
  // onClick: (value: string) => void
  items: ItemType[]
}

export function AccordionControl(props: AccordionPropsType) {

  return (
    <div>
      <AccordionTitle title={props.titleValue}
                      onChange={() => props.onChange(!props.collapsed)}/>
      {!props.collapsed && <AccordionBody items={props.items} />}
    </div>
  )
}

type AccordionBodyPropsType = {
  // onClick:(value:any)=>void
  items: ItemType[]
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((el, index) => <li >{el.title}</li>)}
    </ul>
  )
}

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={props.onChange}>{props.title}</h3>
  )
}

export default AccordionControl
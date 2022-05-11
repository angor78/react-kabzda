import React, {useState} from "react";

type AccordionPropsType = {
  titleValue: string
  collapsed?: boolean
}

export function UnControlledAccordion(props: AccordionPropsType) {

  const [collapsed, setCollapsed] = useState(true)
  return (
    <div>
      <AccordionTitle title={props.titleValue}/>
      <button onClick={() => {
        setCollapsed(!collapsed)
      }}>Toggle
      </button>
      {!collapsed && <AccordionBody/>}
    </div>
  )
}

// export function Accordion2(props: AccordionPropsType) {
//   console.log("Accordion rendering")
//
//
//   if (props.collapsed === true) {
//     return (
//       <div>
//         {true}
//         <AccordionTitle title={props.titleValue}/>
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <AccordionTitle title={props.titleValue}/>
//         <AccordionBody/>
//       </div>
//
//     )
//   }
// }

function AccordionBody() {
  console.log("AccordionBody rendering")
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
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering")
  return (
    <h3>{props.title}</h3>
  )
}

import React, {useState} from "react";

type AccordionPropsType = {
  titleValue: string
  collapsed?: boolean
}
type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

export function UnControlledAccordion(props: AccordionPropsType) {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={() => {
        setCollapsed(!collapsed)
      }}/>
      {!collapsed && <AccordionBody/>}
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

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={() => props.onClick()}>{props.title}</h3>
  )
}

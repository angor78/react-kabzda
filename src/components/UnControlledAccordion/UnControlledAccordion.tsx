import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
  titleValue: string
  collapsed?: boolean
}
type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

export function UnControlledAccordion(props: AccordionPropsType) {
  // const [collapsed, setCollapsed] = useState(true)
  const [collapsed, dispatch] = useReducer(reducer, false)
  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={() => {
        dispatch({type: TOGGLE_COLLAPSED})
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

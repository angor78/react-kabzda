import React, {useState} from 'react';
import {AccordionControl} from "./AccordionControl";
import {action} from "@storybook/addon-actions";

export default {
  title: 'AccordionControl',
  component: AccordionControl
};

const callback = action('Accordeon mods clicked')
// const onCLickCallback = action('Item was clicked')

export const collapsedMode = () => <AccordionControl titleValue={'menu'} collapsed={true}
                                                     onChange={callback}
                                                     items={[]}/>
export const uncollapsedMode = () => <AccordionControl titleValue={'users'} collapsed={false}
                                                       onChange={callback}
                                                       items={[
                                                         {title: 'Andrey', value: 1},
                                                         {title: 'Bob', value: 2},
                                                         {title: 'Ringo', value: 3},
                                                       ]}/>

export const ChangeMenuCollapsed = () => {

  let [collapsedValue, setIsCollapsed] = useState<boolean>(true)
  return (
    <AccordionControl collapsed={collapsedValue} titleValue={'users'}
                      onChange={setIsCollapsed} items={[
      {title: 'Andrey', value: 1},
      {title: 'Bob', value: 2},
      {title: 'Ringo', value: 3},
    ]}/>
  )
}




import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
  title: 'Select',
  component: Select,

}


const callback = action('titleSelect was clicked')
const callback2 = action('Name was clicked')

export const selectClose = () => <Select titleSelect={'Selected Name'}
                                         isOpen={true}
                                         onSelect={callback}
                                         selectName={callback2}
                                         items={[]}/>
export const selectOpen = () => <Select titleSelect={'Selected Name'}
                                        onSelect={callback}
                                        selectName={callback2}
                                        isOpen={false}
                                        items={[
                                          {title: 'Andrey', value: 1},
                                          {title: 'Bob', value: 2},
                                          {title: 'Ringo', value: 3},
                                        ]}/>

export const ChangeSelect = () => {

  let [isSelect, setIsSelect] = useState<boolean>(true)
  let [selectedName, setSelectedName] = useState<string>('Users')
  return (
    <Select titleSelect={selectedName}
            isOpen={isSelect}
            selectName={setSelectedName}
            onSelect={setIsSelect} items={[
      {title: 'Andrey', value: 1},
      {title: 'Bob', value: 2},
      {title: 'Ringo', value: 3},
    ]}/>
  )
}




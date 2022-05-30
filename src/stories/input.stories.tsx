import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
  title: 'input',
  //component: OnOffControl,
};
export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
  let [value, setValue] = useState('')
  let onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let actualValue = e.currentTarget.value
    setValue(actualValue)
  }
  return (<><input onChange={onChange}/>-{value}</>)
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
  let [value, setValue] = useState('')
  let inputRef = useRef<HTMLInputElement>(null)
  let save = () => {
    let el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }
  return (<><input ref={inputRef}/>
    <button onClick={save}>save</button>
    -actualValue:{value}</>)
}


export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')
  return <input value={parentValue} onChange={(e)=>setParentValue(e.currentTarget.value)}/>
}
export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true)
  return <input type={'checkbox'} checked={parentValue} onChange={(e)=>setParentValue(e.currentTarget.checked)}/>
}
export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string|undefined>(undefined)
  const onChange = (e:ChangeEvent<HTMLSelectElement>)=>{
    setParentValue(e.currentTarget.value)
  }
  return (
    <select value={parentValue} onChange={onChange} >
      <option >none</option>
      <option value="1">Minsk</option>
      <option value="2">Moscow</option>
      <option value="3">Kiev</option>
    </select>
  )
}


export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>

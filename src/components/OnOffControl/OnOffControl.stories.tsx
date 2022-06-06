import React, {useState} from 'react';
import OnOffControl from "./OnOffControl";

export default {
  title: 'OnOffControl',
  component: OnOffControl
};

export const pressOn = () => <OnOffControl on={true} setOn={x => x}/>
export const pressOff = () => <OnOffControl on={false} setOn={x => x}/>

export const ChangeOnOf = () => {

  let [onValue, setOn] = useState<boolean>(true)
  return (
    <OnOffControl on={onValue} setOn={setOn}/>
  )
}




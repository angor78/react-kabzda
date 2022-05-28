import React, {useState} from 'react';
import './App.css';
//import Rating from "./components/Rating/Rating";
//import {OnOff} from "./components/OnOff/OnOff";
//import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {RatingControl, RatingValueType} from "./components/RatingControl/RatingControl";
import AccordionControl from "./components/AccordionControl/AccordionControl";
import {OnOffControl} from "./components/OnOffControl/OnOffControl";


function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
  let [accordeonCollapsed, setAccordeonCollapsed] = useState<boolean>(true)
  const [on, setOn] = useState(true)

  return (
    <div className="App">
      <hr/>
      {/*<UnControlledAccordion titleValue={'--Menu-- '}/>*/}
      {/*<UnControlledAccordion titleValue={'--Users--'} collapsed={false}/>*/}

      <AccordionControl titleValue={'--Users--'}
                        collapsed={accordeonCollapsed}
                        onClick={setAccordeonCollapsed}/>
      <hr/>
      {/*<Rating />*/}
      <RatingControl value={ratingValue} onClick={setRatingValue}/>
      <hr/>
      {/*<OnOff/>*/}
      <OnOffControl on={on} setOn={setOn}/>
      <hr/>
    </div>
  );
}

export default App;


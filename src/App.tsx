import React, {useState} from 'react';
import './App.css';
//import Rating from "./components/Rating/Rating";
//import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import RatingControl, {RatingValueType} from "./components/RatingControl/RatingControl";
import AccordionControl from "./components/AccordionControl/AccordionControl";
import OnOffControl from "./components/OnOffControl/OnOffControl";
import {OnOff} from "./components/OnOff/OnOff";
import Select from "./components/Select/Select";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
  let [accordeonCollapsed, setAccordeonCollapsed] = useState<boolean>(true)
  let [isSelect, setIsSelect] = useState<boolean>(true)
  let [selectedName, setSelectedName] = useState<string>('Users')
  const [on, setOn] = useState(true)

  return (
    <div className="App">
      <hr/>
      {/*<UnControlledAccordion titleValue={'--Menu-- '}/>*/}
      <UnControlledAccordion titleValue={'--Users--'} collapsed={false}/>

      <AccordionControl titleValue={'--Users--'}
                        collapsed={accordeonCollapsed}
                        onChange={setAccordeonCollapsed}
                        items={[
                          {title: 'Andrey', value: 1},
                          {title: 'Bob', value: 2},
                          {title: 'Ringo', value: 3},
                        ]}/>


      <hr/>
      {/*<Rating />*/}
      <RatingControl value={ratingValue} onClick={setRatingValue}/>
      <hr/>
      <OnOff/>
      <OnOffControl on={on} setOn={setOn}/>
      <hr/>
      <Select titleSelect={selectedName}
              isOpen={isSelect}
              selectName={setSelectedName}
              onSelect={setIsSelect}
              items={[
        {title: 'Andrey', value: 1},
        {title: 'Bob', value: 2},
        {title: 'Ringo', value: 3},
      ]}/>
    </div>
  );
}

export default App;


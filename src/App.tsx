import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";

type PageTitleType = {
  title: string
}


function App() {

  console.log("App rendering")
  return (
    <div className="App">

      <UnControlledAccordion titleValue={'Menu '}/>
      <UnControlledAccordion titleValue={'Users'} collapsed={false}/>
      <Rating />
      <Rating />
      <Rating />
      <Rating />
      <Rating />

      <OnOff />
      <OnOff />
      <OnOff />
    </div>
  );
}

const PageTitle: React.FC<PageTitleType> = (props) => {
  console.log("PageTitle rendering")
  return (
    <h1>{props.title}</h1>
  )
}

export default App;
// <PageTitle title={'This is App component'}/>
// <PageTitle title={'My friends'}/>

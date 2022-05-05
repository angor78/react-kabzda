import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

type PageTitleType = {
  title: string
}


function App() {
  console.log("App rendering")
  return (
    <div className="App">

      <Accordion titleValue={'Menu '} collapsed={true}/>
      <Accordion titleValue={'Users'} collapsed={false}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <OnOff  isActive={true}/>
      <OnOff  isActive={false}/>

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

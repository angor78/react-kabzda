import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

type PageTitleType = {
  title: string
}

function App() {
  console.log("App rendering")
  return (
    <div className="App">
      <PageTitle title={'This is App component'}/>
      <PageTitle title={'My friends'}/>
      <Rating value={3}/>
      <Accordion titleValue={'Menu '} collapsed={true}/>
      <Accordion titleValue={'Menu collapsed'} collapsed={false}/>

      <Rating value={4}/>
      <Rating value={2}/>
      <Rating value={5}/>

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

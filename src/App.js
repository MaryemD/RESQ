import  React,{useState} from 'react';
import './App.css';
import FrontPage from "./Components/Front Page";
import EmergencyCall from "./Components/Emergency Call";
import Age from "./Components/Age";


function App() {
    const [state,setState]=useState(0)
  return (
    <>
        {state===0 ? <FrontPage setState={setState}></FrontPage> :state===1? <EmergencyCall setState={setState} />:<Age setState={setState}></Age>}



    </>
  );
}

export default App;

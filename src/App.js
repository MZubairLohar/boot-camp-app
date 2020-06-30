import React, {useState} from 'react';
import './App.css';


function App() {
  let [count , setCount ] = useState(0);
  let [isMorning, setMorning] = useState(true);
  return (
    
    <div className="box">
        <div className={`box ${isMorning ? 'daylight' : ''}`}>
        
        <h2 className="font"> time= { isMorning ? 'day' : 'night'} 
        </h2>
        </div>
     <h1 className="font"> change  in variable {count} </h1>
     <br/>
     <div className='button'>
      <button onClick={()=> setCount(++count)} >Update</button>
      <button onClick={() => setMorning(!isMorning)}> click me</button>
      </div>
   </div>
  );
}


export default App;

import React from 'react';
import './App.css';
import './Dinner';
import Dinner from './Dinner';

function App() {
  return (
    <div>

     <h1 className="font">  Hello World + </h1>
     <hr/>
     <Dinner dishName="chicken karahi" sweetDish="pudding"/>
    </div>
  );
}


export default App;

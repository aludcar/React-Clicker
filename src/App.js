import './App.css';
import Counter from './Counter'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
const [valCounter, setValCounter] = useState(0)

function interactionCounter(reset, value) {
  value++;
  if(reset){
    value = 0;
  }
  setValCounter(value);
}
  //Pendiente de agregar el grid para hacerlo responsive
    return ( 
    <div className = "App" >
      <header className = "App-header" >
        <Counter value={valCounter} ></Counter>
        <Button onClick = {() => interactionCounter(false, valCounter)} > Click </Button> 
        <Button onClick = {() => interactionCounter(true, valCounter)} > Reset </Button> 
      </header> 
    </div>
    );
}

export default App;
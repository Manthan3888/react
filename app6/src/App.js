import './App.css';
import { useState } from "react";
function App() {
  const [number,setnumber] = useState(0)
  const add = () =>{
    setnumber(number + 1)
  }
  const min = () =>{
    if(number <= 0)
    {
      setnumber(0)
    }
    else
    {
      setnumber(number - 1)
    }
  }
  return (
    <div>
      <div className='bg'>
        <div className='counter'>
          <h1>{number}</h1>
          <input type="button" value="add" onClick={add}></input> 
          <input type="button" value="Min" onClick={min}></input> 
        </div>
      </div>
    </div>
  );
}

export default App;

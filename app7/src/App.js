import './App.css';
import { useState } from "react";


function App() {
  const [dis,setdis] = useState('')
  const [ope,setope] = useState('')
  const [x,setx] = useState('')
  const one = () =>{
    setdis(1)
    setx(1)
  }
  const two = () =>{
    setdis(2)
    setx(2)
  }
  const three = () =>{
    setdis(3)
    setx(3)
  }
  const four = () =>{
    setdis(4)
    setx(4)
  }
  const five = () =>{
    setdis(5)
    setx(5)
  }
  const six = () =>{
    setdis(6)
    setx(6)
  }
  const seven = () =>{
    setdis(7)
    setx(7)
  }
  const eight = () =>{
    setdis(8)
    setx(8)
  }
  const nine = () =>{
    setdis(9)
    setx(9)
  }
  const zero = () =>{
    setdis(0)
    setx(0)
  }
  const add = () =>{
    setdis("+")
    setope("+")
  }
  const mul = () =>{
    setdis("*")
    setope("*")
  }
  const div = () =>{
    setdis("/")
    setope("/")
  }
  const sub = () =>{
    setdis("-")
    setope("-")
  }
  const equal = (e) =>{
    if(ope === "+")
    {
      alert(setdis(dis + x))
    }
    if(ope === "-")
    {
      alert(setdis(dis - x))
    }
    if(ope === "*")
    {
      alert(setdis(dis * x))
    }
    if(ope === "/")
    {
      alert(setdis(dis / x))
    }
  }
  const clear = () =>{
    setdis(dis.slice(0,-1))
  }

  return (
    <div>
      <div className='bg'>
        <div className='calc'>
          <h1>{dis}</h1>
          <div>
            <input type="button" value="1" onClick={one}></input> 
            <input type="button" value="2" onClick={two}></input> 
            <input type="button" value="3" onClick={three}></input> 
            <input type="button" value="/" onClick={div}></input> 
          </div>
          <div>
            <input type="button" value="4" onClick={four}></input> 
            <input type="button" value="5" onClick={five}></input> 
            <input type="button" value="6" onClick={six}></input> 
            <input type="button" value="+" onClick={add}></input> 
          </div> 
          <div>
            <input type="button" value="7" onClick={seven}></input> 
            <input type="button" value="8" onClick={eight}></input> 
            <input type="button" value="9" onClick={nine}></input> 
            <input type="button" value="-" onClick={sub}></input> 
          </div>
          <div>
            <input type="button" value="CE" onClick={clear}></input> 
            <input type="button" value="0" onClick={zero}></input> 
            <input type="button" value="=" onClick={equal}></input> 
            <input type="button" value="x" onClick={mul}></input> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

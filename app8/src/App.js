import './App.css';
import { useState } from "react";

function App() {
  const [dis,setdis] = useState('')
  const [one,setone] = useState('')
  const [two,settwo] = useState('')
  const [three,setthree] = useState('')
  const [four,setfour] = useState('')
  const [five,setfive] = useState('')
  const [six,setsix] = useState('')
  const [seven,setseven] = useState('')
  const [eight,seteight] = useState('')
  const [nine,setnine] = useState('')
  const [flag,setflag] = useState(1)
  // const [b1,setb1] = useState('')
  // const [b2,setb2] = useState('')
  // const [b3,setb3] = useState('')
  // const [b4,setb4] = useState('')
  // const [b5,setb5] = useState('')
  // const [b6,setb6] = useState('')
  // const [b7,setb7] = useState('')
  // const [b8,setb8] = useState('')
  // const [b9,setb9] = useState('')
  const btn1 = () =>{
    if(flag === 1)
    {
      setone('O')
      setflag(0)
    }
    else
    {
      setone('X')
      setflag(1)
    }
  }
  const btn2 = () =>{
    if(flag === 1)
    {
      settwo('O')
      setflag(0)
    }
    else
    {
      settwo('X');
      setflag(1)
    }
  }
  const btn3 = () =>{
    if(flag === 1)
    {
      setthree('O')
      setflag(0)
    }
    else
    {
      setthree('X')
      setflag(1)
    }
  }
  const btn4 = () =>{
    if(flag === 1)
    {
      setfour('O')
      setflag(0)
    }
    else
    {
      setfour('X')
      setflag(1)
    }
  }
  const btn5 = () =>{
    if(flag === 1)
    {
      setfive('O')
      setflag(0)
    }
    else
    {
      setfive('X')
      setflag(1)
    }
  }
  const btn6 = () =>{
    if(flag === 1)
    {
      setsix('O')
      setflag(0)
    }
    else
    {
      setsix('X');
      setflag(1)
    }
  }
  const btn7 = () =>{
    if(flag === 1)
    {
      setseven('O')
      setflag(0)
    }
    else
    {
      setseven('X')
      setflag(1)
    }
  }
  const btn8 = () =>{
    if(flag === 1)
    {
      seteight('O')
      setflag(0)
    }
    else
    {
      seteight('X')
      setflag(1)
    }
  }
  const btn9 = () =>{
    if(flag === 1)
    {
      setnine('O')
      setflag(0)
    }
    else
    {
      setnine('X')
      setflag(1)
    }
  }
  const ans = () =>{
    if((one === 'O' && two === 'O' && three === 'O') || (four === 'O' && five === 'O' && six === 'O') || (seven === 'O' && eight === 'O' && nine === 'O') || (one === 'O' && four === 'O' && seven === 'O') || (two === 'O' && five === 'O' && eight === 'O') || (three === 'O' && six === 'O' && nine === 'O'))
    {
      setdis("Player1 has Won.")
    }
    else if((one === 'X' && two === 'X' && three === 'X') || (four === 'X' && five === 'X' && six === 'X') || (seven === 'X' && eight === 'X' && nine === 'X') || (one === 'X' && four === 'X' && seven === 'X') || (two === 'X' && five === 'X' && eight === 'X') || (three === 'X' && six === 'X' && nine === 'X'))
    {
      setdis("Player2 has Won.")
    }
    else if((one === 'X' || one === 'O') && (two === 'X' || two === 'O') && (three === 'X' || three === 'O') && (four === 'X' || four === 'O') && (five === 'X' || five === 'O') && (six === 'X' || six === 'O') && (seven === 'X' || seven === 'O') && (eight === 'X' || eight === 'O') && (nine === 'X' || nine === 'O'))
    {
      setdis("Match Draw")
    }
    else
    {
      setdis('')
    }
  }
  const reset = () =>{
    setone('')
    settwo('')
    setthree('')
    setfour('')
    setfive('')
    setsix('')
    setseven('')
    seteight('')
    setnine('')
  }
  return (
    <div className="tictac">
      <div>
        <input type="text" className="button" readOnly onClick={() => {btn1();ans();}} value={one}></input>
        <input type="text" className="button" readOnly onClick={() => {btn2();ans();}} value={two}></input>
        <input type="text" className="button" readOnly onClick={() => {btn3();ans();}} value={three}></input>
        <br></br>
        <input type="text" className="button" readOnly onClick={() => {btn4();ans();}} value={four}></input>
        <input type="text" className="button" readOnly onClick={() => {btn5();ans();}} value={five}></input>
        <input type="text" className="button" readOnly onClick={() => {btn6();ans();}} value={six}></input>
        <br></br>
        <input type="text" className="button" readOnly onClick={() => {btn7();ans();}} value={seven}></input>
        <input type="text" className="button" readOnly onClick={() => {btn8();ans();}} value={eight}></input>
        <input type="text" className="button" readOnly onClick={() => {btn9();ans();}} value={nine}></input>
      </div>
      <div>
        <button onClick={reset}>RESET</button>
      </div>
      <div>
        <h1>{dis}</h1>
      </div>
    </div>
  );
}

export default App;

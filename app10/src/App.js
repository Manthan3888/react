import './App.css';
import { useState } from 'react';
function App() {
  const [rno,setrno] = useState('')
  const [name,setname] = useState('')
  const [sub1,setsub1] = useState('')
  const [sub2,setsub2] = useState('')
  const [sub3,setsub3] = useState('')
  const [total,settotal] = useState('')
  const [display,setdisplay] = useState([])
  
  const get = () =>{

    settotal(setsub1+setsub2+setsub3)
    const obj = {
      rno:rno,
      name:name,
      sub1:sub1,
      sub2:sub2,
      sub3:sub3,
    }
    setdisplay([...display,obj])
  }
  
  return (
    <div className='ok'>
      Roll No : <input type="text" onChange={(e) => setrno(e.target.value)}></input>
      <br></br>
      Name : <input type="text" onChange={(e) => setname(e.target.value)}></input>
      <br></br>
      Sub1 : <input type="text" onChange={(e) => setsub1(e.target.value)}></input>
      <br></br>
      Sub2 : <input type="text" onChange={(e) => setsub2(e.target.value)}></input>
      <br></br>
      Sub3 : <input type="text" onChange={(e) => setsub3(e.target.value)}></input>
      <br></br>
      <button onClick={get}>Submit</button>
      
      <table border="">
        <tr>
          <th>Roll no</th>
          <th>Name</th>
          <th>Sub1</th>
          <th>Sub2</th>
          <th>Sub3</th>
          <th>Total</th>
          <th>Percentage</th>
          <th>Pass/Fail</th>
        </tr>
        {
          display.map((item) =>{
            return(
              <tr>
                <td>{item.rno}</td>
                <td>{item.name}</td>
                <td>{item.sub1}</td>
                <td>{item.sub2}</td>
                <td>{item.sub3}</td>
                <td>{item.sub1 + item.sub2 + item.sub3}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;

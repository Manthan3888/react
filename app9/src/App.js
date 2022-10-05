import './App.css';
import { useState } from 'react';
function App() {
  const [name,setname] = useState('')
  const [age,setage] = useState('')
  const [gender,setgender] = useState('')
  const [display,setdisplay] = useState([])
  
  const get = () =>{
    const obj = {
      name:name,
      age:age,
      gender:gender,
    }
    setdisplay([...display,obj])
  }

  const del = () =>{
    
  }
  
  return (
    <div className='ok'>
      Name : <input type="text" onChange={(e) => setname(e.target.value)}></input>
      <br></br>
      Age : <input type="text" onChange={(e) => setage(e.target.value)}></input>
      <br></br>
      Gender : <input type="text" onChange={(e) => setgender(e.target.value)}></input>
      <br></br>
      <button onClick={get}>Submit</button>
      
      <table border="">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
        {
          display.map((item,i) =>{
            return(
              <tr>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>
                  <button onClick={del}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;

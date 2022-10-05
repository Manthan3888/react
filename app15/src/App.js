import './App.css';
import React,{ useState, useEffect } from 'react';
const axios = require('axios')

function App() {
  const [value,setvalue] = useState([]);

  const del = (i) => {
    axios.post('http://localhost/PHP/table_del.php',{
      id:i
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() =>{
    axios.post('http://localhost/PHP/table.php')
    .then(function (response) {
      console.log(response);
      setvalue(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  },[]);

  return (
    <div>
      <table border="">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
        {
          value.map((item)=>{
            return(
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <input type="button" value="Delete" name="delete" onClick={()=>{del(item.id)}}></input>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;



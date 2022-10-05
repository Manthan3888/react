import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
const axios = require('axios')

function App() {

  const [main, setmain] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(function (response) {
        // handle success
        console.log(response.data.users);
        setmain(response.data.users)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  return (
    <div className='bg'>
      <div className='container d-flex flex-wrap'>
        {
          main.map((item, i) => {
            return (
              <div key={i}>
                  <div className="card bg1 m-1" style={{ width: '40rem' }}>
                    <div className="card1 row g-0">
                      <div className="col-md-4">
                        <img src={item.image}></img>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.id} - {item.firstName} {item.maidenName} {item.lastName}</h5>
                          <p className="card-text">Username : {item.username}</p>
                          <p className="card-text">Password : {item.password}</p>
                          <p className="card-text">Phone No. : {item.phone}</p>
                          <p className="card-text">Email : {item.email}</p>
                          <p className="card-text">Age - {item.age}</p>
                          <p className="card-text">University : {item.university}</p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;


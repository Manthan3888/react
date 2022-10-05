import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
const axios = require('axios')

function App() {

  const [main, setmain] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setmain(response.data.results)
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
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={item.image}></img>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">{item.status} - {item.species}</p>
                          <p className="card-text">{item.type}</p>
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

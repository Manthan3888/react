import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
const axios = require('axios')

function App() {

  const [main, setmain] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        // handle success
        console.log(response.data.products);
        setmain(response.data.products)
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
                      <div className="col-md-6">
                        <img src={item.thumbnail}></img>
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title">{item.id} - {item.title}</h5>
                          <p className="card-text">{item.description}</p>
                          <p className="card-text">Price : {item.price}</p>
                          <p className="card-text">DiscountPercentage : {item.discountPercentage}</p>
                          <p className="card-text">Brand : {item.brand}</p>
                          <p className="card-text">Category : {item.category}</p>
                          <p className="card-text">Rating : {item.rating}</p>
                          <p className="card-text">Stock : {item.stock}</p>
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


import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
const name="manthan";
const age="18";
const arr = [1,2,3,4,5,6,7]
const arr_data = [
  {"name":"manthan","age":"19"},
  {"name":"manthan1","age":"1911"},
  {"name":"manthan2","age":"192"},
  {"name":"manthan3","age":"193"},
  {"name":"manthan4","age":"195"},
  {"name":"manthan5","age":"194"},
]
function App() {
  return (
    <div>
      <Home name={name} age={age}/>

    <ul>
      {
        arr.map((item)=>{
          return(
            <li>{item}</li>
          )
        })
      }
    </ul>

    {
      arr_data.map((item1)=>{
        return(
          <Home name={item1.name} age={item1.age}/>
        )
      })
    }
    </div>
  );
}

export default App;

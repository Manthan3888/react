import './App.css';
import Carddet from './Carddet'
const arr_card = [
  {'name':'manthan','age':'19'},
  {'name':'manthan1','age':'191'},
  {'name':'manthan2','age':'192'},
  {'name':'manthan3','age':'193'},
]
function App() {
  return (
    <div>
      {
        arr_card.map((item)=>{
          return(
            <Carddet name={item.name} age={item.age} />
          )
        })
      }
    </div>
  );
}

export default App;

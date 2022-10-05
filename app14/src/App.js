import Admin from './Admin';
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import General from './General';
import Advance from './Advance';
import Data from './Data';
import Landing from './Landing';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Landing" element={<Landing />} />  
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/General" element={<General />} />
        <Route path="/Advance" element={<Advance />} />
        <Route path="/Data" element={<Data />} />
      </Routes>
    </div>
  );
}

export default App;

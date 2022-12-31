import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Event from './components/Event';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Lists from './components/Lists.js';
import Names from './components/Names';
import Loading from './components/Loading';
function App() {
  const [vari, setvari] = useState(0)
  const [nameofcollec, setnameofcollec] = useState('')
  const [allow, setallow] = useState(0)
  const collecname=(namecollec)=>{
    setnameofcollec(namecollec)
  }
  const setDefined=(par)=>{
    setvari(par)
  }
  const load=(param)=>{
    setallow(param)
  }
  return (
    <BrowserRouter>
    <Navbar/>
    {allow===1?<Loading/>:""}
    <Routes>
   <Route path="/" element={ <Event setDefined={setDefined}/>} />
  {vari===1?<Route path="login" element={ <Login/>}/>:<Route path="login" element={<h1>Error!!!</h1>}/>}
  <Route path="/lists" element={<Lists collecname={collecname } load={load}/>}/>
  <Route path="/names" element={<Names name={nameofcollec}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

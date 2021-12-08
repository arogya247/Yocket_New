import './App.css';
import { Header } from './Components/Header';
import { Tasks } from './Components/Tasks';
import { EditTask } from './Components/EditTask';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Register } from './Components/Register';
import { Login } from './Components/Login';
import { useState } from 'react';

function App() {

  const [token, setToken] = useState("")
  

  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route exact path='/' element={!token ? <Login token={token} setToken={setToken} /> : <Tasks/>}> </Route>
    <Route exact path='/reg' element={<Register/>} />
    {/* <Route exact path='/login' element={<Login/>} /> */}
    <Route exact path='/edit/:id' element={<EditTask/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

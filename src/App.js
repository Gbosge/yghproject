
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Register from './component/Pages/Register';
import Login from './component/Pages/Login';
import Reset from './component/Pages/Reset'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Pages/Home';
import axios from 'axios';

axios.defaults.withCredentials = true

function App() {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <Routes> 
    <Route path='/Home' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/reset' element={<Reset/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

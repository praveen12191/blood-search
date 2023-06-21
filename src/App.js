import { useState } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/navBar';
import PatentsDetails from './components/PatentsDetails';
import Forms from './components/form';
const api = axios.create({
  baseURL : 'http://localhost:8000/home/'
})

function App() {
  const [details,setdetails] = useState([{name:"praveen",age:67}])
  return (
    <div>
      <Forms></Forms>
       <NavBar></NavBar>
    </div>
 
    
  );
}

export default App;

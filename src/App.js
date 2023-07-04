import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Forms from './components/form';
import Search from './components/filter';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import NavBar from './components/navBar';
import DonorDetails from './components/DonorDetails';
import Popup from './components/popup';
// const api = axios.create({
//   baseURL : 'http://localhost:8000/home/'
// })
const url = 'http://localhost:8000/getData'
const url2 = 'http://localhost:8000/getData'

const url3 = "http://localhost:8000/placeDetails"
function App() {

     const [isSubmit,setIsSubmit] = useState(false);
     const [issearch,setIsSearch] = useState(true);
     const [val,setVal] = useState([])
     const [data,setdata] = useState([])
     const [details,setdetails] = useState([])
     const [popdata,setpopdata] = useState([])
    //  const [val,setval] = useState([])
    // const url2 = 'http://localhost:8000/getData'
    // axios.get(url2).then(({data})=>{
    //     setval(data)
    //     console.log(data)
    // });

    useEffect(()=>{
     if(isSubmit) 
     axios.get(url).then(i=>{setVal(i.data);setIsSubmit(false)})
    },[isSubmit])

    useEffect(()=>{
      if(issearch)
      axios.get(url3).then(i=>{setdata(i.data);setIsSearch(false)})
    },[issearch])
  return (
        <BrowserRouter>
          
          <Routes>
            <Route path="/" element={<Search data={data} setIsSearch={setIsSearch} setdetails = {setdetails}/>}/>
            <Route path="/add" element={<Forms setSubmit={setIsSubmit}/>}/>   
            <Route path="/data" element={<DonorDetails details={details} setpopdata={setpopdata}></DonorDetails>}></Route>
            <Route path="/pin" element={<Popup data={popdata}></Popup>}> </Route>
          </Routes>
        </BrowserRouter>
    
  );
}

export default App;

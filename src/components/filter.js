import axios from "axios";

import "./css/filter.css"
import { BrowserRouter, Routes, Route,Link, Outlet} from "react-router-dom";
import NavBar from "./navBar";
import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react"

export const Context = createContext()
const url = "http://localhost:8000/placeDetails"
export function fetchDetails(place,group,setdetails){
    const url2 = "http://localhost:8000/postData"

    axios.post(url2,{
        place : place,
        group : group
    }).then((data)=>{
        setdetails(data.data)
    })
} 
const Search = ({data,setIsSearch,setdetails}) => {
    const [datas,setdata] = useState([])
    const navigate = useNavigate();
    const [places,setplace] = useState([])
    const [groups,setgroup] = useState([])
    const getdata = (event) =>{
        event.preventDefault()
        const [place,setplace] = useState("")
        const [group,setgroup] = useState("")
        const url2 = "http://localhost:8000/postData"
        const url3 = "http://localhost:8000/getPostdata"
        fetchDetails(place,group,setdetails)
        navigate("/data");
    }
    const placeDetails = () =>
    {
        const url = 'http://localhost:8000/placeDetails'
        axios.get(url).then((data)=>{
            setplace(data.data)
        })
    }
    const groupDetails = () =>
    {
        const url = 'http://localhost:8000/groupDetails'
        axios.get(url).then((data)=>{
            setgroup(data.data)
        })
    }
    useEffect(()=>{
        placeDetails()
        groupDetails()

    },[])
    


    return (  
        <Context.Provider value={{places,groups}}>
            <NavBar></NavBar>

            {window.location.pathname=="/"  && <div id="form">
                <form onSubmit={(event) =>{
                    getdata(event)}}>
                    <lable>Place</lable>
                    
                    <select id="place">
                        {places.length>0 && 
                        places.map((i)=>
                        <option onChange={(e)=>setplace(e.target.value)} value={i}>{i}</option>)}
                    </select><br></br>
                    <lable>Group</lable>
                    <select id="group">
                        {
                            groups.length>0 && 
                    groups.map((i)=>
                        <option onChange={(e)=>setgroup(e.target.value)} value={i}>{i} </option>)}
                    </select><br></br>
                    <button>Submit</button>
                </form>
            </div>}
            <Outlet/>
        </Context.Provider>
    );
}
export default Search;
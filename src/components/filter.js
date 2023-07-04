import axios from "axios";
import { useState } from "react";
import "./css/filter.css"
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import NavBar from "./navBar";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8000/placeDetails"

const Search = ({data,setIsSearch,setdetails}) => {
    const [datas,setdata] = useState([])
    const navigate = useNavigate();
    const getdata = (event) =>{
        event.preventDefault()
        const place = document.getElementById("place").value
        const group = document.getElementById("group").value
        const url2 = "http://localhost:8000/postData"
        const url3 = "http://localhost:8000/getPostdata"
        console.log(place)
    axios.post(url2,{
            place : place,
            group : group
        }).then((data)=>{
            setdetails(data.data)
        })
        navigate("/data");
    }
    return (  
        <div>
            <NavBar></NavBar>
            <div id="form">
                <form onSubmit={(event) =>{
                    getdata(event)}}>
                    <lable>Place</lable>
                    
                    <select id="place">
                        {/* {data.map((i)=>
                        <option value={i}>{i}</option>)} */}
                        <option value="TIRUPUR">TIRUPUR</option>
                        <option value="CBE">CBE</option>
                        <option value="ERODE">ERODE</option>
                    </select><br></br>
                    <lable>Group</lable>
                    <select id="group">
                        <option value="A+">A +ve</option>
                        <option value="B+">B +ve</option>
                        <option value="A-">A -ve</option>
                    </select><br></br>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}
 
export default Search;
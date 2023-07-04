import "./css/form.css"
import axios from "axios"
import { useState } from "react"
import NavBar from "./navBar"
import { Location } from "react-router-dom"


// const api = axios.create({
//     baseURL : 'http://localhost:8000/home/'
// })


const Forms = ({setSubmit}) => {
    const [arr,setarr] = useState([])
    const [places,setplace] = useState([])
    const handle = (event)=>{
        event.preventDefault()
        const name = document.getElementById("name").value
        const age = document.getElementById("age").value
        const group = document.getElementById("group").value
        const phone = document.getElementById("phone").value
        const place = document.getElementById("place").value
        const id = document.getElementById("pass").value
        const val = [name,age,group,phone,place]
        const temp = [...arr]
        temp.push(val)
        setarr(temp)
        const url = 'http://localhost:8000/post'
        const url2 = 'http://localhost:8000/getData'
        const url3 = 'http://localhost:8000/place'
        
        axios.get(url3).then((i)=>{
            setplace(i)
            console.log(places)
        })
        axios.post(url,{
            name : name,
            age : age,
            group:group, 
            place:place,
            phone : phone,
            id : id
        })
        setSubmit(true);
        alert("Sucessfully added")
        document.location.reload(true);
    }

    return (
        <div>
        <NavBar></NavBar>
            <div className="formTop">
            
            <form onSubmit={(event) =>{
                handle(event)
            }}>
                <label>Name</label>
                <input id="name"></input><br></br>
                <label>Age</label>
                <input id="age"></input><br></br>
                <label>Group</label>
                <select id="group">
                    <option value="A+"> A +ve </option>
                    <option value="A-">A -ve</option>
                    <option value="O+">O +ve</option>
                    <option value="O-">O -ve</option>
                </select> <br></br>
                <label>Place</label>
                <select id="place">
                    {/* {places.map((i)=>
                        <option value={i}>{i}</option>)} */}
                    <option value="TIRUPUR">Trippur</option>
                    <option value="CBE">CBE</option>
                    <option value="ERODE">ERODE</option>
                    <option value="SALEM">SALEM</option>
                </select> <br></br>
                <label>Phone</label>
                <input id="phone"></input><br></br>
                <label>Id</label>
                <input id="pass"></input><br></br>
                <button>Submit</button>
                
            </form>
            </div>
        </div>)
        
}
 
export default Forms;
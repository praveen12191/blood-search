import "./css/form.css"
import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import NavBar from "./navBar"
import { Location } from "react-router-dom"
import { Context } from "./filter"



const Forms = ({setSubmit}) => {
    const {places,groups} = useContext(Context)
    
    const [arr,setarr] = useState([])
    const handle = (event)=>{
        event.preventDefault()
        // const name = document.getElementById("name").value
        // const age = document.getElementById("age").value
        // const group = document.getElementById("group").value
        // const phone = document.getElementById("phone").value
        // const place = document.getElementById("place").value
        // const id = document.getElementById("pass").value
        const [name,setname] = useState("")
        const [age,setage] = useState("")
        const [group,setgruop] = useState("")
        const [phone,setphone] = useState("")
        const [place,setplace] = useState("")
        const [id,setid] = useState("")
        const val = [name,age,group,phone,place]
        const temp = [...arr]
        temp.push(val)
        setarr(temp)
        const url = 'http://localhost:8000/post'
        const url2 = 'http://localhost:8000/getData'
        const url3 = 'http://localhost:8000/place'
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
        
            <div className="formTop">
            
            <form onSubmit={(event) =>{
                handle(event)
            }}>
                <label>Name</label>
                <input id="name" onChange={(e)=>setname(e.target.value)}></input><br></br>
                <label>Age</label>
                <input id="age" onChange={(e)=>setname(e.target.value)}></input><br></br>
                <label>Group</label>
                <select id="group">
                {groups.length>0 && 
                    groups.map((i,index)=>
                        <option key={index} onChange={(e)=>setgroup(e.target.value)} value={i}>{i}</option>)}
                </select> <br></br>
                <label>Place</label>
                <select id="place">
                    {places.length>0 && 
                    places.map((i,index)=>
                        <option key={index} onChange={(e)=>setplace(e.target.value)} value={i}>{i}</option>)}
                </select> <br></br>
                <label>Phone</label>
                <input id="phone" onChange={(e)=>setplace(e.target.value)}></input><br></br>
                <label>Id</label>
                <input id="pass" onChange={(e)=>setid(e.target.value)}></input><br></br>
                <button>Submit</button>
                
            </form>
            </div>
        </div>)
        
}
 
export default Forms;
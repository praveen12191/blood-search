import "./css/form.css"
import axios from "axios"
import { useState } from "react"


const api = axios.create({
    baseURL : 'http://localhost:8000/home/'
})
const url = 'http://localhost:8000/post'

const Forms = () => {
    const [arr,setarr] = useState([])
    const details = (event)=>{
        event.preventDefault()
        const name = document.getElementById("name").value
        const age = document.getElementById("age").value
        const group = document.getElementById("group").value
        const phone = document.getElementById("phone").value
        const place = document.getElementById("place").value
        const val = [name,age,group,phone,place]
        const temp = [...arr]
        temp.push(val)
        setarr(temp)
        console.log(temp)
        axios.post(url,{
            name : name,
            age : age,
            group:group, 
            place:place,
            phone : phone

        })
        // api.get('/').then(i=> {
        //     <div>
        //         {console.log(i.data)}
        //         <h1>{i.data}</h1>
        //         <h1>{name}</h1>
        //     </div>
            
        // })
    }

    return ( <div className="formTop">

        <form>
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
                <option value="TIRPUR">Trippur</option>
                <option value="CBE">CBE</option>
                <option value="ERODE">ERODE</option>
                <option value="SALEM">SALEM</option>
            </select> <br></br>
            <label>Phone</label>
            <input id="phone"></input><br></br>
            <button onclick={details}>Submit</button>
            
        </form>
    </div> );
}
 
export default Forms;
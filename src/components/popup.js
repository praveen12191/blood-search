import "./css/pop.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {fetchDetails} from "./filter"
const Popup = ({data,setdetails,setdeleted}) => {
    const navigate = useNavigate();
    const pinValidate = (event) =>{
        event.preventDefault()
        const url = "http://localhost:8000/check"
        const pin = document.getElementById("val").value 
        axios.post(url,{
            id : data,
            pin : pin
        }).then((response) =>{
            if(response.status==200)
            {
                const place =  response.data.place
                const group = response.data.group
                fetchDetails(place,group,setdetails)
                alert("Deleted")
                setdeleted(true)
                navigate("/data")
            }
            else
            {
                alert("Error")
                navigate("/pin")

            }
        })
    }
    return (  
        <div>
            <div className="pop">
                <form onSubmit={pinValidate}>
                    <label> Enter the pin</label><br></br>
                    <input id="val" placeholder="Enter" type="password"></input>
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    );
}
 
export default Popup;
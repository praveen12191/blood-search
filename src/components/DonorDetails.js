import { useEffect, useState } from "react";
import "./css/details.css"
import NavBar from "./navBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DonorDetails = ({details,setpopdata,setdetails,ondelete}) => {
    const navigate = useNavigate();
    const url2 = "http://localhost:8000/getData"
    const fun = (val)=>{
        const url = "http://localhost:3000/check"
        setpopdata(val)
        navigate("/pin")

    }
    return (
        <div>

            {details.map((i)=>(
                <div className="top">
                    <div className="details1">
                        <div className="float1">
                            <h5>Name:{i.name}</h5>
                            <p>Group:{i.group}</p>
                            
                        </div>
                    </div>
                    <div className="details2">
                            <div className="float2">
                            <p>Age:{i.age}</p>
                            <p>Place:{i.place}</p>
                            <p>Phone:{i.phone}</p>
                            <button onClick={() =>
                        {
                            fun(i)
                        }}>Delete</button>
                        </div>
                    </div>
                    </div>
                ))}
    </div>     
     );
}
 
export default DonorDetails;
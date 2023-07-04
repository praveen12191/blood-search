import "./css/details.css"

const PatentsDetails = ({details}) => {
    return (
        <div>
        {details.map((i)=>(
            <div className="top">
                <div className="details">
                     <h5>Name:{i.name}</h5>
                     <p>Age:{i.age}</p>
                     <p>Group:{i.group}</p>
                     <p>Place:{i.place}</p>
                     <h3>Phone:{i.phone}</h3>
                     <button>Done</button>
                </div>
            </div>
    ))}
    </div>     
     );
}
 
export default PatentsDetails;
import "./css/navBar.css"
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <div>
            <h3>Blood search</h3>
            <div class="p">
                <Link to="/add">Add</Link>
                <Link to="/"> Search </Link>
            </div>
        </div>
     );
}
 
export default NavBar;
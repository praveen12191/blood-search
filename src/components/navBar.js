import "./css/navBar.css"
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <div>
            <h2>Blood search</h2>
            <div class="bar">
                <div class="p">
                    <Link  to="/add">Add</Link>
                    <Link  to="/"> Search </Link>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;

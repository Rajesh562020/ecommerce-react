import React from "react";
import { Link } from "react-router-dom";
const Navbar = () =>{
    return (<header className="heading d-flex grow-shrink-basis align-center">
    <div className="heading-title-icon d-flex grow-shrink-basis align-center">
       
        <h1 className="heading-title">
            <Link to="/" className="link cursor">CloudLib</Link>
        </h1>
    </div>
    <nav className="navigation">
        <ul className="list-non-bullet">
            <li className="list-item-inline">
                <Link to="/" className="link cursor">Home</Link>
            </li>
            <li className="list-item-inline">
                <Link to="/cart" className="link cursor">Cart</Link>
            </li>
           
        </ul>
    </nav>
</header>);
}
export default Navbar;
 import React from "react";
 import "./nav.css";

 const Nav = ()=>{
    return(
        // <div>Nav</div>
        <nav className="navbar">
            <div className="container">
                <div className="menu">
                    <h2>HTB </h2>
                    <ul className="menu_list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
 }
 export default Nav
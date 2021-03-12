import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid" >
            <ul className="navbar-nav" >
                
                <li className="nav-item" >
                    <Link  className="nav-link" to="./" >
                    
                        Home
                    </Link>
                </li>
                <li className="nav-item"  >
                    <Link className="nav-link" to="/about"  >
                        About
                    
                    </Link>
                </li>
                <li className="nav-item" >
                    <Link className="nav-link" to="/login" >
                        Login
                    
                    </Link>
                    
                </li>
            </ul>
            </div>
        </nav>
    )
}

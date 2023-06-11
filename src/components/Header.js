import React from 'react'
import {Link} from "react-router-dom";
const Header = ({ title,mode,toggleMode }) => {
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode==='dark'?'dark':'light'} bg-${mode==='dark'?'dark':'light'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form> */}
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>toggleMode()}/> 
                        <label style={{color:`${mode==='dark'?'white':'black'}`}}>Enable {mode==='dark'?'Light':'Dark'} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
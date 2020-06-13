import React, { Component } from "react";
import { Link } from "react-router-dom";

class DashboardNavbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#5E35B1", color: "whitesmoke" }}>
                    <Link to="/" className="navbar-brand" style={{ color: "white", fontWeight: "bold" }}>
                        <img src="/logo.svg" width="30" height="30" alt="" /> {"E X P E N S I F Y"}
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link to="/Dashboard" style={{ color: "white", fontWeight: "bold" }} className="nav-link">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Category" style={{ color: "white", fontWeight: "bold" }} className="nav-link">Category <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="Users" style={{ color: "white", fontWeight: "bold" }} className="nav-link">Users <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}


export default DashboardNavbar
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
                    <div className="ml-5">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link to="/Dashboard" style={{ color: "white", fontWeight: "bold" }} className="nav-link">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Category" style={{ color: "white", fontWeight: "bold" }} className="nav-link">Category </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="Users" style={{ color: "white", fontWeight: "bold" }} className="nav-link">Users </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
        }
    }


export default DashboardNavbar
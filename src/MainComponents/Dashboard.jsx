import React, { Component } from "react";

class Dashboard extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#5E35B1", color:"whitesmoke"}}>
                    <a className="navbar-brand"  href="#">
                        <img src="/logo.svg" width="30" height="30" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Categories <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Users <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </>
        )
    }
}


export default Dashboard
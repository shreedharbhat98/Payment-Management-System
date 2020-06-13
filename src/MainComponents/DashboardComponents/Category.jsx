import React, { Component } from "react";
import DashboardNavbar from "./DashboardNavbar";

 class Category extends Component{
     render(){
         return(
             <>
             <DashboardNavbar/>
                <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1>Category</h1>
                    </div>
                </div>
                </div>
             </>
         )
     }
 }
export default Category
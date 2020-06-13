import React, { Component } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { connect } from "react-redux"


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <DashboardNavbar />
                <div classNameName="container">
                    <div classNameName="row">
                        <div classNameName="col" style={{ maxWidth: "500px", margin: "auto" }}>
                            <form>
                                <div className="form-group">
                                    <h2 className="text-center">ADD EXPENSE</h2>
                                    <label>Description :</label>
                                    <input onChange={this.handleChange} value={this.state.description} name="description" className="form-control" placeholder="On What you spent ?" />
                                </div>
                                <div className="form-group">
                                    <label>Amount :</label>
                                    <input onChange={this.handleChange} value={this.state.amount} name="amount" className="form-control" placeholder="How much you spent ?" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Dashboard
// const mapStateToProps = state =>({

// })

// const mapDispatchToProps = dispatch =>({
//      : payload => dispatch(),
//      : payload => dispatch()
// })

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,

// )(Dashboard);
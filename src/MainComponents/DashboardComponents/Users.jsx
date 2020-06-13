import React, { Component } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { connect } from "react-redux"
import { addUsers, removeUsers } from "../../Redux/action"

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        if(this.state.name === ""){
            alert("Enter Name")
            return;
        }
        this.props.addUsers(this.state.name)
        this.setState({
            name: "",
        }, () => { })
    }

    handleUser =(e, id)=>{
        e.preventDefault()
        this.props.removeUsers(id)
    }
    render() {
        const { users } = this.props
        console.log(users)
        return (
            <>
                <DashboardNavbar />
                <div className="container">
                    <div className="row">
                        <div className="col" style={{ maxWidth: "800px", margin: "auto" }}>
                            <form>
                                <div className="form-group">
                                    <h2 className="text-center">Manage Users</h2>
                                    <label>Add User :</label>
                                    <input onChange={this.handleChange} value={this.state.name} name="name" className="form-control" placeholder="Add User" />
                                </div>
                                <div className="form-group  text-center">
                                    <button
                                        className="btn btn-primary btn-block"
                                        onClick={this.handleClick}
                                    >ADD</button>
                                </div>
                                <div className="form-group mt-5">
                                    {!users.length == 0 ?
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Users :</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users?.map((item) =>
                                                    <tr key={item.id}>
                                                        <td>
                                                            {item.name}
                                                            <button onClick={(e)=> this.handleUser(e, item.id)} className="btn btn-danger btn-sm float-right">Delete</button>
                                                        </td>
                                                    </tr>
                                            )}
                                        </tbody>
                                    </table> :null
                            }
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
const mapStateToProps = state => ({
    users: state.users,
})

const mapDispatchToProps = dispatch => ({
    addUsers: payload => dispatch(addUsers(payload)),
    removeUsers: payload => dispatch(removeUsers(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(Users);
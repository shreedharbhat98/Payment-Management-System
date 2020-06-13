import React, { Component } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { connect } from "react-redux"
import { addCategory } from "../../Redux/action"

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault()

        this.props.addCategory(this.state)
        this.setState({
            category: "",
        }, () => { })
    }

    render() {
        const { category} = this.props
        console.log( category)
        return (
            <>
                <DashboardNavbar />
                <div className="container">
                    <div className="row">
                        <div className="col" style={{ maxWidth: "800px", margin: "auto" }}>
                            <form>
                                <div className="form-group">
                                    <h2 className="text-center">Manage Categories</h2>
                                    <label>Description :</label>
                                    <input onChange={this.handleChange} value={this.state.description} name="description" className="form-control" placeholder="On What you spent ?" />
                                </div>
                                <div className="form-group">
                                    <label>Amount :</label>
                                    <input onChange={this.handleChange} value={this.state.amount} name="amount" className="form-control" placeholder="How much you spent ?" />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label>User :</label>
                                            <select onChange={this.handleChange} name="user" value={this.state.user} className="form-control">
                                                {users?.map(item =>
                                                    <option value={item}>{item}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label>Category :</label>
                                            <select onChange={this.handleChange} name="user" value={this.state.category} className="form-control">
                                                {category?.map(item =>
                                                    <option value={item}>{item}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label>Type :</label>
                                            <select onChange={this.handleChange} name="type" value={this.state.type} className="form-control">
                                                {type?.map(item =>
                                                    <option value={item}>{item}</option>
                                                )}
                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <div className="form-group  text-center">
                                    <button
                                        className="btn btn-primary btn-block"
                                        onClick={this.handleClick}
                                    >ADD</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {!data.length == 0 ?
                        <div className="row mt-4 text-center">
                            <div className="col" style={{ maxWidth: "800px", margin: "auto" }}>
                                <h2 className="p-2">Your Expenses</h2>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">User</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map(item =>
                                            <tr key={item.id}>
                                                <th>{item.user} </th>
                                                <td>{item.description}</td>
                                                <td>{item.amount} </td>
                                            </tr>

                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div> : null
                    }
                </div>
            </>
        )
    }
}
// export default Dashboard
const mapStateToProps = state => ({
    users: state.users,
    category: state.category,
    type: state.type,
    data: state.data
})

const mapDispatchToProps = dispatch => ({
    addCategory: payload => dispatch(addCategory(payload)),
    //  : payload => dispatch()
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(Category);
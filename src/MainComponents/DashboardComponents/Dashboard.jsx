import React, { Component } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { connect } from "react-redux"
import { addExpense, deleteExpense } from "../../Redux/action"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom"
import Chart from "./Chart"


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "",
            amount: "",
            user: "",
            category: "",
            type: "",
            date: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        const { amount, description } = this.state
        if (amount === "" || description === "") {
            alert("Enter All The Fields");
            return;
        }
        this.props.addExpense(this.state)
        this.setState({
            description: "",
            amount: "",
            user: "",
            category: "",
            type: ""
        }, () => { })
    }
    handleExpense = (id) => {
        this.props.deleteExpense(id)
    }
    render() {
        const { match,users, category, type, data } = this.props
        return (
            <>
                <DashboardNavbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col" style={{ maxWidth: "800px", margin: "auto" }}>
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
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col">
                                                    <label>Pic a Date : </label>
                                                    <input onChange={this.handleChange} value={this.state.date} type="date" name="date" className="form-control" placeholder="How much you spent ?" />


                                                </div>
                                                <div className="col">
                                                    <label>User :</label>
                                                    <select onChange={this.handleChange} name="user" value={this.state.user} className="form-control">
                                                        <option value="">Select user</option>
                                                        {users?.map(item =>
                                                            <option key={item.id} value={item.name}>{item.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label>Category :</label>
                                                    <select onChange={this.handleChange} name="category" value={this.state.category} className="form-control">
                                                        <option value="">Select Category</option>

                                                        {category?.map(item =>
                                                            <option key={item.id} value={item.title}>{item.title}</option>
                                                        )}
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label>Type :</label>
                                                    <select onChange={this.handleChange} name="type" value={this.state.type} className="form-control">
                                                        <option value="">Select Type</option>

                                                        {type?.map((item, index) =>
                                                            <option key={index} value={item}>{item}</option>
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
                                    <div className="col" style={{ maxWidth: "1000px", margin: "auto" }}>
                                        <h2 className="p-2">Your Expenses</h2>
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map(item =>
                                                    <tr key={item.id}>
                                                        <td>{item.title.date} </td>
                                                        <td>{item.title.user} </td>
                                                        <td>{item.title.category} </td>
                                                        <td>{item.title.description}</td>
                                                        <td>{item.title.amount} </td>
                                                        <td>{item.title.type} </td>
                                                        <td>
                                                            <Link to={`${match.url}/${item.id}`}><EditIcon /> </Link>
                                                        </td>
                                                        <td>
                                                            <DeleteIcon
                                                                onClick={() => this.handleExpense(item.id)}
                                                            ></DeleteIcon>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div> : null
                            }

                        </div>

                        {data.length !== 0 ?
                        <div className="col">
                            <Chart/>
                        </div> : " " }
                    </div>

                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    users: state.users,
    category: state.category,
    type: state.type,
    data: state.data
})

const mapDispatchToProps = dispatch => ({
    addExpense: payload => dispatch(addExpense(payload)),
    deleteExpense: payload => dispatch(deleteExpense(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(Dashboard);
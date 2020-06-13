import React, { Component } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { connect } from "react-redux"
import { addExpense, deleteExpense } from "../../Redux/action"

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "",
            amount: "",
            user: "",
            category: "",
            type: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        this.props.addExpense(this.state)
        this.setState({
            description: "",
            amount: "",
            user: "",
            category: "",
            type: ""
        }, () => { })
    }
handleExpense =(id)=>{
  this.props.deleteExpense(id)
}
handleEdit = (item)=>{
    this.setState({
        description:item.title.description,
        amount:item.title.amount,
        user: item.title.user,
        category: item.title.category,
        type: item.title.type
    },()=>{})
    this.props.deleteExpense(item.id)
}
    render() {
        const { users, category, type, data } = this.props
        console.log(users, category, type, data)
        return (
            <>
                <DashboardNavbar />
                <div className="container">
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
                            <div className="col" style={{ maxWidth: "800px", margin: "auto" }}>
                                <h2 className="p-2">Your Expenses</h2>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">User</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map(item =>
                                            <tr key={item.id} onClick={()=>this.handleEdit(item)}>
                                                <td>{item.title.user} </td>
                                                <td>{item.title.category} </td>
                                                <td>{item.title.description}</td>
                                                <td>{item.title.amount} </td>
                                                <td>
                                                    <button onClick={()=>this.handleExpense(item.id)} className="btn m-1 btn-danger btn-sm float-right">Delete</button>
                                                </td>
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
    addExpense: payload => dispatch(addExpense(payload)),
     deleteExpense: payload => dispatch(deleteExpense(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(Dashboard);
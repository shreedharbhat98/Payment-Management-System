import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';
import { connect } from "react-redux";


class Chart extends Component {
    render() {
        const { data } = this.props
        var categories = [];
        var expenses = [];
        var nameWiseExpense = [];
        var names = [];
        if (data.length >= 1) {
            data.map(item => categories = [...categories, (item.title.category)])
            data.map(item => names = [...names, (item.title.user)])

            names = names.filter((val, a, c) => c.indexOf(val) === a)

            categories = categories.filter((val, a, c) => c.indexOf(val) === a)

            // Data for categorywise Expense start
            for (let i = 0; i < categories.length; i++) {
                var sum = 0;
                for (let j = 0; j < data.length; j++) {
                    if (categories[i] === data[j].title.category) {
                        sum += Number(data[j].title.amount)
                    }
                }
                expenses.push(sum)
            }
            var chartData = {
                labels: categories,
                datasets: [
                    {
                        label: "Expenses",
                        data: expenses,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]

                    }
                ]
            }
            // Data for categorywise Expense end

            // Data for userwise Expense start
            for (let i = 0; i < names.length; i++) {
                var sum = 0;
                for (let j = 0; j < data.length; j++) {
                    if (names[i] === data[j].title.user) {
                        sum += Number(data[j].title.amount)
                    }
                }
                nameWiseExpense.push(sum)
            }
            var nameWiseExpenseData = {
                labels: names,
                datasets: [
                    {
                        label: "Expenses",
                        data: nameWiseExpense,
                        backgroundColor: [
                            'rgba(212, 225, 87,1.0)',
                            'rgba(41, 182, 246,1.0)',
                            'rgba(255, 238, 88,1.0)',
                            'rgba(236, 64, 122,1.0)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]

                    }
                ]
            }
            // Data for userwise Expense end
        }
        return (
            <>
                <div>
                    <h3 className="text-center">Expenses by Category </h3>
                    <hr />
                    <Pie data={chartData} height={125}/>
                </div>
                <div>
                    <h3 className="text-center">Expenses by User </h3>
                    <hr />
                    <Pie data={nameWiseExpenseData} height={125}/>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(
    mapStateToProps,
)(Chart);
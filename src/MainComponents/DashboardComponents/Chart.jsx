import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';
import { connect } from "react-redux";


class Chart extends Component {
    render() {
        const { data } = this.props
        var names = [];
        var expenses = []
        if (data.length >= 1) {
            data.map(item => names = [...names, (item.title.category)])

            names = names.filter((val, a, c) => c.indexOf(val) === a)

            for (let i = 0; i < names.length; i++) {
                var sum = 0;
                for (let j = 0; j < data.length; j++) {
                    if (names[i] === data[j].title.category) {
                        sum += Number(data[j].title.amount)
                    }
                }
                expenses.push(sum)
            }
            var chartData = {
                labels: names,
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
        }
        return (
            <div>
            <Pie
                data={chartData}
                options={{}}
                />
                </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(
    mapStateToProps,
)(Chart);
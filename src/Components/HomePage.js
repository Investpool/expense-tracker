import React, { Component } from 'react'
import AddExpense from './AddExpense'
import ExpenseList from './ExpenseList'

export default class HomePage extends Component {
    render() {
        return (
            <div className = "container">
                <div className = "row navbar navbar-default" id = "topnav">
                    <h2>Expense Tracker</h2>
                </div>

                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-3 addexpense">
                            <h4 className = "headings">New Expense Records</h4>
                            <AddExpense />
                        </div>


                     <div className = "col-md-9 text-center">
                        <h4 className = "headings">Expense List</h4>

                       
                            <div className = "col-md-12"> 
                                <div className = "col-xs-3 col-sm-3 col-md-3">
                                 <h4>Category</h4>
                                </div>

                                <div className = "col-xs-3 col-sm-3 col-md-3">
                                    <h4>Services</h4>
                                </div>

                                <div className = "col-xs-2 col-sm-2 col-md-2"  style={{paddingLeft:30}}>
                                    <h4>Amount(GH)</h4>
                                </div>

                                <div className = "col-xs- 3 col-sm-3 col-md-3">
                                    <h4>Date</h4>
                                </div>
                             </div>

                        <ExpenseList />
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}

import React, { Component } from 'react'
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';

class ExpenseList extends Component {
    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12 text-left">
        
                        {this.props.expensesData.map((expense) => {
                            return <ExpenseItem  
                            expense = {expense} key={expense.id} 
                        />;
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
    expensesData : state.expenses
    }       
}
export default connect(mapStateToProps)(ExpenseList);

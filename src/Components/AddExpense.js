import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExpenseAction } from '../Action/expenseAction'

class AddExpense extends Component {
    constructor(props){
        super(props)

        //setting the initial state of the inputs
        this.state ={
            category : "",
            services : "",
            amount : "",
            expensedate : ""
        }
    }

    handleOnChange = (event) =>{
        this.setState(
            { [event.target.name] : event.target.value} //gets the value for whatever was typed and puts it in the respective inputs
        )
    }

    handleSubmit = () => {
        var expenseid = 10000 + Math.random() * 10000000; //gives eachexpense an ID for editing and deletion purposes
        var expense  = { ...this.state, id: expenseid };
        this.props.addNewExpense(expense);
        //this clears whatever was typed initially into the form;basically resetting the form
        this.setState({
            category : "",
            services : "",
            amount : "",
            expensedate : ""
        })
    }

    //for closing and opening of the modal for editing
    closeForm = () =>{
        this.setState(
           {show : false}
        )
    }
    showForm = () =>{
        this.setState(
            {show : true}
        )
    }
    

    render() {
        return (
            <div>
                <form>
                    <label>Category</label> <br></br>
                    <select name="category" value = {this.state.category} onChange = {this.handleOnChange}>
                        <option value="" disabled>Select</option>
                        <option value="School Fees">School Fees</option>
                        <option value="Night Club">Night Club</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Food">Food</option>
                        <option value="Chilling">Chillings</option>
                    </select>
                    
                    <br></br><br></br>
                  
                    <label>Services</label> <br></br>
                    <input type = "text" name = "itemorservice" value = {this.state.itemorservice} onChange = {this.handleOnChange}></input> <br></br>
                    <br></br>

                    <label>Amount</label> <br></br>
                    <input type = "number" name = "amount" value = {this.state.amount} onChange = {this.handleOnChange}></input> <br></br>
                    <br></br>

                    <label>Date</label> <br></br>
                    <input type = "date" name = "expensedate" value = {this.state.expensedate} onChange = {this.handleOnChange} ></input> <br></br>
                    <br></br>
                    
                    <br></br>

                    <button type="button" onClick = {this.handleSubmit} className = "btn btn-primary btn-lg"> Save </button>
               
                </form>
            </div>
        )
    }
}

//this allows us to send actions to the store
const mapDispatchToProps = {
    addNewExpense : addExpenseAction
}

export default connect(null, mapDispatchToProps)(AddExpense)

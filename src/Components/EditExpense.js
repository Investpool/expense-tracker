import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editExpenseAction } from '../Action/expenseAction';

class EditExpense extends Component {
    constructor(props){
        super(props)

        //autofill the edit form with the info saved already
        this.state = {
            category: this.props.expense.category,
            itemorservice: this.props.expense.details,
            amount: this.props.expense.amount,
            expensedate: this.props.expense.expensedate,
        };
    }

    //set the value of what is typed by user into the state
    handleOnChange = (event) => {
        this.setState(
           { [event.target.name] : event.target.value} //gets the value for whatever was typed and puts it in the respective inputs
        )
    }

    handleSubmit = () => {
        let expense = {...this.state, id: this.props.expense.id}
        this.props.editExpense(this.props.expense.id, expense);
        this.props.closeModal();
    }
 

    render() {
        return (
    <div>
        <form>
            <label>Category</label> <br></br>
            <select name="category" style={{color:"black"}}  value = {this.state.category} onChange = {this.handleOnChange}>
                <option value="" disabled>Select</option>
                <option value="Food and Drinkss">Food and Drinks</option>
                <option value="Transportation">Transportation</option>
                <option value="Shopping">Shopping</option>
                <option value="Eating Outside">Eating Outside</option>
                <option value="Miscellaneous">Miscellaneous</option>
            </select>
            
            <br></br><br></br>
            
            <label>Item/Service</label> <br></br>
            <input type = "text" name = "itemorservice" value = {this.state.itemorservice} 
            onChange = {this.handleOnChange}></input> <br></br>
            <br></br>

            <label>Amount</label> <br></br>
            <input type = "number" name = "amount" value = {this.state.amount} 
            onChange = {this.handleOnChange}></input> <br></br>
            <br></br>

            <label>Date</label> <br></br>
            <input type = "date" name = "expensedate" value = {this.state.expensedate} 
            onChange = {this.handleOnChange} ></input> <br></br>
            <br></br>
            
            <br></br>

            <button type="button" onClick = {this.handleSubmit} className = "btn btn-primary btn-lg">Update</button>
        
        </form>
    </div>
                
        )
    }
}

const mapDispatchToProps = {
    editExpense : editExpenseAction
}

export default connect(null, mapDispatchToProps)(EditExpense);

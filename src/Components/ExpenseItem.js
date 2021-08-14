import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteExpenseAction } from '../Action/expenseAction';
import EditExpense from './EditExpense';

class ExpenseItem extends Component {
    constructor(props){  
        super(props)
        this.state = {
            show : false
        };
    }


     handleDelete = (e) =>{
       e.preventDefault();
       console.log("item deleted")
    }
    //handleDelete = () => {
        //this.props.deleteExpense(this.props.expense.id); 
    //}

    closeModal = () =>{
        this.setState(
           {show : false}
        )
    }
    showModal = () =>{
        this.setState(
            {show : true}
        )
    }

    render() {
       return(
           <div className = "container">
             <div className = "row">
                <div className = "col-md-12">
                 
                        <div className = "col-xs-2 col-sm-2 col-md-2 text-center">
                            {this.props.expense.category}
                        </div>
                        <div className = "col-xs-2 col-sm-2 col-md-2 text-center">
                            {this.props.expense.itemorservice}
                        </div>

                        <div className = "col-xs-2 col-sm-2 col-md-2 text-center"  style={{paddingLeft:0 }}>
                            {this.props.expense.amount}
                        </div>

                        <div className = "col-xs-2 col-sm-2 col-md-2 text-left">
                            {this.props.expense.expensedate}
                        </div>
                  
                    <div className = "col-xs-2 col-sm-2 col-md-2 text-left">
                        <button id = "actions1" className = "btn-primary">
                            <i class="fa fa-pencil editdelete" aria-hidden="true" 
                            onClick = {this.showModal} >Edit </i> </button>
                        <button id = "actions2" className = "btn-danger">
                            <i class="fa fa-trash-o editdelete" aria-hidden="true" 
                            onClick = {this.handleDelete}> Delete</i></button>
                    </div>  
                </div>
            </div>
        
                <Modal show={this.state.show} onHide={this.closeModal}>
                  <Modal.Header closeButton>
                      <Modal.Title>Edit Expense </Modal.Title>
                  </Modal.Header>

                  <Modal.Body >
                    <EditExpense
                    expense = {this.props.expense}
                    updateExpense = {this.props.updateExpense} 
                    closeModal = {this.closeModal}/>
                  </Modal.Body>
                </Modal>
            </div>
        )
    }

    }

const mapDispatchToProps = {
    deleteExpense : deleteExpenseAction
}


export default connect(null, mapDispatchToProps)(ExpenseItem);

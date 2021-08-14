export function addExpenseAction(newExpense){
    return{
        type: 'ADD_EXPENSE',
        payload: newExpense  
    }
}

export function editExpenseAction (id, updatedExpense){
    return{
    type: 'EDIT_EXPENSE',
    payload: {
        id: id,
        updatedExpenseInfo : updatedExpense
    }
    }
}

export function deleteExpenseAction(id){
    return{
        type: 'DELETE_EXPENSE',
        payload: id
    }
}

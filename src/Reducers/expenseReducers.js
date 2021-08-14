var initialState = {
    expenses : []  //an intial empty array of expenses
}

//reducer function
const expenseReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'ADD_EXPENSE':
               return{
                ...state , expenses : [...state.expenses , action.payload]
               }

            case "EDIT_EXPENSE":
            var id = action.payload.id;
            let updatedExpenseInfo = action.payload.updatedExpenseInfo;
            let expensesAfterUpdate = state.expenses.map((expense) => {
                if (expense.id === id) {
                return updatedExpenseInfo;
                }
                return expense;
            });
            
            return { expenses: expensesAfterUpdate };

            case "DELETE_EXPENSE":
            //var id = action.payload;
            let expensesAfterDelete = state.expenses.filter((expense) => expense.id !== id);
            return { expenses: expensesAfterDelete };

            default: 
                return state;
    }
}
export default expenseReducer;

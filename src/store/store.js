import { createStore } from "redux";
import expenseReducers from "../Reducers/expenseReducers";

export const store = createStore(expenseReducers) //the store takes the reducer as arguments

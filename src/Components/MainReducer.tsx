import { ADD_EXPENSE, DELETE_EXPENSE, ExpenseItem, RESET_ALERT } from './AppPropTypes'


const mainReducer = (state : any, action : any) => {
  switch(action.type){
    case ADD_EXPENSE :
        return {
            
            expenses : [...state.expenses, action.payload],
            actionProps : {
                showAlert : true,
                title : "Added expense",
                message : `Successfully added expense '${action.payload.name}'`
            }
        }

    case RESET_ALERT :
        return {
            ...state,
            actionProps : {
                ...state.actionProps,
                showAlert : false
            }
        }
        case DELETE_EXPENSE :
            return {
                
                expenses : state.expenses.filter((expense : ExpenseItem) => expense.id !== action.payload.id),
actionProps : {
    showAlert : true,
    severity : "error",
    title : "Deleted",
    message : "Expense deleted"
}
            }
    default:
        return {
            ...state
        }
  }
}

export default mainReducer
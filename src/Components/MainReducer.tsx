import { ADD_EXPENSE, DELETE_EXPENSE, ExpenseItem, RESET_ALERT, SHOW_FORM_ERROR } from './AppPropTypes'


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
            let expenseName = null
            return {
                
                expenses : state.expenses.filter((expense : ExpenseItem) => {
                    if(expense.id !== action.payload.id){
                        return true
                    }
                    else{
                        expenseName = expense.name
                        return false
                    }
                }),
actionProps : {
    showAlert : true,
    severity : "error",
    title : "Deleted",
    message : `Expense '${expenseName}' deleted`
}
            }
    case SHOW_FORM_ERROR:
        return {
            ...state,
            actionProps : {
                showAlert : true,
                severity : "error",
                title : action.payload.title,
                message : action.payload.message
            }
        }
    default:
        return {
            ...state
        }
  }
}

export default mainReducer
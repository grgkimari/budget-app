import { type } from "os"
export const ADD_EXPENSE = "ADD_EXPENSE"
export const DELETE_EXPENSE = "DELETE_EXPENSE "
export type ActionAlertPropType = {
    title : string
    message : string
}

export type ReducerActionType = {
    type : string
    payload? : {
        name : string
        amount : number | null
    } | number
}

export interface ExpenseItem  {
    id : number
    name : string
    amount : number | null
}

export type GlobalStateType = {
    expenses : ExpenseItem[]
    actionProps : {
        showAlert : boolean
        title : string
        message : string
    }
}
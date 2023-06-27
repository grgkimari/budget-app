import { type } from "os"
export const ADD_EXPENSE = "ADD_EXPENSE"
export const DELETE_EXPENSE = "DELETE_EXPENSE "
export const SHOW_FORM_ERROR = "SHOW_FORM_ERROR"
export const RESET_ALERT = "RESET_ALERT"
export type ActionAlertPropType = {
    title : string
    message : string
    severity : "error" | "warning" | "info" | "success" 
    dispatch : (action : object) => void
}

export type ReducerActionType = {
    type : string
    payload? : {
        name : string
        amount : number | null
    } | number
}

export interface ExpenseItem  {
    id : string
    name : string
    amount : number | null
}

export type GlobalStateType = {
    expenses : ExpenseItem[]
    actionProps : {
        showAlert : boolean
        title : string
        message : string
        severity : "error" | "warning" | "info" | "success" 
    }
}

export type ExpenseListProps = {
expenses : ExpenseItem[],
dispatch : (action : object) => void
}

export type ExpenseFormProps = {
    dispatch : (action : object) => void
}
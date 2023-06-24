import React from 'react'
import { ADD_EXPENSE, GlobalStateType, ReducerActionType } from './AppPropTypes'


const mainReducer = (state : any, action : any) => {
  switch(action.type){
    case ADD_EXPENSE :
        return {
            
            expenses : [...state.expenses, action.payload],
            actionProps : {
                title : "Added expense",
                message : `Successfully added expense '${action.payload.name}'`
            }
        }
    default:
        return {
            ...state
        }
  }
}

export default mainReducer
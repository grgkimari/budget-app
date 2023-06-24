import React, { useReducer } from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import { Box } from '@material-ui/core';
import ExpenseList from './Components/ExpenseList';
import ActionAlert from './Components/ActionAlert';
import mainReducer from './Components/MainReducer';
import { GlobalStateType } from './Components/AppPropTypes';

const initialState : GlobalStateType = {
  expenses : [],
  actionProps : {
    showAlert : false,
    title : "",
    message : ""
  }}

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState)
  return (
    
    <Box>
     {state.actionProps && <ActionAlert title={state.actionProps.title} message={state.actionProps.message}/>}
<h1>
      Budget App
      
    </h1>
    <ExpenseForm /> 
    <ExpenseList />
    </Box>
    
  );
}

export default App;

import { Box, Typography } from '@mui/material';
import { useEffect, useReducer } from 'react';
import './App.css';
import ActionAlert from './Components/ActionAlert';
import { GlobalStateType, RESET_ALERT } from './Components/AppPropTypes';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import mainReducer from './Components/MainReducer';

const initialState : GlobalStateType = {
  expenses : [],
  actionProps : {
    showAlert : false,
    title : "",
    message : "",
    severity : "info"
  }}



function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  useEffect(() => {
    if(state.actionProps.showAlert){
setTimeout(() => dispatch({type : RESET_ALERT}), 5500)
    }
  },[state.actionProps.showAlert])
  return (
    
    <Box>
     {state.actionProps.showAlert && <ActionAlert severity={state.actionProps.severity} dispatch={dispatch} title={state.actionProps.title} message={state.actionProps.message}/>}
<Typography variant='h3' textAlign={"center"}>
  Budget App
</Typography>
    <ExpenseForm dispatch = {dispatch}/> 
    <ExpenseList expenses={state.expenses} dispatch = {dispatch}/>
    </Box>
    
  );
}

export default App;

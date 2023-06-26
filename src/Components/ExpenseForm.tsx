
import { Stack, Typography, TextField, Button } from "@mui/material"
import { ADD_EXPENSE, ExpenseFormProps, ExpenseItem } from "./AppPropTypes"
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {ChangeEvent} from 'react'

const generateUUID = (): string => {
  const uuid = uuidv4();
  return uuid;
};



const ExpenseForm = (props : ExpenseFormProps) => {
    const [formState, setFormState] = useState({
        expenseName : "",
        expenseAmount : ""
    })
    console.log(JSON.stringify(formState))
    return(
        <Stack spacing={2} sx={{
            maxWidth : "500px",
            margin : "10px auto"
        }}>
<Typography align="center">Add expense</Typography>

    
    
<TextField label="Expense name"  id = "expense-name"  variant="outlined" value={formState.expenseName} onChange={(event : ChangeEvent<HTMLInputElement>) => setFormState({
    ...formState,
    expenseName : event.target.value
})}/>
    
<TextField label="Expense amount" type="number"  id = "expense-amount"  variant="outlined" value={formState.expenseAmount} onChange={(event : ChangeEvent<HTMLInputElement>) => setFormState({
    ...formState,
    expenseAmount : event.target.value
})}/>
<Button variant="contained" color="primary" size="small" onClick={() =>{
    const newExpenseItem : ExpenseItem = {
        id : generateUUID(),
        name : formState.expenseName,
        amount : parseInt(formState.expenseAmount)
    }
    props.dispatch({
        type : ADD_EXPENSE,
        payload : newExpenseItem
    })
    setFormState({
        expenseName : "",
        expenseAmount : ""
    })
}}>Add</Button>
    </Stack>
        
        

    )
}

export default ExpenseForm
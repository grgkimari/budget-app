import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import TableCell from '@mui/material/TableCell/TableCell'
import Typography from '@mui/material/Typography/Typography'
import { DELETE_EXPENSE, ExpenseListProps } from './AppPropTypes'
import { Button, IconButton, TableContainer } from '@mui/material'
import { Delete } from '@mui/icons-material'

const HeaderCellStyles = {
  borderRight : '2px solid white',
  color : "white"
}

const ExpenseList = (props : ExpenseListProps) => {
  return (
    <>
    {props.expenses.length > 0 && <TableContainer sx={{
      height : "320px",
      overflow : "scroll"
    }}> <Table sx={{
      height : "maxContent"
    }}>
      <TableHead  sx={{
      top : '0',
      left : '0',
      zIndex : '2',
      position : 'sticky'
    }}>
        <TableRow sx={{
          bgcolor : 'black',
          color : "whitesmoke"
        }}>
          <TableCell sx={HeaderCellStyles}>
            ID
          </TableCell>
          <TableCell sx={HeaderCellStyles}>
            Name
          </TableCell>
          <TableCell sx={HeaderCellStyles}>
            Amount
          </TableCell>
          <TableCell sx={HeaderCellStyles}>
            Action
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
        {props.expenses.map((expense, index) => {
          return(
            <TableRow sx={index % 2 === 0 ? {bgcolor : "lightblue"} : {bgcolor : "lightgray"}}>
              <TableCell>
                {expense.id}
              </TableCell>
              <TableCell>
                {expense.name}
              </TableCell>
              <TableCell>
                {expense.amount}
              </TableCell>
              <TableCell>
                <IconButton size="small" onClick={() => {
                  props.dispatch({
                    type : DELETE_EXPENSE,
                    payload : {
                      id : expense.id
                    }
                  })
                }}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          )
          
        })}
        <TableRow sx={{
          backgroundColor : "gray"
        }}>
          <TableCell colSpan={2}>
            <Typography variant='h5'>Total</Typography>
          </TableCell>
          <TableCell  colSpan={2}>
          <Typography variant='h6'>{props.expenses.reduce((accumulator, expense) => {
              if (expense.amount !== null) {
                return accumulator + expense.amount;
              }
              return accumulator;
            }, 0)}</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table></TableContainer>}
    </>
  )
}

export default ExpenseList
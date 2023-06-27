import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import TableCell from '@mui/material/TableCell/TableCell'
import Typography from '@mui/material/Typography/Typography'
import { DELETE_EXPENSE, ExpenseListProps } from './AppPropTypes'
import { Button, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

const HeaderCellStyles = {
  borderRight : '2px solid white',
  color : "white"
}

const ExpenseList = (props : ExpenseListProps) => {
  return (
    <>
    {props.expenses.length > 0 && <Table>
      <TableHead>
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
      </TableBody>
    </Table>}
    </>
  )
}

export default ExpenseList
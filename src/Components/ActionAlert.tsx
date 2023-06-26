import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import { ActionAlertPropType, RESET_ALERT } from './AppPropTypes'

const ActionAlert = (props : ActionAlertPropType) => {
  return (
    <Alert className='alert' onClose={() => {
      props.dispatch({type : RESET_ALERT})
    }} severity ={props.severity}>
        <AlertTitle>{props.title}</AlertTitle>
        {props.message}
    </Alert>
  )
}

export default ActionAlert
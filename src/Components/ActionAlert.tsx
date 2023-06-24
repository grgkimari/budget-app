import { Alert, AlertTitle } from '@material-ui/lab'
import React from 'react'
import { ActionAlertPropType } from './AppPropTypes'

const ActionAlert = (props : ActionAlertPropType) => {
  return (
    <Alert>
        <AlertTitle>{props.title}</AlertTitle>
        {props.message}
    </Alert>
  )
}

export default ActionAlert
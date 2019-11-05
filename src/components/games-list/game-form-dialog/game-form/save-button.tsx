import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import CircularProgress from '@material-ui/core/CircularProgress'

interface Props {
  saving?: boolean
  onClick: () => any;
  disabled?: boolean
}

const SaveButton: FC<Props> = props => {
  return (
    <Button color="primary" variant="contained" onClick={props.onClick} disabled={props.disabled || props.saving}>
      {props.saving && (
        <>
          <span>Creando</span>&nbsp;<CircularProgress size={20} />
        </>
      )}
      {!props.saving && (
        <>
          <span>Crear</span>&nbsp;<SaveIcon />
        </>
      )}
    </Button>
  )
}

export default SaveButton

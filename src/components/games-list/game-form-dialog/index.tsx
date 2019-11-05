import React, { Component, ReactElement } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { DialogContent } from '@material-ui/core'

// Own
// Components
import GameForm, { Props as GameFormProps } from './game-form'

interface Props extends GameFormProps {
  open?: boolean;
  onClose: () => any;
}

export default class CreateGameDialog extends Component<Props> {
  public render(): ReactElement {
    const { open, onGameCreated, onClose } = this.props

    return (
      <Dialog open={!!open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Crear un partido</DialogTitle>
        <br/>
        <DialogContent>
          <GameForm onGameCreated={onGameCreated} />
        </DialogContent>
      </Dialog>
    )
  }
}

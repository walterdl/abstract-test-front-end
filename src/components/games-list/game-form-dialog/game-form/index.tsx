import React, { Component, ReactElement, ChangeEvent } from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { DateTimePicker, MaterialUiPickersDate } from '@material-ui/pickers'
import Typography from '@material-ui/core/Typography'

// Own
import places from 'common/places'
import { Game, getEmptyGame, GameType, getGameTypeFriendlyName } from 'common/game'
import GameCreator from 'services/game-creator'
import SaveButton from './save-button'

export interface Props {
  /**
   * Emits the id of the new game
   */
  onGameCreated: (id: string) => any;
}

interface State {
  game: Game;
  saving?: boolean;
  error?: string;
}

export default class GameForm extends Component<Props, State> {
  private gameCreator = new GameCreator()

  private get formIsValid(): boolean {
    const { game } = this.state
    return !!(game.name && game.placeId && game.type && game.date)
  }

  constructor(props: any) {
    super(props)
    this.state = {
      game: getEmptyGame(),
      saving: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.save = this.save.bind(this)
  }

  public render(): ReactElement {
    const { game, saving } = this.state

    return (
      <Box>
        <TextField
          name="name"
          label="Nombre del partido"
          value={game.name}
          onChange={this.handleChange}
          margin="normal"
          fullWidth
          required
          disabled={saving}
          error={!game.name}
        />
        <br />
        <TextField
          name="type"
          select
          label="Tipo de partido"
          value={game.type}
          onChange={this.handleChange}
          margin="normal"
          fullWidth
          required
          disabled={saving}
          error={!game.type}
        >
          {Object.keys(GameType).map((x, index) => (
            <MenuItem key={index} value={x}>
              {getGameTypeFriendlyName(x as any)}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          name="placeId"
          select
          label="Recinto del partido"
          value={game.placeId}
          onChange={this.handleChange}
          margin="normal"
          fullWidth
          required
          disabled={saving}
          error={!game.placeId}
        >
          {places.map((x, index) => (
            <MenuItem key={index} value={x.id}>
              {x.name}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <DateTimePicker
          name="date"
          label="Fecha del evento"
          value={game.date}
          onChange={this.handleDateChange}
          margin="normal"
          fullWidth
          required
          disabled={saving}
          error={!game.date}
        />
        <br />
        {!this.formIsValid && <Typography align="center">Uno o varios datos están incompletos.</Typography>}
        <br />
        <Box textAlign="center">
          <SaveButton onClick={this.save} disabled={!this.formIsValid} saving={saving} />
        </Box>
      </Box>
    )
  }

  private handleChange(ev: ChangeEvent<HTMLInputElement>) {
    ev.persist()

    this.setState(prevState => ({
      game: {
        ...prevState.game,
        [ev.target.name]: ev.target.value
      }
    }))
  }

  private handleDateChange(date: MaterialUiPickersDate) {
    this.setState(prevState => ({
      game: {
        ...prevState.game,
        date: date as Date
      }
    }))
  }


  private async save() {
    if (!this.formIsValid) {
      return
    }

    this.setState({ saving: true })

    await this.gameCreator.save(this.state.game)
      .catch()

    this.setState({ saving: false })
  }
}

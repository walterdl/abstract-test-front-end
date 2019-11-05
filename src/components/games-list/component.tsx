import React, { Component, ReactElement } from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import RefreshIcon from '@material-ui/icons/Refresh'
import Box from '@material-ui/core/Box'

// Own
// Types
import { Game, getGameTypeFriendlyName } from 'common/game'
// Components
import GameFormDialog from './game-form-dialog'
// Services
import GamesListProvider from 'services/games-provider'

interface Props {
  className?: string;
}

interface State {
  games: Game[];
  loading: boolean;
  error?: string | null;
  showForm?: boolean;
}

export default class GamesList extends Component<Props, State> {
  private gamesListProvider = new GamesListProvider()

  private get canRenderGamesList(): boolean {
    return !this.state.loading && !this.state.error
  }

  constructor(props: any) {
    super(props)

    this.state = {
      games: [],
      loading: true
    }

    this.handleGameCreation = this.handleGameCreation.bind(this)
  }

  public componentDidMount() {
    this.loadGames()
  }

  private async loadGames() {
    this.setState({ loading: true, error: null })

    await this.gamesListProvider.getGames()
      .then(games => this.setState({ games }))
      .catch(error => this.setState({ error }))

    this.setState({ loading: false })
  }

  public render(): ReactElement {
    return (
      <>
        <Typography align="center" variant="h3">Listado de Partidos</Typography>
        <br />
        {this.renderOptions()}
        <br />
        <Paper className={this.props.className}>
          {this.renderLoadingIndicator()}
          {this.renderError()}
          {this.renderGamesList()}
          {this.renderGameFormDialog()}
        </Paper>
      </>
    )
  }

  private renderOptions(): ReactElement | null {
    if (this.canRenderGamesList) {
      return (
        <Button
        color="primary"
        variant="outlined"
        onClick={() => this.setGameFormDialogOpenState(true)}>
          Crear partido
        </Button>
      )
    }

    return null
  }

  private renderLoadingIndicator(): ReactElement | null {
    if (this.state.loading) {
      return (
        <Box textAlign="center">
          <span>Cargando partidos</span>
          &nbsp;
          <CircularProgress size={20} />
        </Box>
      )
    }

    return null
  }

  private renderError(): ReactElement | null {
    if (this.state.error) {
      return (
        <Typography>
          <span>Error al cargar partidos. Detalles {this.state.error}</span>
          <br/>
          <Button color="primary">Recargar <RefreshIcon /></Button>
        </Typography>
      )
    }

    return null
  }

  private renderGamesList(): ReactElement | null {
    if (!this.canRenderGamesList) {
      return null
    }

    const { games } = this.state

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre de partido</TableCell>
            <TableCell>Tipo de partido</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!games.length && (
            <TableRow>
              <TableCell component="th" scope="row" colSpan={4}>
                No hay partidos disponibles
              </TableCell>
            </TableRow>
          )}
          {games.length && games.map(game => (
            <TableRow key={game.id}>
              <TableCell component="th" scope="row">
                {game.name}
              </TableCell>
              <TableCell>{game.date.toLocaleString()}</TableCell>
              <TableCell>{getGameTypeFriendlyName(game.type)}</TableCell>
              <TableCell>
                <Button color="primary">Ver</Button>
                &nbsp;
                <Button color="primary">Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  private renderGameFormDialog(): ReactElement | null {
    if (!this.canRenderGamesList) {
      return null
    }

    return (
      <GameFormDialog
        open={this.state.showForm}
        onClose={() => this.setGameFormDialogOpenState(false)}
        onGameCreated={this.handleGameCreation}
      />
    )
  }

  private setGameFormDialogOpenState(open: boolean) {
    this.setState({
      showForm: open
    })
  }

  private handleGameCreation() {
    // TODO
    console.log('game created')
  }
}

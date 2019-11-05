import styled from 'styled-components'
import { withTheme } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import GamesList from './component'

interface Props {
  theme: Theme;
}

const GamesListSC = styled(GamesList)`
padding: ${(props: Props) => props.theme.spacing(2)}px 0;
`

export default withTheme(GamesListSC)
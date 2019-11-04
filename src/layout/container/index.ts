import styled from 'styled-components'
import { withTheme } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

import Container from './component'

interface Props {
  theme: Theme
}

const ContainerSC = styled(Container)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: ${(props: Props) => props.theme.spacing(2)}px;
  padding-top: ${(props: Props) => props.theme.spacing(2)}px;
  position: relative;
  width: 100%;

  ${(props: Props) => props.theme.breakpoints.up(0)} {
    max-width: 580px;
  }

  ${(props: Props) => props.theme.breakpoints.up('sm')} {
    max-width: 580px;
  }

  ${(props: Props) => props.theme.breakpoints.up(720)} {
    max-width: 700px;
  }

  ${(props: Props) => props.theme.breakpoints.up(840)} {
    max-width: 820px;
  }

  ${(props: Props) => props.theme.breakpoints.up('md')} {
    max-width: 940px;
  }

  ${(props: Props) => props.theme.breakpoints.up('lg')} {
    max-width: 1260px;
  }
`
export default withTheme(ContainerSC)

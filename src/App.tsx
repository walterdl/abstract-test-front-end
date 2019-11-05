import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CssBaseLine from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
//
// Sets the MUI styles tag at the top of <head />
// so styles tags from styled components gets more specificity over MUI styles tags.
import { StylesProvider } from '@material-ui/styles'

// Own
import theme from 'config/theme'
import Layout from 'layout'
import GamesList from 'components/games-list'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseLine />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route path="/" exact component={GamesList} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App

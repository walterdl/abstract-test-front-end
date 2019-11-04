import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import CssBaseLine from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
//
// Sets the MUI styles tag at the top of <head />
// so styles tags from styled components gets more specificity over MUI styles tags.
import { StylesProvider } from '@material-ui/styles'

// Own
import theme from 'config/theme'
import Layout from 'layout'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseLine />
        <BrowserRouter>
          <Layout>
            <Switch>
            </Switch>
          </Layout>
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App

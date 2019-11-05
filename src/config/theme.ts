import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3949ab',
      light: '#6f74dd',
      dark: '#00227b',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ec407a',
      light: '#ff77a9',
      dark: '#b4004e',
      contrastText: '#000000',
    },
    error: {
      light: '#e35183',
      main: '#ad1457',
      dark: '#78002e',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
      '"Segoe UI"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

const themeWithResponsiveFontSize = responsiveFontSizes(theme)

export default themeWithResponsiveFontSize
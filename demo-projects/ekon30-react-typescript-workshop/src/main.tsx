import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import App from './App'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#164e8a' },
    secondary: { main: '#b84563' },
    background: { default: '#f4f7fb' },
  },
  shape: { borderRadius: 12 },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

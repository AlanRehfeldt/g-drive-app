import { Routes } from "./routes"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/theme/global"
import { AuthProvider } from "./hooks/auth"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  )
    
}

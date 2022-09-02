import type { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import LoginScreen from '../components/Login'
import GlobalStyles from '../components/styled/GlobalStyles'
import { Theme } from '../components/styled/Theme'

const Home: NextPage = () => {
   return (
      <ThemeProvider theme={Theme}>
         <GlobalStyles />
         <main>
            <LoginScreen />
         </main>
      </ThemeProvider>
   )
}

export default Home

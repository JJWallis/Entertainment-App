import type { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import Navbar from '../components/navbar'
import GlobalStyles from '../components/styled/GlobalStyles'
import { Theme } from '../components/styled/Theme'

const Home: NextPage = () => {
   return (
      <ThemeProvider theme={Theme}>
         <main>
            <GlobalStyles />
            <Navbar />
         </main>
      </ThemeProvider>
   )
}

export default Home

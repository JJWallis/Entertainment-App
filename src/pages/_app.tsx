import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/styled/GlobalStyles';
import { Theme } from '../components/styled/Theme';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ThemeProvider theme={Theme}>
         <GlobalStyles />
         <Component {...pageProps} />
      </ThemeProvider>
   );
}

export default MyApp;

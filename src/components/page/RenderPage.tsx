import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styled/GlobalStyles';

import { Theme } from '../styled/Theme';

interface Props {
   children: React.ReactNode;
}

const RenderPage: React.FC<Props> = ({ children }) => (
   <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <main>{children}</main>
   </ThemeProvider>
);

export default RenderPage;

declare module 'styled-components' {
   export interface DefaultTheme {
      breakPoints: { mobile: string; tablet: string; desktop: string }
   }
}

export const Theme = {
   breakpoints: { mobile: '', tablet: '', desktop: '' },
   colors: {
      brightRed: '#FC4747',
      deepBlue: '#10141E',
      darkBlue: '#161D2F',
      lightBlue: '#5A698F',
      white: '#FFFFFF',
   },
}

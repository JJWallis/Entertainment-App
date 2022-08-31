declare module 'styled-components' {
   export interface DefaultTheme {
      breakPoints: { mobile: string; tablet: string; desktop: string }
   }
}

export const Theme = {
   breakpoints: { mobile: '', tablet: '', desktop: '' },
}

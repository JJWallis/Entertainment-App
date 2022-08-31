declare module 'styled-components' {
   export interface DefaultTheme {
      breakPoints: { mobile: string; tablet: string; desktop: string }
      colors: {
         brightRed: string
         deepBlue: string
         darkBlue: string
         lightBlue: string
         white: string
      }
      fontSizes: {
         bodySmall: string
         bodyLarge: string
         headingExtraSmall: string
         headingSmallMedium: string
         headingLarge: string
      }
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
   fontSizes: {
      bodySmall: '13px',
      bodyLarge: '15px',
      headingExtraSmall: '18px',
      headingSmallMedium: '24px',
      headingLarge: '32px',
   },
}

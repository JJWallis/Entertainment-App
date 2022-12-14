declare module 'styled-components' {
   export interface DefaultTheme {
      breakPoints: {
         mobile: string;
         tablet: string;
         desktop: string;
      };
      colors: {
         brightRed: string;
         deepBlue: string;
         darkBlue: string;
         lightBlue: string;
         white: string;
      };
      fontSizes: {
         bodySmall: string;
         bodyLarge: string;
         headingExtraSmall: string;
         headingSmallMedium: string;
         headingLarge: string;
      };
      fontWeights: {
         light: number;
         medium: number;
         bold: number;
      };
   }
}

export const Theme = {
   breakPoints: { mobile: '', tablet: '768px', desktop: '1000px' },
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
   fontWeights: {
      light: 300,
      medium: 400,
      bold: 500,
   },
};

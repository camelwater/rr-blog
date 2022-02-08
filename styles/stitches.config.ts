import { createStitches } from '@stitches/react';
import globalStyle from './global.style';

export const { styled, getCssText, createTheme, globalCss } = createStitches({
    theme: {
      colors: {
        scrollMain: '#6B7C95',
        scrollMain2: '#8696AD',
        main: '#6B7C95',
        main2: '#8696AD',
        main3: '#adbcd1',
        primary: '#343442',
        dark: '#191919',
        white: '#F4F4F5',
        dropdownHover: '#050505',
        hover: '#5145bd',
        linkHover: '#313131',
        dividerColor: '#7e76f5',
        cardColor: '#282546',
        lightBackground: '#1f1f30',
        slideshowForeground: '#1f1f30',
        background: '#181820',
        codeblockBackground: '#1d262f',
        // background: '#553131',
        navBackground: '#1b1b24',
        dropdownBackground: '#141414',
        dropdownBorder: '#303030',
        lightBorder: '#141414',
        cardBorder: '#272735',
        highlight: '#f3f6f040',
        gradient:
          'linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)',
        dividerColorGreen: '#2cf787',
        greenColor: '#2985483f',
        greenHover: '#40c77d'
      },
      shadows: {
        medium: '0px 4px 12px #1818207f, 0px 8px 16px #13131fdf',
        mediumDrop: 'drop-shadow(0px 6px 6px #0f0e14af) drop-shadow(0px 4px 12px #0000005f)',
        glow: '0px 0px 12px #3c3486df, 0px 0px 32px #3f368f9f',
        largeGlow: '0px 0px 32px #3c3486bf, 0px 0px 48px #3f368faf'

      },
      fontSizes: {
        1: '14px',
        2: '18px',
        3: '20px',
        4: '24px',
        5: '36px',
        6: '48px',
      },
      fonts: {
        main: 'GTWalsheimPro, sans-serif',
        mono: 'JetBrains Mono, monospace',
      },
    },
    media: {
      iPadPro: '(max-width: 1024px)',
      iPad: '(max-width: 768px)',
      Flip: '(max-width: 600px)',
      iPhonePlus: '(max-width: 414px)',
      iPhone: '(max-width: 375px)',
      iPhoneSE: '(max-width: 320px)',
      dark: "(prefers-color-scheme: dark)"
    },
})

export const lightTheme = createTheme(({
  colors: {
    scrollMain: '#5a636e',
    scrollMain2: '#363c44',
    main: '#465261',
    main2: '#556275',
    main3: '#191c22',
    primary: '#dadae2',
    dark: '#F4F4F5',
    white: '#2c2c2c',
    lightBackground: '#d6d6eb',
    slideshowForeground: '#e4e4f10f',
    background: '#e9e9e9',
    codeblockBackground: '#e2e2e2',
    navBackground: '#e9e9f1',
    lightBorder: '#dfdfdf',
    dropdownBackground: '#f5f5f5',
    dropdownBorder: '#e0e0e0',
    cardBorder: '#c2c1cf',
    hover: '#5932e6',
    linkHover: '#dbdbdb',
    dividerColor: '#8579f0',
    cardColor: '#d2d2ee',
    dropdownHover: '#e9e9e9',
    highlight: '#2e2e2e30',
    gradient:
      'linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)',
    dividerColorGreen: '#31d488',
    greenColor: '#aceec23f',
    greenHover: '#67b48a'
  }, 
  shadows: {
    medium: '0px 4px 12px #a09cb37f, 0px 8px 24px #b1aec7ff',
    mediumDrop: 'drop-shadow(0px 6px 6px #a09cb3af) drop-shadow(0px 4px 12px #b1aec7ff)',
    glow: '0px 0px 12px #6f61e9df, 0px 0px 36px #8781f5df',
    largeGlow: '0px 0px 32px #6f61e9bf, 0px 0px 48px #8781f5bf'
  },
}))


export const ContentWrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  // height: '100%'
})

// export const lightGlobalStyles = globalCss({
//   "@light": {
//     ":root:not(.dark)": {
//       ...Object.keys(lightTheme.colors).reduce((varSet, currentColorKey) => {
//         const currentColor = lightTheme.colors[currentColorKey];
//         const currentColorValue =
//           currentColor.value.substring(0, 1) === "$"
//             ? `$colors${currentColor.value}`
//             : currentColor.value;

//         return {
//           [currentColor.variable]: currentColorValue,
//           ...varSet,
//         };  
//       }, {}),

//       ...Object.keys(lightTheme.shadows).reduce((varSet, curShadowKey) => {
//         const currentShadow = lightTheme.shadows[curShadowKey];
//         const currentShadowValue =
//           currentShadow.value.substring(0, 1) === "$"
//             ? `$shadows${currentShadow.value}`
//             : currentShadow.value;

//         return {
//           [currentShadow.variable]: currentShadowValue,
//           ...varSet,
//         };
//       }, {}),
//     },
//   },
// });

// lightGlobalStyles();

globalStyle();
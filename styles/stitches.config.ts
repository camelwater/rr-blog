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
        dividerColor: '#5f55f0',
        cardColor: '#282546',
        lightBackground: '#1f1f30',
        background: '#181820',
        navBackground: '#1b1b24',
        dropdownBackground: '#141414',
        dropdownBorder: '#303030',
        lightBorder: '#141414',
        highlight: '#f3f6f040',
        gradient:
          'linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)',
        dividerColorGreen: '#2cf787',
        greenColor: '#2985483f',
        greenHover: '#40c77d'
      },
      shadows: {
        medium: '1px 2px 2px #17161b, 2px 4px 6px #17161b, 4px 8px 8px #17161b',
        mediumDrop: 'drop-shadow(1px 4px 3px #17161b) drop-shadow(4px 8px 8px #17161b)'

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
    background: '#e9e9e9',
    navBackground: '#e9e9f1',
    lightBorder: '#dfdfdf',
    dropdownBackground: '#f5f5f5',
    dropdownBorder: '#e0e0e0',
    hover: '#5932e6',
    linkHover: '#dddddd',
    dividerColor: '#8379df',
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
    medium: '1px 2px 2px #777581, 2px 4px 6px #9c9ba5, 4px 8px 8px #8e8999',
    mediumDrop: 'drop-shadow(1px 4px 3px #7e7c86) drop-shadow(4px 8px 8px #9c9ba5)'
  },
}))


export const ContentWrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden',
})

export const globalStyles = globalCss({
  "@light": {
    ":root:not(.dark)": {
      ...Object.keys(lightTheme.colors).reduce((varSet, currentColorKey) => {
        const currentColor = lightTheme.colors[currentColorKey];
        const currentColorValue =
          currentColor.value.substring(0, 1) === "$"
            ? `$colors${currentColor.value}`
            : currentColor.value;

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet,
        };  
      }, {}),

      ...Object.keys(lightTheme.shadows).reduce((varSet, curShadowKey) => {
        const currentShadow = lightTheme.shadows[curShadowKey];
        const currentShadowValue =
          currentShadow.value.substring(0, 1) === "$"
            ? `$shadows${currentShadow.value}`
            : currentShadow.value;

        return {
          [currentShadow.variable]: currentShadowValue,
          ...varSet,
        };
      }, {}),
    },
  },
});

globalStyles();

globalStyle();
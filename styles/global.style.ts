
import { globalCss } from '@stitches/react';

const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    // cursor: 'none !important',
    scrollBehavior: 'smooth',
    transition: '0.15s linear'

  },
  svg: {
    transition: 'none'
  },
  html: {
    overflowX: 'hidden',
    height: '100%'
  },
  body: {
    background: '$background',
    overflowX: 'hidden',
    fontFamily: 'GTWalsheimPro',
    // transition: '.15s linear'
    // height: '100%'
  },
  '::selection': {
    background: '$highlight'
  },
  img: {
    userSelect: 'none',
  },
  'body::-webkit-scrollbar': {
    width: '11px',
  },
  'body::-webkit-scrollbar-track': {
    background: '$primary',
    width: '15px'
  },
  'body::-webkit-scrollbar-thumb': {
    background: '$scrollMain',
    borderRadius: '5px',
    border: '2px solid $primary'
  },
  'body::-webkit-scrollbar-thumb:hover': {
    background: '$scrollMain2',
  },
  'code, pre': {
    fontFamily: '$mono',
  },
  ul: {
    marginLeft: 20,
  },
  '.invalid': {
    color: '#F16D6D !important',
  },
  '.disabled': {
    display: 'none !important',
  },
  '@font-face': {
    fontFamily: 'GTWalsheimPro',
    src: 'url(/GTWalsheimPro-Regular.ttf)',
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
  },
  '.ring.hovered': {
    width: 80,
    height: 80,
  },
});

export default globalStyle
import { styled } from '@styles/stitches.config';

export const Container = styled('div', {
    display: 'flex',
    width: '100vw', 
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
})

export const MessageContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    maxWidth: '1200px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
})

export const TitleText = styled('h1', {
    display: 'inline-block',
    background: '$gradient',
    width: 'fit-content',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '$6',
    fontFamily: '$main',
    marginBottom: '1.5rem'
})

export const SuggestionText = styled('p', {
    display: 'flex',
    fontFamily: '$main',
    fontSize: '$3',
    color: '$white'
})

export const LinkText = styled('a', {
    textDecoration: 'none',
    cursor: 'pointer',
    fontFamily: '$main',
    fontSize: '$3',
    color: '$dividerColor',
    zIndex: 99,
    position: 'relative',
    '&:before': {
        zIndex: 9,
        content: '',
        width: 0,
        height: '0.08em',
        position: 'absolute',
        bottom: -2,
        left: 0,
        background: '$hover',
        transition: '0.2s all',
    },
    '&:hover:before': {
        zIndex: 9,
        width: '100%',
        left: 0,
        background: '$hover',
    },
    '&:hover':{
        color: '$hover',
        transform: 'scale(1.025, 1.025)'
    }
})
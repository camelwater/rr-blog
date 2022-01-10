import { styled } from '@styles/stitches.config';

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '75px',
    width: '100vw',
})


export const HeaderContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '15rem',
    height: '20vw',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'contain',
    backgroundImage: 'url(/assets/test.jpg)',
    // backgroundRepeat: 'no-repeat',
})

export const HeaderTextContainer = styled('div', {
    display: 'flex',
    width: '75%',
    maxWidth: '1200px',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingBottom: '4rem',
})

export const AboutContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    maxWidth: '1200px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    
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
})

export const ContentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center'
})

export const H2 = styled('h2', {
    display: 'flex',
    color: '$hover',
    fontFamily: '$main',
    fontSize: '$4',
    paddingBottom: '1rem',
    paddingTop: '5rem'
})

export const Paragraph = styled('div', {
    display: 'flex',
    fontFamily: '$main',
    color: '$white',
    fontSize: '$2',
    paddingBottom: '0.5rem',
    alignItems: 'center',
    justifyContent: 'center',
})

export const LinkText = styled('a', {
    textDecoration: 'none',
    fontFamily: '$main', 
    display: 'flex',
    fontSize: '$2',
    alignItems: 'center',
    color: '$main2',
    position: 'relative',
    transition: '0.1s linear',
    svg: {
        marginRight: '0.5rem',
    },
    '&:hover': {
        color: '$hover',
        // svg: {
        //     transform: 'scale(1.01, 1.01)'
        // }
    },
    '&:before': {
        zIndex: 9,
        content: '',
        width: 0,
        height: '0.08em',
        position: 'absolute',
        bottom: -1,
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
    '@iPhone': {
        fontSize: '$1'
    }
})

export const LinkIcon = styled('a', {
    textDecoration: 'none',
    fontFamily: '$main', 
    display: 'flex',
    fontSize: '$3',
    alignItems: 'center',
    color: '$main3',
    transition: '0.1s linear',
    '&:hover': {
        transform: 'scale(1.1, 1.1)',
        color: '$hover',
    },
})
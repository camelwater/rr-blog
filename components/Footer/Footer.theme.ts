import { styled } from '@styles/stitches.config';

export const FooterCenter = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
    maxWidth: '1200px',
    '@media screen and (max-width: 400px)': {
        flexWrap: 'wrap',
        rowGap: '5px',
        justifyContent: 'center'
    }
})
export const Footer = styled('div', {
    display: 'flex',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    marginTop: '10rem',
    marginBottom: '25px',
    '@iPadPro': {
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: '7.5rem'
    },
})

export const FooterContainer = styled('div', {
    display: 'flex',
    alignItems: 'center'
})

export const LinkText = styled('a', {
    all: 'revert',
    fontFamily: '$mono', 
    display: 'flex',
    fontSize: '$1',
    textDecoration: 'none',
    color: '$main2',
    marginRight: 15,
    transition: '0.1s linear',
    '&:hover': {
        color: '$hover',
        transform: 'scale(1.1, 1.1)'
    },  
    '@iPhonePlus': {
        fontSize: 12
    },
    '@iPhone': {
        fontSize: 10
    },
    '@iPhoneSE': {
        fontSize: 8
    }
})

export const FooterText = styled('p', {
    fontFamily: '$mono', 
    display: 'flex',
    fontSize: '$2',
    alignItems: 'center',
    color: '$main',
    svg: {
        margin: '0 7px'
    },
    '@Flip': {
        fontSize: '$1'
    },
    paddingRight: '1rem'
})

export const FooterLinkText = styled('a', {
    // all: 'revert',
    textDecoration: 'none',
    fontFamily: '$mono', 
    display: 'flex',
    fontSize: '$2',
    alignItems: 'center',
    color: '$main',
    position: 'relative',
    transition: '.15s linear',
    svg: {
        margin: '0 10px'
    },
    '&:hover': {
        transform: 'scale(1.1, 1.1)',
        color: '$hover'
    },
    '@iPhone': {
        fontSize: '$1'
    }
})
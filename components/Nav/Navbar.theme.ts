import { styled } from '@styles/stitches.config';
import { motion } from 'framer-motion';


export const Nav = styled('nav', {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    background: '$navBackground',
    borderBottom: '1px solid $lightBorder',
    alignItems: 'center',
    width: '100vw',

    variants: {
        variant: {
            home: {
                height: '75px'
            },
            rest: {
                height: '75px'
            }
        }
    }
})

export const NavContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    maxWidth: '750px',
    '@iPadPro': {
        width: '50%',
    },
    '@media only screen and (max-width: 700px)': {
        width: '100%',
        justifyContent: 'space-around !important',
    },
    height: '100%',

})

export const LinksContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%'
})


export const TitleLinkText = styled('a', {
    all: 'revert',
    fontFamily: '$mono',
    fontSize: '$4',
    fontWeight: 'bold',
    color: '$main3',
    textDecoration: 'none',
    transition: '0.1s linear',
    variants: {
        variant: {
            rest: {
                '&:hover': {
                    background: '$gradient',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'color-rotation 2.5s',
                    animationIterationCount: 'infinite',
                    animationDirection: 'alternate',
                    transform: 'scale(1.1, 1.1)'
                },
            },
            home: {
                '&:hover': {
                    transform: 'scale(1.1, 1.1)',
                    color: '$hover'
                },
            }
        }
    },  
    '&:active': {
        transform: 'scale(0.95, 0.95)'
    },
    '@iPhoneSE': {
      fontSize: '$2',
    },
  })

export const NavLink = styled('p', {
    color: '$main',
    fontSize: '$2',
    fontWeight: 'bold',
    textDecoration: 'none',
    margin: '0 15px',
    fontFamily: '$main',
    opacity: 1,
    transition: '0.25s linear',
    // '@iPadPro':{
    //     fontSize: '$2'
    // },
    '@iPad': {
        margin: '0 10px'
    }
})

export const LinkBox = styled(motion.div, {
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.75rem',
    // opacity: 0.5,
    '&:hover': {
        backgroundColor: '$linkHover',
        [`${NavLink}`]: {
            color: '$white'
        }
    }
})

export const NavItems = styled('div', {
    display: 'flex',
    marginLeft: '15px',
    '@media only screen and (max-width: 700px)': {
        display: 'none',
    },
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
})

// individual sub menus in the nav bar
export const SubMenu = styled('nav', {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 999,
    // top: 0,
    // left: 0,
    // right: 0,
    background: '$primary',
    alignItems: 'center',
    height: 100,
    width: '50vw',
})
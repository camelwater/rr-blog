import { styled } from '@styles/stitches.config';
import { motion } from 'framer-motion';


export const Nav = styled('nav', {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    isolation: 'isolate',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    background: '$navBackground',
    borderBottom: '1px solid $lightBorder',
    alignItems: 'center',
    width: '100vw',
    transition: '.15s linear',

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
    // border: '1px solid green'

})

export const LinksContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    // border: '1px solid white'
})

export const RightLinksContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    columnGap: '15px',
    '@media screen and (max-width:700px)': {
        display: 'none'
    },
    // border: '1px solid white'
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
    transition: '0.15s linear',
    // '@iPadPro':{
    //     fontSize: '$2'
    // },
    '@iPad': {
        margin: '0 10px'
    },
})

export const LinkBox = styled('div', {
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.75rem',
    position: 'relative',
    '&:hover': {
        // backgroundColor: '$linkHover',
        [`${NavLink}`]: {
            color: '$white'
        }
    },
    '&.active': {
        [`${NavLink}`]: {
            color: '$hover'
        }
    },
})

export const LinkBoxBackground = styled(motion.div, {
    position: 'absolute',
    borderRadius: '0.75rem',
    width: '100%',
    height: '100%',
    backgroundColor: '$linkHover',
    transition: 'background .15s linear',
    zIndex: -9
})

export const ButtonLink = styled('a', {
    all: 'revert',
    textDecoration: 'none',
    backgroundColor: '$hover',
    border: '1px solid $hover',
    borderRadius: '5px',
    fontFamily: '$main',
    fontSize: '$2',
    padding: '5px 12px',
    textAlign: 'center',
    transition: 'ease 200ms',
    '@media screen and (max-width: 250px)': {
        padding: 'calc(.25rem) calc(.55rem)',
        fontSize: 'calc(1rem)'
    },
    variants: {
        variant: {
            desktop: {
                color: '$navBackground',
                '&:hover': {
                    backgroundColor: '$navBackground',
                    color: '$hover'
                }
            },
            mobile: {
                color: '$primary',
                '&:hover': {
                    backgroundColor: '$primary',
                    color: '$hover'
                }
            }
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
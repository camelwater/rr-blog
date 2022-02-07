import { styled } from '@styles/stitches.config';
import { motion } from 'framer-motion';

export const InfoCardContainer = styled('aside', {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    cursor: 'default',
    marginTop: '3rem',
    marginBottom: '3rem',
    padding: '1.75rem',
    width: '100%',
    alignSelf: 'center',
    borderRadius: '0.5rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    variants: {
        variant: {
            info: {
                borderLeft: '0.15rem solid $dividerColor',
                backgroundColor: '$cardColor',
                
            },
            check: {
                borderLeft: '0.15rem solid $dividerColorGreen',
                backgroundColor: '$greenColor',
                a: {
                    color: '$greenHover',
                    position: 'relative',
                    textDecoration: 'none',
                    zIndex: 99,
                    paddingBottom: '0.1rem',
                    background: 'linear-gradient(0deg, $dividerColorGreen, $dividerColorGreen) no-repeat left bottom / 0 .1rem',
                    transition: 'background-size 250ms',
                    '&:where(:hover, :focus-visible)': {
                      backgroundSize: '100% .1rem',
                      backgroundPositionX: 'left',
                      color: '$dividerColorGreen',
                    }
                }
            }
        }
    },
})

export const InfoCard = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // padding: '.5rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    
})

export const ExpandedContainer = styled(motion.div, {
    display: 'flex', 
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    // height: '0%'

})

export const InfoCardHeaderContainer = styled('div', {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    wordWrap: 'break-word',
    // border: '1px solid white'
    // flexWrap: 'wrap',
})

export const CardTitleText = styled('h4', {
    fontFamily: '$main',
    // fontSize: '$2',
    color: '$white',
    maxWidth: '60%',
    fontWeight: 'bolder',
    '@iPhonePlus': {
        fontSize: 'calc(1.1rem)',
    },
    wordWrap: 'break-word',
})

export const PreviewBlockContainer = styled('div', {
    display: 'flex',
    maxWidth: '100%',
    flexDirection: 'column',
    wordWrap: 'break-word',
})

export const MainText = styled('div', {
    fontFamily: '$main',
    fontSize: 'calc(1.1rem)',
    color: '$white',
    paddingTop: '1rem',
    // flexWrap: 'wrap',
    // overflowWrap: 'break-word',
    // wordWrap: 'break-word',
})

export const PreviewText = styled(MainText, {

})

export const ExpandedText = styled(motion.div, {
    fontFamily: '$main',
    fontSize: 'calc(1.1rem)',
    color: '$white',
    paddingTop: '1rem',
    // flexWrap: 'wrap',
    // overflowWrap: 'break-word',
    // wordWrap: 'break-word'
})

export const ExtendButtonContainer = styled('div', {
    display: 'flex',
    // minWidth: '60%',
    justifyContent: 'flex-end',
})

export const ExtendText = styled('div', {
    display: 'flex',
    wordWrap: 'break-word',
    wordBreak: 'keep-all',

})

export const ExtendSVG = styled('div', {
    display: 'flex',
    marginLeft: '5px',
    
    transition: 'transform .1s linear',

})

export const ExtendButton = styled('div', {
    display: 'flex',
    padding: '0.4rem 0.6rem',
    cursor: 'pointer',
    backgroundColor: '$primary',
    borderRadius: '0.5rem',
    fontFamily: '$main',
    fontSize: '$2',
    color: '$white',
    transition: 'all .1s linear',
    alignItems: 'center',
    // flexWrap: 'wrap', 
    '@iPhonePlus': {
        fontSize: 'calc(0.85rem)'
    },
    variants: {
        variant: {
            info: {
                '&:hover': {
                    color: '$hover'
                }
            },
            check: {
                '&:hover': {
                    color: '$greenHover'
                }
            }
        },
        open: {
            yes: {
                '&:hover': {
                    [`${ExtendSVG}`]: {
                        transform: 'translate3d(0, -15%, 0)'
                    }
                },
            },
            no: {
                '&:hover': {
                    [`${ExtendSVG}`]: {
                        transform: 'translate3d(0, 15%, 0)'
                    }
                },
            }
        }
    }
        
})


// ICON
export const IconContainer = styled('div', {
    backgroundColor: '$background',
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '10rem',
    position: 'absolute',
    display: 'flex',
    top: '-1.5rem',
    left: '-2rem',
    zIndex: 99,
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.15s linear',
    variants: {
        variant: {
            info: {
                color: '$dividerColor',
            },
            check: {
                color: '$dividerColorGreen',
            }
        }
    }
    // border: '1px solid white'
})

export const HighLevelCardContainer = styled('div', {
    width: '107.5%',
    alignSelf: 'center',
    '@iPadPro': {
        width: '110%'
    },
    '@iPad': {
        width: '100%'
    },
    display: 'flex',
})

export const preStyle = styled('div', {
    display: 'flex',
    borderRadius: 5,
    background: '#282c34',
    width: '100%',
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    // fontFamily: `JetBrains Mono, monospace`,
    fontSize: '1rem',
    overflowX: 'auto',
    overflowY: 'auto',
    maxHeight: '45rem',
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
        width: '12px',
        height: '12px',
    },
    '&::-webkit-scrollbar-track': {
        background: '$primary',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
    },
    '&::-webkit-scrollbar-thumb': {
        background: '$scrollMain',
        borderRadius: 3
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '$scrollMain2',
    }
})

export const highlightStyle = {
    padding: '20px',
    margin: 0,
    width: '100%',
    overflow: 'visible',
}

export const ImgContainer = styled('div', {
    display: 'flex',
    width: '850px',
    height: '500px',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    border: '1px solid white',
    img: {
        borderRadius: 10,
        placeSelf: 'center',
        maxWidth: '90%',
    }
})
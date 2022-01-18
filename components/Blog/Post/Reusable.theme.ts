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

})

export const InfoCardHeaderContainer = styled('div', {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    wordWrap: 'break-word'
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
export const ExtendButton = styled('div', {
    display: 'flex',
    padding: '0.55rem',
    cursor: 'pointer',
    backgroundColor: '$primary',
    borderRadius: '0.5rem',
    fontFamily: '$main',
    fontSize: '$2',
    color: '$white',
    // minWidth: '50px',
    transition: 'all .15s linear',
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
        }
    }
        
})

export const ExtendText = styled('div', {
    display: 'flex',
    wordWrap: 'break-word',
    wordBreak: 'keep-all',

})

export const ExtendSVG = styled('div', {
    display: 'flex',
    marginLeft: '5px',
    transition: '0s'
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
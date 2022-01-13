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
                    '&:before': {
                        background: '$dividerColorGreen'
                    },
                    '&:hover:before': {
                        background: '$dividerColorGreen'
                    },
                    '&:hover': {
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
    // flexWrap: 'wrap'
})

export const CardTitleText = styled('h4', {
    fontFamily: '$main',
    // fontSize: '$2',
    color: '$white',
    // paddingBottom: '1rem',
    fontWeight: 'bolder',
    '@iPhonePlus': {
        fontSize: 'calc(1.1rem)',
        fontWeight: '10rem'
    },
    flexWrap: 'wrap',
    overflowWrap: 'anywhere'
})

export const MainText = styled('div', {
    fontFamily: '$main',
    fontSize: 'calc(1.1rem)',
    color: '$white',
    paddingTop: '1rem',
    flexWrap: 'wrap',
    overflowWrap: 'anywhere',
})

export const PreviewText = styled(MainText, {

})

export const ExpandedText = styled(motion.div, {
    fontFamily: '$main',
    fontSize: 'calc(1.1rem)',
    color: '$white',
    paddingTop: '1rem',
    flexWrap: 'wrap',
    overflowWrap: 'anywhere',
})

export const ExtendButtonContainer = styled('div', {
    display: 'flex',
    minWidth: '60%',
    justifyContent: 'flex-end'
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
    fontWeight: 'bold',
    transition: 'all .15s linear',
    alignItems: 'center',
    svg: {
        marginLeft: '5px',
        transition: '0s'
    }, 
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
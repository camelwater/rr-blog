import { styled } from '@styles/stitches.config';
// import Image from 'next/image';


export const CardContainer = styled('div', {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '3.5rem',

})

export const Card = styled('div', {
    display: 'flex',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    justifyContent: 'space-between',
    borderRadius: '2rem',
    backgroundColor: '$lightBackground',
    border: '0.5px solid $cardBorder',
    transition: '350ms ease',
    '&:hover': {
        // transform: 'translate(0, -1.75%)',
        transform: 'scale(1.05, 1.05)',
        boxShadow: '$largeGlow',
    },
    '&:active': {
        transform: 'scale(0.975, 0.975)',
        
    },
    '@iPad': {
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        '&:hover': {
            transform: 'scale(1.025, 1.025)'
        }
    },
    '@media screen and (max-width: 500px)': {
        '&:hover': {
            transform: 'scale(1.025, 1.025)'
        }    
    }
}) 

export const CardLink = styled('div', {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@iPad': {
        width: '95%',
    }
})

export const StyledImage = styled('img', {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    justifyContent: 'center',
    transition: '.4s linear',
    '@iPad': {
        // width: 'fit-content',
        // height: 'min-content'
    },
})

export const ImageHoverDarken = styled('div', {
    display: 'flex',
    position: 'absolute',
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    opacity: '0',
    transition: 'opacity .2s linear'
})

export const InnerImgContainer = styled('div', {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
    width: '90%',
    overflow: 'hidden',
    borderRadius: '1.5rem',
    '@iPad': {
        height: '100%',
        width: '100%',
        borderRadius: '0',
        borderTopRightRadius: '1.5rem',
        borderTopLeftRadius: '1.5rem',
    },
})
export const ImgContainer = styled('div', {
    display: 'flex',
    position: 'relative',
    // overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '35%',
    maxWidth: '35%',
    transition: '0.1s linear',
    '@iPadPro': {
        minWidth: '40%',
        maxWidth: '40%'
    },
    '@iPad': {
        minWidth: '100%',
        maxWidth: '100%',
        // height: '25rem'
    },
    '&:hover': {
        [`& ${ImageHoverDarken}`]: {
            opacity: '0.25',
        },
        [`& ${StyledImage}`]: {
            transform: 'scale(1.05, 1.05)',
        }
    }
})

export const TextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // maxWidth: '65%',
    wordWrap: 'break-word',
    paddingLeft: '1rem',
    paddingRight: '1.5rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    '@iPad': {
        width: '90%',
        alignItems: 'center',
        padding: 0,
        paddingTop: '.5rem',
        paddingBottom: '.5rem'
    },
    '@media screen and (max-width: 500px)': {
        paddingTop: 0
    },
})

export const InfoContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    '@iPad': {
        alignItems: 'center',
        textAlign: 'center',
        // paddingBottom: '2rem',
    },
})

export const TitleText = styled('h1', {
    fontSize: '$5',
    fontFamily: '$main',
    background: '$gradient',
    width: 'fit-content',
    display: 'inline-block',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '.5rem',
    // paddingRight: '1rem',
    '@iPad': {
        fontSize: '$5',
        padding: 0
    },
    '@media screen and (max-width: 550px)': {
        fontSize: '$4'
    },
    '@iPhone': {
        fontSize: '$3'
    }
})

export const SubTitle = styled('p', {
    fontSize: '$2',
    fontFamily: '$main',
    color: '$main',
    '@iPad': {
        fontSize: '$1'
    },
})

export const Description = styled('p', {
    fontSize: '$3',
    fontFamily: '$main',
    color: '$white',
    marginTop: '1.5rem',
    // paddingRight: '1rem',
    '@iPadPro': {
        fontSize: '16px'
    },
    '@iPad': {
        padding: 0,
        fontSize: '16px'
    },
    '@media screen and (max-width: 500px)': {
        display: 'none'
    }
})

export const BottomContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '1.5rem',
    paddingTop: '.5rem',
    paddingBottom: '1rem',
    '@iPad': {
        margin: 0,
        alignItems: 'center',
        paddingTop: 0
    }
})

export const BottomInfoContainer = styled('div', {
    display: 'flex',
    '@iPad': {
        alignItems: 'center',
        justifyContent: 'center'
    },
    columnGap: '1.5rem',
    flexWrap: 'wrap'
})

export const BottomInfoText = styled('div', {
    display: 'flex',
    fontFamily: '$primary',
    fontSize: '$2',
    color: '$white',
    alignItems: 'center',
    // variants: {
    //     variant: {
    //         first: {
    //             marginRight: '2rem',
    //         },
    //         last: {
    //             margin: 0
    //         }
    //     }
    // },
    '@iPad': {
        fontSize: '$1'
    },
    '@iPhone': {
        fontSize: 'calc(.75rem)'
    }

})

export const TopicsContainer = styled('div', {
    display: 'flex',
    marginBottom: '1rem',
    flexWrap: 'wrap',
    gap: '.25rem .5rem',
    alignItems: 'center',
    '@iPad': {
        justifyContent: 'center',
    },
    '@media screen and (max-width: 500px)': {
        display: 'none'
    }
})

export const Topic = styled('div', {
    display: 'flex',
    background: '$dark',
    borderRadius: '5rem',
    padding: '0.4rem 0.75rem',
    transition: 'background 150ms linear',
    '&:hover': {
        background: '$dividerColor'
    }
})

export const TopicText = styled('p', {
    fontFamily: '$main',
    fontSize: 'calc(1rem)',
    color: '$white',
    '@iPadPro': {
        fontSize: '$1'
    }
})
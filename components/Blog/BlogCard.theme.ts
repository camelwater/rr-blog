import { styled } from '@styles/stitches.config';
// import Image from 'next/image';


export const CardContainer = styled('div', {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
})

export const Card = styled('div', {
    display: 'flex',
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
            transform: 'scale(1.01, 1.01)'
        }
    },
}) 

export const CardLink = styled('div', {
    textDecoration: 'none',
    display: 'flex',
    marginBottom: '7rem',
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
    transition: '.2s linear',
    '@iPad': {
        // width: 'min-content',
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

export const ImgContainer = styled('div', {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    minWidth: '35%',
    maxWidth: '35%',
    borderTopLeftRadius: '1.5rem',
    borderBottomLeftRadius: '1.5rem',
    transition: '0.1s linear',
    '@iPadPro': {
        maxWidth: '40%'
    },
    '@iPad': {
        maxWidth: '100%',
        borderRadius: '0',
        borderTopRightRadius: '1.5rem',
        borderTopLeftRadius: '1.5rem',
        // height: '25rem'
    },
    '&:hover': {
        [`${ImageHoverDarken}`]: {
            opacity: '0.25',
        },
        [`${StyledImage}`]: {
            transform: 'scale(1.1, 1.1)',
        }
    }
})

export const TextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // maxWidth: '65%',
    wordWrap: 'break-word',
    paddingLeft: '2.5rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    '@iPad': {
        width: '90%',
        alignItems: 'center',
        padding: 0,
        paddingTop: '1.5rem',
        paddingBottom: '1rem'
    },
    // border: '1px solid white'
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
    }
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
    '@iPad': {
        fontSize: '$5'
    },
    '@media screen and (max-width: 550px)': {
        fontSize: '$4'
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
    paddingRight: '1rem',
    '@iPadPro': {
        // fontSize: '$2'
    },
    '@iPad': {
        padding: 0,
        fontSize: '16px'
    },
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
    }
})

export const Topic = styled('div', {
    display: 'flex',
    background: '$dark',
    borderRadius: '1rem',
    padding: '0.5rem 0.75rem',
    // variants: {
    //     variant: {
    //         first: {
    //             margin: 0
    //         },
    //         rest: {
    //             marginLeft: '0.5rem'
    //         }
    //     }
    // }
})

export const TopicText = styled('p', {
    fontFamily: '$main',
    fontSize: 'calc(1rem)',
    color: '$white',
    '@iPadPro': {
        fontSize: '$1'
    }
})
import { styled } from '@styles/stitches.config';
import Image from 'next/image';

export const Card = styled('div', {
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'space-between',
    borderRadius: '2rem',
    backgroundColor: '$lightBackground',
    
    transition: '0.15s linear',
    marginBottom: '7rem',
    '&:hover': {
        transform: 'translate(0, -2.5%)'
    },
    '@iPad': {
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        '&:hover': {
            transform: 'scale(1.02, 1.02)'
        }
    },
})

export const CardLink = styled('a', {
    textDecoration: 'none'
})

export const ImgContainer = styled('div', {
    display: 'flex',
    overflow: 'hidden',
    maxWidth: '25%',
    borderTopLeftRadius: '1.5rem',
    borderBottomLeftRadius: '1.5rem',
    '@iPadPro': {
        maxWidth: '30%'
    },
    '@iPad': {
        maxWidth: '100%',
        borderRadius: '0',
        borderTopRightRadius: '1.5rem',
        borderTopLeftRadius: '1.5rem'
    },
    // border: '1px solid white'
})

export const StyledImage = styled('img', {
    width: '100%',
    height: '100%',
    // borderRadius: '1.5rem',
    '@iPad': {
        width: '30rem',
        height: '25rem'
    },
    '&:hover': {
        transform: 'scale(1.1, 1.1)',
        filter: 'blur(1px)',
    },
})

export const TextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '75%',
    wordWrap: 'break-word',
    paddingLeft: '2.5rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    '@iPad': {
        width: 'calc(25rem)',
        alignItems: 'center',
        padding: 0,
        paddingTop: '1.5rem',
        paddingBottom: '1rem'
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
        paddingBottom: '2rem'
    }
})

export const TitleText = styled('h1', {
    fontSize: '$4',
    fontFamily: '$main',
    background: '$gradient',
    width: 'fit-content',
    display: 'inline-block',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '2rem'
})

export const Description = styled('p', {
    fontSize: '$3',
    fontFamily: '$main',
    color: '$main',
    paddingRight: '1rem',
    '@iPadPro': {
        fontSize: '$2'
    },
    '@iPad': {
        padding: 0
    },
})

export const BottomContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '1.5rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    '@iPad': {
        margin: 0,
        alignItems: 'center',
    }
})

export const BottomInfoContainer = styled('div', {
    display: 'flex',
    '@iPad': {
        alignItems: 'center'
    }
})

export const BottomInfoText = styled('div', {
    display: 'flex',
    fontFamily: '$primary',
    fontSize: '$2',
    color: '$white',
    alignItems: 'center',
    variants: {
        variant: {
            first: {
                marginRight: '2rem',
            },
            last: {
                margin: 0
            }
        }
    },
    '@iPadPro': {
        fontSize: '$2'
    }

})

export const TopicsContainer = styled('div', {
    display: 'flex',
    marginBottom: '1rem',
    flexWrap: 'wrap',
    alignItems: 'center',
    '@iPad': {
        justifyContent: 'center',
    }
})

export const Topic = styled('div', {
    display: 'flex',
    background: '$dark',
    borderRadius: '0.75rem',
    padding: '0.5rem',
    variants: {
        variant: {
            first: {
                margin: 0
            },
            rest: {
                marginLeft: '0.5rem'
            }
        }
    }
})

export const TopicText = styled('p', {
    fontFamily: '$main',
    fontSize: '$2',
    color: '$white',
    '@iPadPro': {
        fontSize: '$1'
    }
})
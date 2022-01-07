import { styled } from '@styles/stitches.config';
import Image from 'next/image';

export const Card = styled('div', {
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'center',
    borderRadius: '2rem',
    backgroundColor: '$primary',
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

export const ImgContainer = styled('div', {
    display: 'flex',
    overflow: 'hidden',
    width: 'max-content',
    height: 'max-content'
})

export const StyledImage = styled('img', {
    width: 'stretch',
    height: '',
    borderRadius: '1.5rem',
    '@iPad': {
        width: '350px',
        height: '300px'
    },
    '&:hover': {
        transform: 'scale(1.05, 1.05)',
        filter: 'blur(1px)',
        borderRadius: '3rem'
    },
})

export const TextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '70%',
    wordWrap: 'break-word',
    paddingLeft: '3rem',
    '@iPad': {
        width: '300px',
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
    marginBottom: '1rem'
})

export const Description = styled('p', {
    fontSize: '$3',
    fontFamily: '$main',
    color: '$main',
    paddingRight: '1rem',
    '@iPad': {
        padding: 0
    },
})

export const BottomContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '1.5rem',
    paddingBottom: '1rem',
    '@iPad': {
        margin: 0,
        alignItems: 'center'
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
    fontSize: '$3',
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
    '@iPad': {
    }

})

export const TopicsContainer = styled('div', {
    display: 'flex',
    marginBottom: '1rem',
    flexWrap: 'wrap',
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
})
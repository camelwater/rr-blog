import { styled } from '@styles/stitches.config';

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
})

export const DescriptionContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    maxWidth: '1000px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '@iPadPro': {
        width: '85%',
        alignItems: 'center'
    }

})

export const TextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '@iPadPro': {
        alignItems: 'center'
    },
})

export const TitleText = styled('h1', {
    display: 'inline-block',
    background: '$gradient',
    width: 'fit-content',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '$5',
    fontFamily: '$main',
    marginBottom: '5rem'
})

export const DescText = styled('p', {
    fontFamily: '$main',
    color: '$white',
    fontSize: '$3',
    marginBottom: 40,
    '@iPadPro': {
        fontSize: '$2',
    },
})
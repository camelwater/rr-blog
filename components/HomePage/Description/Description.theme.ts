import { styled } from '@styles/stitches.config';
import { motion } from 'framer-motion';

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
    '@Flip': {
        fontSize: '$2',
    },
})

export const ItemGridContainer = styled('div', {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    '@iPadPro': {
        justifyContent: 'center',
    }
})

export const ItemGrid = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: '15rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: '2.5rem',
    '@iPadPro': {
        padding: '0'
    }
})

export const ItemContainer = styled(motion.div, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: '$main',
    fontSize: '$3',
    padding: '.5rem',
    transition: '.15s linear',
    '@Flip': {
        fontSize: '$2',
    },
})

export const SVG = styled('div', {
    display: 'flex',
    transition: '0.15s linear',
    paddingRight: '.25rem',
    '&:hover': {
        transform: 'scale(1.1, 1.1)'
    }
})

export const ItemLink = styled('a', {
    cursor: 'pointer',
    transition: '0.15s linear',
    '&:hover': {
        transform: 'scale(1.05, 1.05)'
    }
})
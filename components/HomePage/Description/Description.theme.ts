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
        // alignItems: 'center',
        // textAlign: 'center'
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
        // justifyContent: 'center',
    },
    '@iPhone': {
        justifyContent: 'center'
    }
})

export const ItemGrid = styled(motion.div, {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: '12.5rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    columnGap: '2.5rem',
    paddingLeft: '3.5rem',
    '@iPadPro': {
        padding: '0',
        // justifyContent: 'center'
    },
    '@iPhone': {
        maxHeight: 'unset',
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
    '@media screen and (max-width: 500px)': {
        fontSize: '$1'
    }
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
    display: 'inline-flex',
    flexDirection: 'column',
    cursor: 'pointer',
    flexWrap: 'wrap',
    maxWidth: '100%',
    columnGap: '.25rem',
    transition: '0.15s linear',
    '&:hover': {
        transform: 'scale(1.05, 1.05)'
    }
})
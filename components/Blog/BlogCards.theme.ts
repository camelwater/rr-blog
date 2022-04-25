import { styled } from '@styles/stitches.config';

export const Container = styled('div', {
    display: 'flex',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
})

export const BlogsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
    maxWidth: '1200px',
    justifyContent: 'center',
    alignItems: 'center',
    '@media screen and (max-width: 700px)': {
        width: '85%'
    }
})

export const HeaderContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10rem',
    textAlign: 'center',
    // marginBottom: '5rem',

})

export const HeaderText = styled('h1', {
    textDecoration: 'none',
    fontFamily: '$main',
    fontSize: '$6',
    color: '$hover',
    marginBottom: '2.5rem'
})

export const DescText = styled('p', {
    fontFamily: '$main',
    fontSize: '$3',
    color: '$white',
})

export const CardsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

})
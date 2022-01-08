import { styled } from '@styles/stitches.config';

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
})

export const BlogContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
})

export const HeaderContainer = styled('div', {
    paddingTop: '7.5rem',
    display: 'flex',
    width: '100%',
    backgroundColor: '$lightBackground',
    alignItems: 'center',
    justifyContent: 'center'
})

export const HeaderInnerContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '70%',
    maxWidth: '1200px',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: '1.5rem',
    '@iPad': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const ContentContainer = styled('div', {
    display: 'flex',
    width: '70%',
    maxWidth: '1200px',
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    paddingTop: '7.5rem',
    // border: '1px solid white'
 
})

export const PostContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    '@iPad': {
        width: '100%'
    },
    alignItems: 'flex-start',

    'h1, h2, h3, h4, h5, h6, h7, p, a, strong': {
        fontFamily: '$main',
    },
    'h1, pre': {
        margin: '0px 0',
        display: 'inline-block',
        background: '$gradient',
        width: 'fit-content',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '$6',
        fontFamily: '$main',
        alignText: 'left'
    },
    h2: {
        // marginTop: 100,
        marginBottom: 30,
        color: '$hover',
        fontSize: '$5',
        '@iPadPro': {
            fontSize: '30px'
        }
    },
    h3: {
        marginTop: 35,
        marginBottom: 25,
        color: '$white',
        fontSize: '$4'
    },
    pre: {
        borderRadius: 12,
        width: '100%',
        '@Flip': {
            maxWidth: '90vw',
        },
    },
    code: {},
    p: {
        color: '$white',
        fontSize: '$3',
        margin: '10px 0 15px 0',
        '@iPadPro': {
            fontSize: '$2'
        }
    },
    img: {
        borderRadius: 10,
        maxWidth: '60vw',
    },
    a: {
        color: '$dividerColor',
        position: 'relative',
        textDecoration: 'none',
        zIndex: 99,
        '@iPadPro': {
            fontSize: '$2'
        },
        '&:before': {
            zIndex: 9,
            content: '',
            width: 0,
            height: '0.075em',
            position: 'absolute',
            bottom: -1,
            left: 0,
            background: '$hover',
            transition: '0.3s all',
        },
        '&:hover:before': {
            zIndex: 9,
            width: '100%',
            left: 0,
            background: '$dividerColor',
        },
        '&:hover': {
            color: '$hover',
        }
    },
})

export const TitleText = styled('h1', {
    color: '$white',
    fontFamily: '$primary',
    fontSize: '$6',
    paddingTop: '5rem',
    paddingBottom: '1.5rem',
    '@iPadPro': {
        fontSize: '42px'
    },
    '@iPad': {
        fontSize: '$6',
        paddingBottom: '5rem'
    }
})

export const InfoContainer = styled('div', {
    alignItems: 'flex-end',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    // paddingBottom: '2.5rem',
    '@iPad': {
        alignItems: 'center'
    }
})

export const TopicsContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: '1rem'
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

export const BottomInfoContainer = styled('div', {
    display: 'flex',
    justifyContent: 'flex-end',
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
        fontSize: '$1'
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

import { styled as sstyled } from '@styles/stitches.config';
import styled from 'styled-components';

export const Container = sstyled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
})

export const BlogContainer = sstyled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
})

export const HeaderContainer = sstyled('div', {
    paddingTop: '7.5rem',
    display: 'flex',
    width: '100%',
    backgroundColor: '$lightBackground',
    alignItems: 'center',
    justifyContent: 'center'
})

export const HeaderInnerContainer = sstyled('div', {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '80%',
    maxWidth: '1200px',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: '1.5rem',
    '@iPad': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    }
})

export const ContentContainer = sstyled('div', {
    display: 'flex',
    width: '80%',
    maxWidth: '1200px',
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    paddingTop: '7.5rem',
    '@iPad': {
        width: '90%',
        alignItems: 'center'
    },
    // border: '1px solid white'
 
})

export const AbstractPostContainer = sstyled('div', {
    display: 'flex',
    width: '65%', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    '@iPadPro': {
        width: '100%',
    },
    '@iPad': {
        justifyContent: 'center'
    }
    
})

export const PostContainer = sstyled('article', {
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 'calc(1.25rem)',
    wordWrap: 'break-word',
    wordBreak: 'break-word',

    'h1, h2, h3, h4, h5, h6, h7, p, a, strong': {
        fontFamily: '$main',
    },
    'h1, pre': {
        margin: '0',
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
    'h2, h3': {
        scrollMarginTop: '7.5rem'
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
        // fontSize: 'calc(1.2rem)',
        margin: '10px 0 15px 0',
        // overflowWrap: 'anywhere',
        // wordWrap: 'break-word',
    },
    img: {
        borderRadius: 10,
        maxWidth: '60vw',
    },
    
})

export const TitleContainer = sstyled('div', {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '7rem',
    paddingBottom: '1.5rem',
    '@iPad': {
        paddingBottom: '5rem',
        paddingTop: '5rem',
        alignItems: 'center'
    }
})

export const TitleText = sstyled('h1', {
    color: '$white',
    fontFamily: '$primary',
    fontSize: '$6',
    paddingBottom: '1.5rem',
    '@iPadPro': {
        fontSize: '42px'
    },
    // '@iPad': {
    //     // fontSize: '$6',
    //     paddingBottom: '2rem'
    // },
    '@iPhonePlus': {
        fontSize: '$5'
    }
})

export const SubTitle = sstyled('h2', {
    color: '$main', 
    fontFamily: '$main',
    fontSize: '$4',
    // paddingBottom: '1.5rem',
    // '@iPad': {
    //     // fontSize: '$6',
    //     paddingBottom: '5rem'
    // },
})

export const InfoContainer = sstyled('div', {
    alignItems: 'flex-end',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '40%',
    // paddingBottom: '2.5rem',
    '@iPad': {
        maxWidth: '75%',
        alignItems: 'center'
    },
    // border: '1px solid white'
})

export const TopicsContainer = sstyled('div', {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: '1rem',
    gap: '0.5rem',
    '@iPad': {
        justifyContent: 'center'
    }
})

export const Topic = sstyled('div', {
    display: 'flex',
    cursor: 'default',
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

export const BottomInfoContainer = sstyled('div', {
    display: 'flex',
    justifyContent: 'flex-end',
    '@iPad': {
        alignItems: 'center'
    }
})
export const BottomInfoText = sstyled('div', {
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

export const TopicText = sstyled('p', {
    fontFamily: '$main',
    fontSize: '$2',
    color: '$white',
    '@iPadPro': {
        fontSize: '$1'
    }
})

export const AbstractTableContentsContainer = sstyled('div', {
    display: 'flex',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    '@iPadPro': {
        display: 'none'
    },
    position: 'sticky',
    top: '20%',
})

export const TableContentsContainer = styled(AbstractTableContentsContainer)`
    position: sticky;
    position: -webkit-sticky;
`

// MDX component styles (MDX remote)

// export const H1 = sstyled('h1', {
//     margin: '0px 0',
//     display: 'inline-block',
//     background: '$gradient',
//     width: 'fit-content',
//     backgroundClip: 'text',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     fontSize: '$6',
//     fontFamily: '$main',
//     alignText: 'left',
// })

export const H2 = sstyled('h2', {
    // marginTop: 100,
    marginBottom: 30,
    color: '$hover',
    fontSize: '$5',
    '@iPadPro': {
        fontSize: '30px'
    },
   
})

export const H3 = sstyled('h3', {
    marginTop: 35,
    marginBottom: 25,
    color: '$white',
    fontSize: '$4',
})

export const H4 = sstyled('h4', {
    color: '$white',
    fontSize: '$3',
    marginTop: '3rem',
    marginBottom: '2.5rem',
    
})

export const P = sstyled('p', {
    color: '$white',
    fontSize: '$3',
    margin: '10px 0 15px 0',
    '@iPadPro': {
        fontSize: '$2'
    }
})

export const IMG = sstyled('p', {
    borderRadius: 10,
    maxWidth: '110%',
})

export const A = sstyled('a', {
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
})
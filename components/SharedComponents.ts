import { styled } from '@styles/stitches.config';

export const Divider = styled('div', {
    marginBottom: '7rem',
    marginTop: '5rem',
    width: '5%',
    height: '0.25rem',
    backgroundColor: '$dividerColor',
    '@media screen and (max-width: 700px)': {
        width: '12.5%',
    },
    variants: {
        variant: {
            first: {
                display: 'none'
            },
            rest: {
                
            }
        }
    }
})

export const CenterDivider = styled(Divider, {
    justifyContent: 'center',
    variants: {
        variant: {
            first: {
                display: 'none'
            },
            rest: {
                display: 'flex'
            }
        }
    }
})


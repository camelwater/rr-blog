import { styled } from '@styles/stitches.config';

export const Slideshow = styled('div', {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    position: 'fixed',
    left: 0,
    zIndex: -9,
})

export const Slider = styled('div', {
    whiteSpace: 'nowrap',
    transition: 'ease 750ms',
    width: '100%',
    height: '100%'
})

export const IMG = styled('img', {
    width: '100%',
    height: '100%',
    opacity: '0.15',
})
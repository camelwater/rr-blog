import { styled } from '@styles/stitches.config';
import { motion } from 'framer-motion';

export const InfoCardContainer = styled('aside', {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'default',
    marginTop: '3rem',
    marginBottom: '3rem',
    padding: '1.75rem',
    width: '100%',
    alignSelf: 'center',
    borderRadius: '0.5rem',
    backgroundColor: '$cardColor',
    borderLeft: '0.15rem solid $dividerColor',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
})

export const InfoCard = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // padding: '.5rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
})

export const ExpandedContainer = styled(motion.div, {
    display: 'flex', 
    flexDirection: 'column', 
    width: '100%', 
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
})

export const InfoCardHeaderContainer = styled('div', {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
})

export const CardTitleText = styled('h4', {
    fontFamily: '$main',
    fontSize: '$3',
    color: '$white',
    // paddingBottom: '1rem',
    fontWeight: 'bolder'
})

export const MainText = styled('div', {
    fontFamily: '$main',
    fontSize: 'calc(1.1rem)',
    color: '$white',
    paddingTop: '1rem',
    flexWrap: 'wrap',
    overflowWrap: 'anywhere',
})

export const PreviewText = styled(MainText, {

})

export const ExpandedText = styled(motion.div, {
    fontFamily: '$main',
    fontSize: 'calc(1.1rem)',
    color: '$white',
    paddingTop: '1rem',
    flexWrap: 'wrap',
    overflowWrap: 'anywhere',
})

export const ExtendButton = styled(motion.div, {
    display: 'flex',
    padding: '0.55rem',
    cursor: 'pointer',
    backgroundColor: '$lightBackground',
    borderRadius: '0.5rem',
    fontFamily: '$main',
    fontSize: '$2',
    color: '$white',
    fontWeight: 'bold',
    transition: 'all .15s linear',
    alignItems: 'center',
    svg: {
        marginLeft: '5px',
        transition: '0s'
    }, 
    '&:hover': {
        color: '$hover'
    }
})


// ICON
export const IconContainer = styled('div', {
    backgroundColor: '$background',
    color: '$dividerColor',
    position: 'relative',
    display: 'flex',
    top: 0,
    right: 0
})

export const HighLevelCardContainer = styled('div', {
    width: '110%',
    alignSelf: 'center',
    '@iPad': {
        width: '100%'
    }
})
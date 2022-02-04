import React from 'react';
import * as Theme from './Description.theme';
import ScrollAnimation from 'react-animate-on-scroll';
import { Divider } from '@components/SharedComponents';
import { VscPackage } from 'react-icons/vsc';

const items = [
    {
        name: 'Next',
        link: 'https://www.nextjs.org',
    },
    {
        name: 'React',
        link: 'https://www.reactjs.org'
    },
    {
        name: 'Stitches',
        link: 'https://www.stitches.dev'
    },
    {
        name: "Framer Motion",
        link: 'https://framer.com/motion'
    },
    {
        name: "React Syntax Highlighter",
        link: 'https://github.com/react-syntax-highlighter/react-syntax-highlighter'
    },
    {
        name: 'next-mdx-remote',
        link: 'https://github.com/hashicorp/next-mdx-remote'
    },
    {
        name: 'Vercel',
        link: 'https://www.vercel.com'
    }
];

const DescriptionComponent: React.FC = () => {
    return (
        <Theme.Container id='context'>
            <Theme.DescriptionContainer>
                <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOnce={true}
                    animatePreScroll={false}
                    duration={0.5}
                >
                    <Theme.TitleText>
                        What is this?
                    </Theme.TitleText>
                </ScrollAnimation>
                <Theme.TextContainer> 
                    <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOnce={true}
                    animatePreScroll={false}
                    duration={0.5}
                    delay={150}
                    >
                        <Theme.DescText>
                            This is a website developed by myself in{' '}
                            <Theme.ItemLink href='https://www.typescriptlang.org' target='_blank'>
                                TypeScript
                            </Theme.ItemLink>
                            , with the help of a few useful tools:
                        </Theme.DescText>
                    </ScrollAnimation>
                    <Theme.ItemGridContainer>
                        <Theme.ItemGrid>
                            {
                                items.map((item, index) => (
                                    <ScrollAnimation
                                        animateIn='animate__fadeInUp'
                                        animateOnce={true}
                                        animatePreScroll={false}
                                        duration={0.25}
                                        delay={250 + 75*index}
                                        key={index}
                                    >
                                        <Theme.ItemContainer key={index}>
                                            <Theme.SVG><VscPackage /></Theme.SVG>
                                            <Theme.ItemLink href={item.link} target='_blank'>{item.name}</Theme.ItemLink>
                                        </Theme.ItemContainer>
                                    </ScrollAnimation>
                                ))
                            }
                        </Theme.ItemGrid>
                    </Theme.ItemGridContainer>
                </Theme.TextContainer>
                <Divider />
                <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOnce={true}
                    animatePreScroll={false}
                    duration={0.5}
                >
                    <Theme.TitleText>
                        Why?
                    </Theme.TitleText>
                </ScrollAnimation>
                
                <Theme.TextContainer> 
                    <ScrollAnimation
                        animateIn='animate__fadeInUp'
                        animateOnce={true}
                        animatePreScroll={false}
                        duration={0.5}
                        delay={150}
                    >  
                        <Theme.DescText>
                            I wanted to merge my passion for programming 
                            and my newfound interest in front-end web development with the creative, explorative endeavours of writing.
                        </Theme.DescText>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn='animate__fadeInUp'
                        animateOnce={true}
                        animatePreScroll={false}
                        duration={0.5}
                        delay={150}
                    > 
                        <Theme.DescText>
                            And this is what came to be.
                        </Theme.DescText>
                    </ScrollAnimation>
                </Theme.TextContainer>
               
            </Theme.DescriptionContainer>
        </Theme.Container>
    );
}

export default DescriptionComponent
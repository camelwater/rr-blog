import React from 'react';
import { useState } from 'react';
import * as Theme from './Reusable.theme';
// import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { HiOutlineCheckCircle } from 'react-icons/hi';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark as highlightTheme } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import highlightTheme from 'prism-react-renderer/themes/duotoneDark';

const cardExpansion = {
    collapsed: {
        height: '0',
        transition: {
            when: "beforeChildren",
            // duration: 0.1,
            // ease: 'easeOut',
            // type: 'tween'
        }
    },
    expanded: {
        height: '100%',
        transition: {
            // type: "spring",
            // damping: 2.5,
            // mass: 0.2,
            // stiffness: 50,
            // ease: 'easeOut',
            // type: 'tween',
            when: "beforeChildren",
            // duration: 0.2

        }
    }
};

const cardExpansion2 = {
    collapsed: {
        height: '2.5rem',
        transition: {
            when: "beforeChildren",
            // duration: 0.1,
            // ease: 'easeOut',
            // type: 'tween'
        }
    },
    expanded: {
        height: '100%',
        transition: {
            // type: "spring",
            // damping: 2.5,
            // mass: 0.2,
            // stiffness: 50,
            // ease: 'easeOut',
            // type: 'tween',
            when: "beforeChildren",
            // duration: 0.2

        }
    }
};

const textFade = {
    hidden: {
        // visibility: 'collapse',
        opacity: 0,
        y: -25,
        transition: {
            duration: 0.15
        }
    },
    visible: {
        // visibility: 'visible',
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.15
        }
    }
};

export const ExpandableCardComponent: React.FC<{ 
    children?,
    title: string, 
    previewContent, 
    type?: string,
}> = ({ children=null, title, previewContent, type='info' }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const ToggleOpen = () => {
        setOpen(!isOpen);
    }
    // const previewContentList = previewContent.split('\n');
    const CornerIcon = type==="info"?HiOutlineInformationCircle:HiOutlineCheckCircle;
    const isInfoCard = type==='info';

    return (
        <Theme.InfoCardContainer variant={isInfoCard?'info':'check'}>
            <Theme.IconContainer variant={isInfoCard?'info':'check'}>
                <CornerIcon />
            </Theme.IconContainer>
            <Theme.InfoCard>
                <Theme.InfoCardHeaderContainer>
                    <Theme.CardTitleText>{title}</Theme.CardTitleText>
                </Theme.InfoCardHeaderContainer>
                    <Theme.PreviewBlockContainer>
                        <Theme.PreviewText>
                            {previewContent}
                        </Theme.PreviewText>
                    </Theme.PreviewBlockContainer>
            </Theme.InfoCard>
            <Theme.ExpandedContainer variants={cardExpansion} animate={isOpen ? "expanded":"collapsed"} initial={'collapsed'}>
                <Theme.ExpandedText variants={textFade} animate={isOpen ? "visible":"hidden"} initial={'hidden'}>{children}</Theme.ExpandedText>
            </Theme.ExpandedContainer>
            {children !== null && 
                    <Theme.ExtendButton variant={isInfoCard?'info':'check'} open={isOpen?'yes':'no'} onClick={ToggleOpen}>
                        <Theme.ExtendText>Show{isOpen?' less':' more'}</Theme.ExtendText>
                        <Theme.ExtendSVG>{isOpen?<FiChevronUp />:<FiChevronDown />}</Theme.ExtendSVG>
                    </Theme.ExtendButton>    
            }
        </Theme.InfoCardContainer>
    );
}

export const InfoCardComponent: React.FC<{ 
    children?,
    title: string, 
    previewContent, 
}> = ({ children=null, title, previewContent }) => {
    return (
        <Theme.HighLevelCardContainer>            
            <ExpandableCardComponent title={title} previewContent={previewContent} type='info'>
                {children}
            </ExpandableCardComponent>
        </Theme.HighLevelCardContainer>
    );
}

export const CheckCardComponent: React.FC<{ 
    children?,
    title: string, 
    previewContent, 
}> = ({ children=null, title, previewContent }) => {
    return (
        <Theme.HighLevelCardContainer>            
            <ExpandableCardComponent title={title} previewContent={previewContent} type='check'>
                {children}
            </ExpandableCardComponent>
        </Theme.HighLevelCardContainer>
    );
}

export const CodeBlock: React.FC<{ className: string, children: string }> = ({ className, children }) => {
    const match = /language-(\w+)/.exec(className || '');
    // return (
    //     <Theme.preStyle>
    //         <SyntaxHighlighter
    //             wrapLines
    //             // wrapLongLines
    //             // showLineNumbers
    //             // useInlineStyles={false}
    //             style={highlightTheme}
    //             customStyle={Theme.highlightStyle}
    //             language={match?match[1]:null}
    //             CodeTag='div'
    //         >   
    //             {children.trim()}
    //         </SyntaxHighlighter>
    //     </Theme.preStyle>
    // );

    return (
        <Highlight {...defaultProps} code={children.trim()} language={match[1] as Language} theme={undefined}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Theme.Pre className={className}>
                    {tokens.map((line, i) => (
                        <Theme.Line key={i} {...getLineProps({ line, key: i })}>
                            <Theme.LineCode>
                                {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </Theme.LineCode>
                        </Theme.Line>
                    ))}
                </Theme.Pre>
            )}
        </Highlight>
    );
}

export const QuoteBlock: React.FC<{ text: string }> = ({ text }) => {
    return (
        <></>
    );
}

export const ImageComponent: React.FC<{ children: any }> = ({ children }) => {
    console.log(children)
    return (
        <Theme.ImgContainer>
            {children}
        </Theme.ImgContainer>
    );
}
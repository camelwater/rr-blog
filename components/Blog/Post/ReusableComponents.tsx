import React from 'react';
import { useState } from 'react';
import * as Theme from './Reusable.theme';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { HiOutlineCheckCircle } from 'react-icons/hi';

export const ExpandableCardComponent: React.FC<{ 
children?,
title: string, 
previewContent: string, 
type?: string,
}> = ({ children=null, title, previewContent, type='info' }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const ToggleOpen = () => {
        setOpen(!isOpen);
    }

    const cardExpansion = {
        collapsed: {
            height: 0,
            display: 'none',
            transition: {
                when: "afterChildren",
            },
        },
        expanded: {
            height: "100%",
            display: 'flex',
            transition: {
              when: "beforeChildren",
            },
        }
    };
    
    const textFade = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 0.1,
            },
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.25,
            },
        }
    };
    const previewContentList = previewContent.split('\n');
    const CornerIcon = type==="info"?HiOutlineInformationCircle:HiOutlineCheckCircle
    const isInfoCard = type==='info';

    return (
        <Theme.InfoCardContainer variant={isInfoCard?'info':'check'}>
            <Theme.IconContainer variant={isInfoCard?'info':'check'}>
                    <CornerIcon size={'2.5rem'}/>
            </Theme.IconContainer>
            <Theme.InfoCard>
                <Theme.InfoCardHeaderContainer>
                    <Theme.CardTitleText>{title}</Theme.CardTitleText>
                    {children !== null &&
                        <Theme.ExtendButton variant={isInfoCard?'info':'check'} onClick={ToggleOpen} >
                            <Theme.ExtendText>Show{isOpen?' less':' more'}</Theme.ExtendText>
                            <Theme.ExtendSVG>{isOpen?<FiChevronUp />:<FiChevronDown />}</Theme.ExtendSVG>
                        </Theme.ExtendButton>
                            
                    }
                </Theme.InfoCardHeaderContainer>
                    <Theme.PreviewBlockContainer>
                    {
                        previewContentList.map((paragraph, index) => (
                            <Theme.PreviewText key={index}>{paragraph}</Theme.PreviewText>
                    ))}
                    </Theme.PreviewBlockContainer>
            </Theme.InfoCard>
            <Theme.ExpandedContainer variants={cardExpansion} animate={isOpen ? "expanded":"collapsed"} initial={false}>
                <Theme.ExpandedText variants={textFade} animate={isOpen ? "visible":"hidden"} initial={false}>{children}</Theme.ExpandedText>
            </Theme.ExpandedContainer>
        </Theme.InfoCardContainer>
    );
}

export const InfoCardComponent: React.FC<{ 
children?,
title: string, 
previewContent: string, 
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
previewContent: string, 
}> = ({ children=null, title, previewContent }) => {
    return (
        <Theme.HighLevelCardContainer>            
            <ExpandableCardComponent title={title} previewContent={previewContent} type='check'>
                {children}
            </ExpandableCardComponent>
        </Theme.HighLevelCardContainer>
    );
}

export const CodeBlock: React.FC = () => {
    return (
        <></>
    );
}

export const QuoteBlock: React.FC<{ text: string }> = ({ text }) => {
    return (
        <></>
    );
}
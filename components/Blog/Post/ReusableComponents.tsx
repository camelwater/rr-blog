import React from 'react';
import { useState } from 'react';
import * as Theme from './Reusable.theme';

export const InfoCard: React.FC<{ 
title: string, 
content: string, 
expandedContent?: string
}> = ({ title, content, expandedContent=null }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const ToggleOpen = () => {
        setOpen(!isOpen);
    }

    return (
        <></>
    );
}

export const ExpandableCard: React.FC = () => {
    return (
        <></>
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
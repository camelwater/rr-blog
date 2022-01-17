import React from 'react';
import { useState } from 'react';
import { styled as sstyled } from '@styles/stitches.config';
// import styled from 'styled-components';
import Link from 'next/link';
import { useActiveHash } from '@hooks/useActiveHash';
import { isMobile } from '@utils/isMobile';
const headerRegExp = /^###*\s/;
const headerIDRegExp = /^.+(\s*\{#([A-Za-z0-9\-_]+?)\}\s*)$/;

const slugify = (s: string) => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, "-"));

/**
 * removes the ID from MD headers
 * @param header the raw header with the ID included
 * @returns the cleaned header with the ID removed
 */
export function trimHeader( header: string ) {
    const match = headerIDRegExp.exec(header);
    const trimmedHeader = match ? header.replace(match[1], "").trim() : header;
    return trimmedHeader;
}

/**
 * 
 * @param header the raw header with the title and ID
 * @returns the header ID if it exists; otherwise, the slugified header title
 */
export function getHeaderID( header: string ) {
    const match = headerIDRegExp.exec(header);
    let headerID = match ? match[2] : header;
    headerID = slugify(headerID);
    return headerID;
}

function getTOC( rawText: string ) {
    const headingLines = rawText
        .split('\n')
        .filter((line) => {
            return line.match(headerRegExp);
        })
        .map((line) => {
            return line.trim();
        });

    let tocArray = [];
    let idArray = [];

    headingLines.forEach((line) => {
        let header = line.replace(headerRegExp, '').trim(); // get rid of the hashtags at the beginning
        const id = getHeaderID(header);
        header = trimHeader(header); // get rid of ID tag
        const level = (line.replace(`{#${id}}`, '').match(/#/g)||[]).length; //get number of #
        if ([2, 3].includes(level)) // only using h2 and h3
            tocArray.push({ header, id, level });
            idArray.push(id);
    })
    
    return { tocArray, idArray };
}

const TableContainer = sstyled('div', {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '1rem',
    paddingLeft: '1rem',
    borderLeft: '0.1rem solid $lightBackground',
    zIndex: 99,

})


const TableTitle = sstyled('h3', {
    textTransform: 'uppercase',
    fontFamily: '$mono',
    fontSize: '$3',
    color: '$white',
    paddingBottom: '1.5rem'
})

const ListContainer = sstyled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    transition: '0.15s linear',

    // overflowY: 'scroll',
    // '&::-webkit-scrollbar': {
    //     width: 5,
    // },
    // '&::-webkit-scrollbar-track': {
    //     background: '$primary',
    // },
    // '&::-webkit-scrollbar-thumb': {
    //     background: '$scrollMain',
    //     borderRadius: '100px'
    // },
    // '&::-webkit-scrollbar-thumb:hover': {
    //     background: '$scrollMain2',
    // },
})

const StyledItem = sstyled('li', {
    display: 'flex',
    padding: '0.5rem',
    fontSize: 'calc(1rem)',
    fontFamily: '$main',
    color: '$main2',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    transition: '0.1s linear',
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
        color: '$white',
        '&:after': {
            transition: '0.1s linear',
            content: '',
            backgroundColor: '$background',
            border: '1px solid $white',
            borderRadius: '50%',
            width: '.5rem',
            height: '.5rem',
            position: 'absolute',
            left: '-1.33rem',
            top: '50%',
            marginTop: '-0.25rem',
        }
    },
    '&.active': {
        color: '$hover',
        '&:after': {
            content: '',
            backgroundColor: '$hover',
            border: '1px solid $hover',
            borderRadius: '50%',
            width: '.5rem',
            height: '.5rem',
            position: 'absolute',
            left: '-1.33rem',
            top: '50%',
            marginTop: '-0.25rem',
        }
    },
    variants: {
        level: {
            2: {
                marginLeft: '0'
            },
            3: {
                marginLeft: '1.5rem'
            },
        }
    }
})

// const StyledListItem = styled(Item)`
//     margin-left: calc(1.5rem * ${({level}) => level-2});
// `

const ListItem: React.FC<{ item, activeHash: string }> = ({ item, activeHash }) => {
    const url = `#${item.id}`
    let isActive = activeHash === item.id;

    let className = '';
    if (isActive) // && item.level==2 // only show which h2 section is active
        className = 'active';

    return (
        <Link href={url} passHref={true}>
            <StyledItem level={item.level} className={className}>
                {item.header}
            </StyledItem>
        </Link>
    );
} 

export const TableOfContents: React.FC<{ textSource: string }> = ({ textSource }) => {
    const toc = getTOC(textSource);
    const tocItems = toc.tocArray;
    const titleIDs = isMobile() ? [] : toc.idArray;
    // const [activeHash, setActiveHash] = useState('');
    const activeHash = useActiveHash(titleIDs);

    return (
        <TableContainer>
            <TableTitle>Table of Contents</TableTitle>
            <ListContainer>
            {
                tocItems.map((item, index) => (
                    <ListItem item={item} activeHash={activeHash} key={index}/>
                ))
            }
            </ListContainer>
        </TableContainer>
    );
}

export default TableOfContents
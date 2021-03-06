import Link from 'next/link';
import * as NavBar from './Navbar.theme';
import * as NavMenu from './Navmenu.theme';
import React, { useState } from 'react';
import { ThemeToggle } from '@components/ThemeToggle';
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
import useActiveLocation from '@hooks/useActiveLocation';

const menuVariants = {
    visible: {
        left: 0,
        transition: {
            // duration: 0.35,
            when: 'afterChildren',
            type: 'spring',
            stiffness: 50,
            mass: 0.3,
            damping: 5.75
            // damping: 16
        }
    },
    hidden: {
        left: '-100%',
        transition: {
            // duration: 0.25,
            when: 'beforeChildren',
            type: 'spring',
        }
    }
};

const fadeVariants = {
    visible: {
        opacity: 1,
        display: 'flex',
        // width: '100%',
        transition: {
            duration: .25
        }
    },
    hidden: {
        opacity: 0,
        display: 'none',
        // width: 0,
        transition: {
            duration: 0.15
        }
    }
}

const NavigationComponent: React.FC<{isHome?: boolean}> = ({isHome}) => {
    const Links = [
        {
            name: 'Posts',
            link: '/posts'
        },
        {
            name: 'About',
            link: '/about'
        }
    ];

    const [nav, setNav] = useState<boolean>(false);
    const [hoveredTab, setHoveredTab] = useState<string>('');
    const activePage = useActiveLocation();
    // const [menu, setMenu] = React.useState<string>(null);

    const ToggleNav = () => {
        setNav((prevState) => !prevState)
        // setNav(!nav);
        if (nav) {
            document.documentElement.style.overflowY = 'scroll';
        } else {
            document.documentElement.style.overflowY = 'hidden';
        }
    }

    return (
        <> 
                        
            {/* Desktop */}
            <NavBar.Nav variant={isHome?'home':'rest'}>
                <NavBar.NavContainer>
                    <NavBar.LinksContainer>
                        <Link href='/' passHref={true}>
                            <NavBar.TitleLinkText variant={isHome?'home':'rest'}>RR.</NavBar.TitleLinkText>
                        </Link>
                        <NavBar.NavItems>
                                {Links.map((entry, index) => (
                                    <Link href={entry.link} passHref={true} key={index}>
                                        <NavBar.LinkBox 
                                            className={activePage===entry.link?'active':''} 
                                            onMouseOver={() => setHoveredTab(entry.link)}
                                            onMouseLeave={() => setHoveredTab('')}
                                        >
                                            <NavBar.NavLink>
                                                {entry.name}
                                            </NavBar.NavLink>
                                            {hoveredTab===entry.link && 
                                                <NavBar.LinkBoxBackground
                                                    layoutId="border"
                                                    transition={{duration: 0.15}}
                                                />
                                            } 
                                        </NavBar.LinkBox>
                                    </Link>
                                ))}
                        </NavBar.NavItems>
                    </NavBar.LinksContainer>
                    <NavBar.RightLinksContainer>
                        {/* <Link passHref href='https://www.globalgiving.org/projects/ukraine-crisis-relief-fund/'>
                            <a style={{fontSize: '1rem'}}>
                                I stand with Ukraine
                            </a>
                        </Link> */}
                        <NavBar.ButtonLink 
                            variant='desktop'
                            href='https://www.github.com/camelwater/rr-blog' target='_blank'
                        >
                            Repo
                        </NavBar.ButtonLink>
                        <ThemeToggle type='desktop' />
                    </NavBar.RightLinksContainer>
                    <NavMenu.MenuButton onClick={ToggleNav}> {/* Mobile Menu Button */}
                        {nav?<HiOutlineX size={30} />:<HiMenuAlt4 size={30}/>}
                    </NavMenu.MenuButton>
                </NavBar.NavContainer>
                
                {/* Mobile */}
                <NavMenu.ProxyMenuContainer 
                    onClick={ToggleNav} 
                    variants={fadeVariants}
                    initial='hidden'
                    animate={nav?'visible':'hidden'}
                />
                <NavMenu.MenuContainer
                    variants={menuVariants}
                    initial={'hidden'}
                    animate={nav?'visible':'hidden'}
                >
                    <NavMenu.Menu>
                        {
                            Links.map((entry, index) => (
                                <Link href={entry.link} key={index} passHref={true}>
                                    <NavMenu.MenuLink onClick={ToggleNav}>{entry.name}</NavMenu.MenuLink>
                                </Link>
                        ))}
                    </NavMenu.Menu>
                    <NavMenu.BottomMenu>
                        <ThemeToggle type='mobile' />
                        <NavBar.ButtonLink href='https://www.github.com/camelwater/english-blog' target='_blank' variant='mobile'>
                            Repo
                        </NavBar.ButtonLink>
                    </NavMenu.BottomMenu>
                </NavMenu.MenuContainer>
            </NavBar.Nav>
        </>
    );
}

export default NavigationComponent
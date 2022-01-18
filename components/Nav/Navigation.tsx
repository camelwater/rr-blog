import Link from 'next/link';
import * as NavBar from './Navbar.theme';
import * as NavMenu from './Navmenu.theme';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// import SmoothScroll from '@components/Scroll';
import { ThemeToggle } from '@components/ThemeToggle';
import { HiMenuAlt4 } from 'react-icons/hi';
import useActiveLocation from '@hooks/useActiveLocation';
// import getActiveLocation from '@utils/getActiveLocation';


const NavigationComponent: React.FC<{isHome?: boolean}> = ({isHome}) => {
    const [nav, setNav] = useState<boolean>(false);
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

    return (
        <> 
            <CSSTransition in={nav} timeout={300} classNames='menu' unmountOnExit>
                <NavMenu.MenuContainer>
                    <NavMenu.Menu>
                        {
                            Links.map((entry, index) => (
                                <Link href={entry.link} key={index} passHref={true}>
                                    <NavMenu.MenuLink onClick={ToggleNav}>{entry.name}</NavMenu.MenuLink>
                                </Link>
                        ))}
                        
                    </NavMenu.Menu>
                    <NavMenu.ProxyMenuContainer onClick={ToggleNav} />
                    <NavMenu.BottomMenu variant='first' >
                        <ThemeToggle type='mobile' />
                    </NavMenu.BottomMenu>
                </NavMenu.MenuContainer>
            </CSSTransition>

            <NavBar.Nav variant={isHome?'home':'rest'}>
                <NavBar.NavContainer>
                    <NavBar.LinksContainer>
                        <Link href='/' passHref={true}>
                            <NavBar.TitleLinkText variant={isHome?'home':'rest'}>RR.</NavBar.TitleLinkText>
                        </Link>
                        <NavBar.NavItems>
                            {Links.map((entry, index) => (
                                <Link href={entry.link} passHref={true} key={index}>
                                    <NavBar.LinkBox  className={activePage===entry.link?'active':''}>
                                        <NavBar.NavLink>
                                            {entry.name}
                                        </NavBar.NavLink> 
                                    </NavBar.LinkBox>
                                </Link>
                            ))}
                        </NavBar.NavItems>
                    </NavBar.LinksContainer>
                    <NavBar.RightLinksContainer>
                        <NavBar.ButtonLink 
                            href='https://www.github.com/camelwater/english-blog' target='_blank'
                        >
                            Repo
                        </NavBar.ButtonLink>
                        <ThemeToggle type='desktop' />
                    </NavBar.RightLinksContainer>
                    <NavMenu.MenuButton onClick={ToggleNav}>
                        <HiMenuAlt4 size={30}/>
                    </NavMenu.MenuButton>
                </NavBar.NavContainer>
            </NavBar.Nav>
        </>
    );
}

export default NavigationComponent
import React from 'react';
import * as Theme from './About.theme';
import { HiOutlineMail } from 'react-icons/hi';
import { TiLocation } from 'react-icons/ti';
import Link from 'next/link';

const AboutComponent: React.FC = () => {
    return (
        <Theme.Container>
            <Theme.HeaderContainer>
                <Theme.HeaderTextContainer>
                    <Theme.TitleText>About</Theme.TitleText>
                </Theme.HeaderTextContainer>
            </Theme.HeaderContainer>
            <Theme.AboutContainer>
                <Theme.ContentContainer>
                    <Theme.H2>Ryan Z</Theme.H2>
                    <Theme.Paragraph>17.</Theme.Paragraph>
                    <Theme.Paragraph><TiLocation />&nbsp;Hyakutake.</Theme.Paragraph>
                    <Theme.Paragraph>
                        Enjoys coding, F1, soccer.
                    </Theme.Paragraph>
                    <Theme.Paragraph>
                        <Link href='/#context' passHref>
                            <Theme.LinkText>
                                What&apos;s this website?
                            </Theme.LinkText>
                        </Link>
                    </Theme.Paragraph>
                    <Theme.H2>Contact</Theme.H2>
                    <Theme.Paragraph>
                        <Theme.LinkText href='mailto:rsramblings@gmail.com'>
                            <HiOutlineMail />
                            rsramblings@gmail.com
                        </Theme.LinkText>
                    </Theme.Paragraph>
                </Theme.ContentContainer>
            </Theme.AboutContainer>
        </Theme.Container>
    );
}

export default AboutComponent
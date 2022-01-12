import React from 'react';
import * as Theme from './About.theme';
import { HiOutlineMail } from 'react-icons/hi';
import { VscGithub } from 'react-icons/vsc';
import { TiLocation } from 'react-icons/ti';

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
                    <Theme.H2>Ryan Zhao</Theme.H2>
                    <Theme.Paragraph>17.</Theme.Paragraph>
                    <Theme.Paragraph><TiLocation />&nbsp;Katy, TX.</Theme.Paragraph>
                    <Theme.Paragraph>
                        <Theme.LinkIcon href='https://www.github.com/camelwater' target='_blank' >
                            <VscGithub />
                        </Theme.LinkIcon>
                    </Theme.Paragraph>
                    <Theme.H2>Contact</Theme.H2>
                    <Theme.Paragraph>
                        <Theme.LinkText href='mailto:rzhao@emeryweiner.org'>
                            <HiOutlineMail />rzhao@emeryweiner.org
                        </Theme.LinkText>
                    </Theme.Paragraph>
                </Theme.ContentContainer>
            </Theme.AboutContainer>
        </Theme.Container>
    );
}

export default AboutComponent
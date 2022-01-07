import React from 'react';
import * as Icons from 'react-icons/fi';
import * as Theme from './Footer.theme';
import Link from 'next/link';

const FooterComponent: React.FC = () => {

    return (
        <Theme.Footer>
            <Theme.FooterCenter>
                <Theme.FooterContainer>
                    <Theme.FooterText>
                        Built with&nbsp;
                        <Theme.FooterLinkText href='https://www.nextjs.org' target='_blank'>
                            Next
                        </Theme.FooterLinkText>
                    </Theme.FooterText>
                </Theme.FooterContainer>

                <Theme.FooterContainer>
                    <Theme.FooterText>Ryan Z&nbsp;&nbsp;&nbsp;</Theme.FooterText>
                    <Theme.LinkText href='https://www.github.com/camelwater/english-blog' target='_blank'>
                        <Icons.FiGithub size={'1.5rem'}/>
                    </Theme.LinkText>
                </Theme.FooterContainer>
            </Theme.FooterCenter>
        </Theme.Footer>
    );
}

export default FooterComponent
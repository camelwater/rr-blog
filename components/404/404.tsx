import React from 'react';
import * as Theme from './404.theme';
import Link from 'next/link';

const ErrorComponent: React.FC = () => {
    return (
        <Theme.Container>
            <Theme.MessageContainer>
                <Theme.TitleText>Resource could not be found.</Theme.TitleText>
                <Theme.SuggestionText>
                    Try searching what you are looking for or&nbsp;
                    <Link href='/' passHref={true}>
                        <Theme.LinkText>return home</Theme.LinkText>
                    </Link>
                    .
                </Theme.SuggestionText>
            </Theme.MessageContainer>
        </Theme.Container>
    );
}

export default ErrorComponent
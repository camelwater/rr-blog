import React from 'react';
import * as Theme from './Description.theme';
import ScrollAnimation from 'react-animate-on-scroll';
import { Divider } from '@components/SharedComponents';

const DescriptionComponent: React.FC = () => {
    return (
        <Theme.Container>
            <Theme.DescriptionContainer>
                <Theme.TitleText>
                    What is this?
                </Theme.TitleText>
                <Theme.TextContainer> 
                    <Theme.DescText>
                        FILLER
                    </Theme.DescText>
                </Theme.TextContainer>
                <Divider />
                <Theme.TitleText>
                    Why?
                </Theme.TitleText>
                <Theme.TextContainer> 
                    <Theme.DescText>
                        FILLER
                    </Theme.DescText>
                    <Theme.DescText>
                        FILLER #2
                    </Theme.DescText>
                </Theme.TextContainer>
            </Theme.DescriptionContainer>
        </Theme.Container>
    );
}

export default DescriptionComponent
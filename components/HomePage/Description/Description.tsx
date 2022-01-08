import React from 'react';
import * as Theme from './Description.theme';
import ScrollAnimation from 'react-animate-on-scroll';
import { Divider } from '@components/SharedComponents';

const DescriptionComponent: React.FC = () => {
    return (
        <Theme.Container>
            <Theme.DescriptionContainer>
                <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOnce={true}
                    animatePreScroll={false}
                >
                    <Theme.TitleText>
                        What is this?
                    </Theme.TitleText>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn='animate__backInUp'
                    animateOnce={true}
                    animatePreScroll={false}
                >
                    <Theme.TextContainer> 
                        <Theme.DescText>
                            FILLER
                        </Theme.DescText>
                    </Theme.TextContainer>
                </ScrollAnimation>
                <Divider />
                <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOnce={true}
                    animatePreScroll={false}
                >
                    <Theme.TitleText>
                        Why?
                    </Theme.TitleText>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn='animate__backInUp'
                    animateOnce={true}
                    animatePreScroll={false}
                >
                    <Theme.TextContainer> 
                        <Theme.DescText>
                            FILLER
                        </Theme.DescText>
                        <Theme.DescText>
                            FILLER #2
                        </Theme.DescText>
                    </Theme.TextContainer>
                </ScrollAnimation>
            </Theme.DescriptionContainer>
        </Theme.Container>
    );
}

export default DescriptionComponent
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
                    duration={0.5}
                >
                    <Theme.TitleText>
                        What is this?
                    </Theme.TitleText>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOnce={true}
                    animatePreScroll={false}
                    duration={0.5}
                    delay={150}
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
                    duration={0.5}
                >
                    <Theme.TitleText>
                        Why?
                    </Theme.TitleText>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOnce={true}
                    animatePreScroll={false}
                    duration={0.5}
                    delay={150}
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
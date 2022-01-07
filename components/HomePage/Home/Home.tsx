import * as Theme from './Home.theme';
import ScrollAnimation from 'react-animate-on-scroll';
import React from 'react';
import ReactPlayer from 'react-player/file';
import { isMobile } from '@utils/isMobile';

const HomeComponent: React.FC = () => {
    return (
        <Theme.Container id='home'>

            <Theme.IntroContainer>
                
                <ScrollAnimation
                    animateIn='animate__bounceInLeft'
                    delay={200}
                    animateOnce={true}
                >
                    <Theme.NameText>BLOG</Theme.NameText>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn='animate__flipInX'
                    animateOnce={true}
                    delay={200}
                >
                    <Theme.IntroText>very cool stuff going on</Theme.IntroText>
                </ScrollAnimation>
                    {/* {!isMobile() && 
                        <Theme.VideoContainer>
                            <ReactPlayer
                                playing={true}
                                volume={0}
                                muted={true}
                                loop={true}
                                playsinline={true}
                                url='/assets/background_video.mp4'
                                height='100%'
                                width='100%'
                            />
                        </Theme.VideoContainer>
                    } */}
            </Theme.IntroContainer>
        </Theme.Container>

    );
}

export default HomeComponent
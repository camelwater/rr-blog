import * as Theme from './Home.theme';
// import ScrollAnimation from 'react-animate-on-scroll';
import React from 'react';
import BackgroundSlideshow from './BackgroundSlideshow';
// import ReactPlayer from 'react-player/file';

const HomeComponent: React.FC<{ images }> = ({ images }) => {
    return (
        <Theme.Container id='home'>
            <BackgroundSlideshow images={images}/>
            <Theme.IntroContainer>
                <Theme.NameText>BLOG</Theme.NameText>
                <Theme.IntroText>very cool happening here</Theme.IntroText>
            </Theme.IntroContainer>
        </Theme.Container>

    );
}

export default HomeComponent
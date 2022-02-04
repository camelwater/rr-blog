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
                <Theme.NameText>RR.</Theme.NameText>
                <Theme.IntroText>Ryan&apos;s Ramblings On Some Cool Stuff</Theme.IntroText>
            </Theme.IntroContainer>
        </Theme.Container>

    );
}

export default HomeComponent
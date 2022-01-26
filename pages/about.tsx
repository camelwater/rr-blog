import FooterComponent from '@components/Footer/Footer';
import NavigationComponent from '@components/Nav/Navigation';
import AboutComponent from '@components/AboutPage/About';
import SmoothScroll from '@components/Scroll';
import Head from 'next/head';
import React from 'react';
import { ContentWrapper } from '@styles/stitches.config';

const AboutPage: React.FC = () => {
    return (
        <ContentWrapper>
            <Head>
                <title>RR. | About</title>
            </Head>
            <SmoothScroll />
            <NavigationComponent />
            <AboutComponent /> 
            <FooterComponent />
        </ContentWrapper>
    );
}

export default AboutPage
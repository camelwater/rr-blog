import FooterComponent from '@components/Footer/Footer';
import NavigationComponent from '@components/Nav/Navigation';
import AboutComponent from '@components/AboutPage/About';
import SmoothScroll from '@components/Scroll';
import Head from 'next/head';
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>RR. | About</title>
            </Head>
            <SmoothScroll />
            <NavigationComponent />
            <AboutComponent /> 
            <FooterComponent />
        </>
    );
}

export default AboutPage
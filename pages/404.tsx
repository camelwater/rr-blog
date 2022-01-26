import FooterComponent from '@components/Footer/Footer';
import NavigationComponent from '@components/Nav/Navigation';
import ErrorComponent from '@components/404/404';
import Head from 'next/head';
import React from 'react';
import { ContentWrapper } from '@styles/stitches.config';

const NotFoundPage: React.FC = () => {
    return (
        <ContentWrapper>
            <Head>
                <title>RR. | 404</title>
            </Head>
            <NavigationComponent />
            <ErrorComponent />
            <FooterComponent />
        </ContentWrapper>
    );
}  

export default NotFoundPage
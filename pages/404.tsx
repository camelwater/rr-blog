import FooterComponent from '@components/Footer/Footer';
import NavigationComponent from '@components/Nav/Navigation';
import ErrorComponent from '@components/404/404';
import Head from 'next/head';
import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>404 | RR.</title>
            </Head>
            <NavigationComponent />
            <ErrorComponent />
            <FooterComponent />
        </>
    );
}  

export default NotFoundPage
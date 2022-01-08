import FooterComponent from '@components/Footer/Footer';
import NavigationComponent from '@components/Nav/Navigation';
import ErrorComponent from '@components/404/Error';
import Head from 'next/head';
import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>RR. | 404</title>
            </Head>
            <NavigationComponent />
            <ErrorComponent />
            <FooterComponent />
        </>
    );
}  

export default NotFoundPage
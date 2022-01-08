import NavigationComponent from '@components/Nav/Navigation';
import SmoothScroll from '@components/Scroll';
import FooterComponent from '@components/Footer/Footer';
import BlogCards from '@components/Blog/BlogCards';
import Head from 'next/head';
import React from 'react';
import { getAllBlogsData } from '@utils/blogUtils';
import 'animate.css';

const BlogPage: React.FC<{ blogData }> = ({ blogData }) => {
    return (
        <>
            <Head>
                <title>RR. | Blog</title>
            </Head>
            <SmoothScroll />
            <NavigationComponent />
            <BlogCards data={ blogData } />
            <FooterComponent />
        </>
    );
}

export const getStaticProps = async() => {
    const blogData = getAllBlogsData();
    return {
        props: {
            blogData,
        },
    }
}

export default BlogPage
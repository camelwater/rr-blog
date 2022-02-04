import FooterComponent from '@components/Footer/Footer';
import NavigationComponent from '@components/Nav/Navigation';
import SmoothScroll from '@components/Scroll';
import { getBlog, getBlogIDs } from '@lib/blogData';
import Head from 'next/head';
import React from 'react';
import BlogPost from '@components/Blog/Post/BlogPost';
import 'animate.css/animate.min.css';

const BlogPage: React.FC<{  blogData }> = ({ blogData }) => {

    return (
        <>
            <Head>
                <title>RR. | {blogData.title}</title>
            </Head>
            <SmoothScroll />
            <NavigationComponent />
            <BlogPost blogData={blogData} />
            <FooterComponent />
        </>
    );
} 

export const getStaticPaths = async() => {
    const paths = getBlogIDs();

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async({ params }: { params: { slug: string } }) => {
    const blogData = await getBlog(params.slug);
    return {
        props: {
            blogData
        }
    }
}

export default BlogPage
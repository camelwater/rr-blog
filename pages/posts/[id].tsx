import FooterComponent from '@components/Footer/Footer';
import NavigationComponent from '@components/Nav/Navigation';
import SmoothScroll from '@components/Scroll';
import { getBlog, getBlogIDs } from '@utils/blogUtils';
import Head from 'next/head';
import React from 'react';
import BlogPost from '@components/Blog/Post/BlogPost';

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

export const getStaticProps = async({ params }: { params: { id: string } }) => {
    const blogData = await getBlog(params.id);
    return {
        props: {
            blogData
        }
    }
}

export default BlogPage
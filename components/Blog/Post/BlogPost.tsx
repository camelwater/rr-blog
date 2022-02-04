import React from 'react';
import * as Theme from './BlogPost.theme';
import { TableOfContents, trimHeader, getHeaderID } from '@components/TableOfContents';
import * as Icons from 'react-icons/fi';
// import { getMDXComponent } from 'mdx-bundler/client';

import { MDXRemote } from 'next-mdx-remote';
import ScrollAnimation from 'react-animate-on-scroll';
import { InfoCardComponent, CheckCardComponent, CodeBlock, ImageComponent } from './ReusableComponents';
import {
    H2,
    H3,
    H4
} from './BlogPost.theme';
import Progress from './Progress';
import Link from 'next/link';
import Image from 'next/image';

const Header2 = props => (
    <H2 id={getHeaderID(props.children)}>
        {trimHeader(props.children)}
    </H2>
)

const Header3 = props => (
    <H3 id={getHeaderID(props.children)}>
        {trimHeader(props.children)}
    </H3>
)

const Header4 = props => (
    <H4 id={getHeaderID(props.children)}>
        {trimHeader(props.children)}
    </H4>
)

const mdxComponents = {
    h2: Header2,
    h3: Header3,
    h4: Header4,
    // img: ImageComponent,
    code: CodeBlock,
    InfoCardComponent,
    CheckCardComponent,
};


const BlogPost: React.FC<{ blogData }> = ({ blogData }) => {
    // const MDXComponent = getMDXComponent(blogData.code);

    return (
        <Theme.Container>
            <Progress />
            <Theme.HeaderContainer>
                <Theme.HeaderInnerContainer>
                    <Theme.TitleContainer>
                        <Link href='/posts' passHref={true}>
                            <Theme.Return>
                                <Theme.ReturnSVG><Icons.FiArrowLeft /></Theme.ReturnSVG>
                                <Theme.ReturnText>{' Posts'}</Theme.ReturnText>
                            </Theme.Return>
                        </Link>
                        <ScrollAnimation
                            animateOnce={true}
                            animateIn='animate__flipInX'
                            delay={150}
                        >
                            <Theme.TitleText>
                                {blogData.title}
                            </Theme.TitleText>
                        </ScrollAnimation>
                        {blogData.subTitle && 
                            <ScrollAnimation
                                animateOnce={true}
                                animateIn='animate__flipInX'
                                delay={250}
                            >
                                <Theme.SubTitle>
                                    {blogData.subTitle}
                                </Theme.SubTitle>
                            </ScrollAnimation>
                        }
                    </Theme.TitleContainer>
                    <Theme.InfoContainer>
                        <Theme.TopicsContainer>
                            {
                                blogData.topics.map((topic, index) => (
                                    <Theme.Topic key={index}>
                                        <Theme.TopicText>{topic.trim()}</Theme.TopicText>
                                    </Theme.Topic>
                                ))
                            }
                        </Theme.TopicsContainer>
                        <Theme.BottomInfoContainer>
                            <Theme.BottomInfoText variant='first'>
                                <Icons.FiClock />
                                &nbsp;{blogData.readingTime} min
                            </Theme.BottomInfoText>
                            <Theme.BottomInfoText variant='last'>
                                <Icons.FiCalendar />
                                &nbsp;{blogData.date}
                            </Theme.BottomInfoText>
                        </Theme.BottomInfoContainer>
                    </Theme.InfoContainer>
                </Theme.HeaderInnerContainer>
            </Theme.HeaderContainer>
            <Theme.ContentContainer>
                <Theme.AbstractPostContainer>
                    <Theme.PostContainer>
                        <MDXRemote {...blogData.code} components={mdxComponents} />
                        {/* <MDXComponent components={mdxComponents}/> */}
                    </Theme.PostContainer>
                </Theme.AbstractPostContainer>
                <Theme.TableContentsContainer>
                    <TableOfContents textSource={blogData.rawContent}/>
                </Theme.TableContentsContainer>
            </Theme.ContentContainer>
        </Theme.Container>
    );
}

export default BlogPost
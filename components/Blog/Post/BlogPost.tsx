import React from 'react';
import * as Theme from './BlogPost.theme';
// import TableOfContentsComponent from '@components/TableOfContents';
import * as Icons from 'react-icons/fi';
import { MDXRemote } from 'next-mdx-remote';
import ScrollAnimation from 'react-animate-on-scroll';
// import ReactMarkdown from 'react-markdown';

import { InfoCardComponent, CheckCardComponent } from './ReusableComponents';


const mdxComponents = {
    InfoCardComponent,
    CheckCardComponent
};


const BlogPost: React.FC<{ blogData }> = ({ blogData }) => {
    
    const topicList = blogData.topics.split(",");

    return (
        <Theme.Container>
            <Theme.HeaderContainer>
                <Theme.HeaderInnerContainer>
                    <ScrollAnimation
                        animateOnce={true}
                        animateIn='animate__flipInX'
                        delay={200}
                    >
                        <Theme.TitleText>
                            {blogData.title}
                        </Theme.TitleText>
                    </ScrollAnimation>
                    <Theme.InfoContainer>
                        <Theme.TopicsContainer>
                            {
                                topicList.map((topic, index) => (
                                    <Theme.Topic key={index} variant={index==0?'first':'rest'}>
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
                        <MDXRemote {...blogData.content} components={mdxComponents} />
                    </Theme.PostContainer>
                </Theme.AbstractPostContainer>
                {/* <Theme.TableContentsContainer>
                    <TableOfContentsComponent items={blogData.}
                </Theme.TableContentsContainer> */}
            </Theme.ContentContainer>
        </Theme.Container>
    );
}

export default BlogPost
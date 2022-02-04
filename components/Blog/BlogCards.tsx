import { Divider } from '@components/SharedComponents';
import React from 'react';
import * as Theme from './BlogCards.theme';
import BlogCard from './BlogCard';
import ScrollAnimation from 'react-animate-on-scroll';

const BlogCards: React.FC<{ data }> = ({ data }) => {

    return (
        <Theme.Container>
            <Theme.BlogsContainer>
                <Theme.HeaderContainer>
                    <Theme.HeaderText>
                        Blog Posts
                    </Theme.HeaderText>
                    <Theme.DescText>
                        My writing; my thoughts
                    </Theme.DescText>
                </Theme.HeaderContainer>
                <Divider />
                <Theme.CardsContainer>
                    {data.map((blog, index) => (
                        <ScrollAnimation
                            animateIn='animate__slideInUp'
                            animateOnce={true}
                            animatePreScroll={false}
                            duration={0.5}
                            // delay={150*index}
                            key={index}
                        >
                            <BlogCard
                                key={index}
                                id={blog.id}
                                title={blog.title}
                                subTitle={blog.subTitle}
                                readingTime={blog.readingTime}
                                date={blog.date}
                                description={blog.description}
                                img={blog.img}
                                topics={blog.topics}
                            />
                        </ScrollAnimation>
                    ))}
                </Theme.CardsContainer>
            </Theme.BlogsContainer>
        </Theme.Container>
    );
}

export default BlogCards
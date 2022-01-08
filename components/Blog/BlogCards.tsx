import { Divider } from '@components/SharedComponents';
import React from 'react';
import * as Theme from './BlogCards.theme';
import BlogCard from './BlogCard';


const BlogCards: React.FC<{ data }> = ({ data }) => {

    return (
        <Theme.Container>
            <Theme.BlogsContainer>
                <Theme.HeaderContainer>
                    <Theme.HeaderText>
                        Blog Posts
                    </Theme.HeaderText>
                    <Theme.DescText>
                        My collection of blog posts
                    </Theme.DescText>
                </Theme.HeaderContainer>
                <Divider />
                <Theme.CardsContainer>
                        {data.map((blog, index) => (
                            <BlogCard
                                key={index}
                                id={blog.id}
                                title={blog.title}
                                readingTime={blog.readingTime}
                                date={blog.date}
                                description={blog.description}
                                img={blog.img}
                                topics={blog.topics}
                            />
                        ))}
                </Theme.CardsContainer>
            </Theme.BlogsContainer>
        </Theme.Container>
    );
}

export default BlogCards
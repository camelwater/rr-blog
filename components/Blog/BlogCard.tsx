import React from 'react';
import * as Theme from './BlogCard.theme';
import * as Icons from 'react-icons/fi';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

type Card = {
    id: string,
    title: string,
    readingTime: number,
    date: string,
    description: string,
    img: string
    topics: string
}
export const BlogCard: React.FC<Card> = ({
    id, 
    title,
    readingTime,
    date,
    description,
    img,
    topics
}) => {
    const topicList = topics.split(",");
    const imgSrc = '/assets/' + img;

    return (
        <ScrollAnimation
            animateIn='animate__slideInUp'
            animateOnce={true}
            animatePreScroll={false}
            duration={0.5}
        >
            <Link href={`/posts/${id}`} passHref={true}>
                <Theme.CardLink>
                    <Theme.Card>
                        <Theme.ImgContainer>
                            <Theme.StyledImage
                                src={imgSrc}
                                alt={img}
                            />
                        </Theme.ImgContainer>
                        <Theme.TextContainer>
                            <Theme.InfoContainer>
                                <Theme.TitleText>{title}</Theme.TitleText>
                                <Theme.Description>{description}</Theme.Description>
                            </Theme.InfoContainer>
                            <Theme.BottomContainer>
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
                                        &nbsp;{readingTime} min
                                    </Theme.BottomInfoText>
                                    <Theme.BottomInfoText variant='last'>
                                        <Icons.FiCalendar />
                                        &nbsp;{date}
                                    </Theme.BottomInfoText>
                                </Theme.BottomInfoContainer>
                            </Theme.BottomContainer>
                        </Theme.TextContainer>
                    </Theme.Card>
                </Theme.CardLink>
            </Link>
        </ScrollAnimation>
    );
}

export default BlogCard
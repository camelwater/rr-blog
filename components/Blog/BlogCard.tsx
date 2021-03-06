import React from 'react';
import * as Theme from './BlogCard.theme';
import * as Icons from 'react-icons/fi';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

type Card = {
    id: string,
    title: string,
    subTitle: string,
    readingTime: number,
    date: string,
    description: string,
    img: string
    topics: [string]
}
export const BlogCard: React.FC<Card> = ({
    id, 
    title,
    subTitle,
    readingTime,
    date,
    description,
    img,
    topics
}) => {
    const imgSrc = '/assets/images/' + img;
    topics.sort();

    return (
        <Theme.CardContainer>
            <Link href={`/posts/${id}`} passHref={true}>
                <Theme.CardLink>
                    <Theme.Card>
                        {img &&
                            <Theme.ImgContainer>
                                <Theme.InnerImgContainer>
                                    <Theme.StyledImage
                                        src={imgSrc}
                                        alt={img}
                                    />
                                    <Theme.ImageHoverDarken />
                                </Theme.InnerImgContainer>
                            </Theme.ImgContainer>
                        }   
                        <Theme.TextContainer>
                            <Theme.InfoContainer>
                                <Theme.TitleText>{title}</Theme.TitleText>
                                {subTitle && 
                                    <Theme.SubTitle>{subTitle}</Theme.SubTitle>
                                }
                                <Theme.Description>{description}</Theme.Description>
                            </Theme.InfoContainer>
                            <Theme.BottomContainer>
                                <Theme.TopicsContainer>
                                    {
                                        topics.map((topic, index) => (
                                            <Theme.Topic key={index}>
                                                <Theme.TopicText>{topic.trim()}</Theme.TopicText>
                                            </Theme.Topic>
                                        ))
                                    }
                                </Theme.TopicsContainer>
                                <Theme.BottomInfoContainer>
                                    <Theme.BottomInfoText>
                                        <Icons.FiClock />
                                        &nbsp;{readingTime} min
                                    </Theme.BottomInfoText>
                                    <Theme.BottomInfoText>
                                        <Icons.FiCalendar />
                                        &nbsp;{date}
                                    </Theme.BottomInfoText>
                                </Theme.BottomInfoContainer>
                            </Theme.BottomContainer>
                        </Theme.TextContainer>
                    </Theme.Card>
                </Theme.CardLink>
            </Link>
        </Theme.CardContainer>
    );
}

export default BlogCard
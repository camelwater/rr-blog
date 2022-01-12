import React from 'react';
import * as Theme from './BlogPost.theme';
// import TableOfContentsComponent from '@components/TableOfContents';
import * as Icons from 'react-icons/fi';
import { MDXRemote } from 'next-mdx-remote';
// import ReactMarkdown from 'react-markdown';
import { 
    H1,
    H2,
    H3,
    P,
    A,
    IMG,
    TopicText
} from './BlogPost.theme';
import { InfoCardComponent } from './ReusableComponents';


const mdxComponents = { 
    H1,
    H2,
    H3,
    P,
    A,
    IMG,
    InfoCardComponent
};

const infoContent = `
hello my name is ryan
whatare you doing
asdasd
;lksjda;lskdoiwquepoiuep18u938472093487203948upsldkh asdj haskldjhp2383 p2o3iy
asldkjasl;dkj l;aksdj al;sdkj as;lkdj adskj o2i34u 4kj ;lwkdj ;lekdj ldfkj s;dlfkjs ;dlkfjsd; flksjd fslkdfj s;ldkfj sld;kfj s;dlkfjs ;dlkfjs ;dlkfjs ;dlfkjs ;dlfkjs d;lfkjs df;lksjdf s;lkdfj s;ldkfj sd;lfkj s;dlkfjs dlfkjs d;lfkj sdlfkjsd; lfkjsf 
`


const BlogPost: React.FC<{ blogData }> = ({ blogData }) => {
    
    const topicList = blogData.topics.split(",");

    return (
        <Theme.Container>
            <Theme.HeaderContainer>
                <Theme.HeaderInnerContainer>
                    <Theme.TitleText>
                        {blogData.title}
                    </Theme.TitleText>
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
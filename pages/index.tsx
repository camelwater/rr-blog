import Head from 'next/head';
import { ContentWrapper } from '@styles/stitches.config';
import 'animate.css/animate.min.css';
import HomeComponent from '@components/HomePage/Home/Home';
import DescriptionComponent from '@components/HomePage/Description/Description';
import NavigationComponent from '@components/Nav/Navigation';
import FooterComponent from '@components/Footer/Footer';
import SmoothScroll from '@components/Scroll';
import getAllBlogImages from '@utils/getAllBlogImages';


const HomePage: React.FC<{ allImages }> = ({ allImages }) => {

  return (
    <ContentWrapper>
      <Head>
        <title>RR.</title>
      </Head>
      <SmoothScroll />
      <NavigationComponent isHome/>
      <HomeComponent images={allImages}/>
      <DescriptionComponent />
      <FooterComponent />
    </ContentWrapper>
  );
}

export const getStaticProps = () => {
  const allImages = getAllBlogImages();
  return {
      props: {
          allImages
      }
  }
}

export default HomePage
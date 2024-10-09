import About from "../modules/home/about/About";
import ExclusivePosts from "../modules/home/Exclusive posts/ExclusivePosts";
import Faq from "../modules/home/faq/Faq";
import FeaturedStories from "../modules/home/featured items/FeaturedStories";
import LatestPosts from "../modules/home/Latest posts/LatestPosts";
import SubscribeSection from "../modules/home/newsletter/SubscribeSection";
import TopAuthors from "../modules/home/top authors/TopAuthors";

const Page = () => {
  return (
    <>
      {/* <Banner /> */}
      <FeaturedStories />
      <About />
      <ExclusivePosts />
      <TopAuthors />
      <LatestPosts />
      <Faq />
      <SubscribeSection />
    </>
  );
};

export default Page;

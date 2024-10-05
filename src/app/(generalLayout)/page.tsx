import About from "../modules/home/about/About";
import Banner from "../modules/home/banner/Banner";
import ExclusivePosts from "../modules/home/Exclusive posts/ExclusivePosts";
import FeaturedPosts from "../modules/home/featured items/FeaturedPosts";
import TopAuthors from "../modules/home/top authors/TopAuthors";

const Page = () => {
  return (
    <>
      <Banner />
      <FeaturedPosts />
      <About />
      <ExclusivePosts />
      <TopAuthors />
    </>
  );
};

export default Page;

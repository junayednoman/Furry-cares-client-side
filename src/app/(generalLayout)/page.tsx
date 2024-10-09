import { Suspense } from "react";
import About from "../modules/home/about/About";
import ExclusivePosts from "../modules/home/Exclusive posts/ExclusivePosts";
import Faq from "../modules/home/faq/Faq";
import FeaturedStories from "../modules/home/featured items/FeaturedStories";
import LatestPosts from "../modules/home/Latest posts/LatestPosts";
import SubscribeSection from "../modules/home/newsletter/SubscribeSection";
import TopAuthors from "../modules/home/top authors/TopAuthors";

import BannerSkeleton from "./skeletons/BannerSkeleton";
import Banner from "../modules/home/banner/Banner";
import AuthorsSkeleton from "./skeletons/AuthorsSkeleton";

const Page = () => {
  return (
    <>
      <Suspense fallback={<BannerSkeleton />}>
        <Banner />
      </Suspense>
      <FeaturedStories />
      <About />
      <ExclusivePosts />
      <Suspense fallback={<AuthorsSkeleton />}>
        <TopAuthors />
      </Suspense>
      <LatestPosts />
      <Faq />
      <SubscribeSection />
    </>
  );
};

export default Page;

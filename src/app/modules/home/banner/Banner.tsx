import FContainer from "@/components/ui/Container";
import BannerCarousel from "./BannerCarousel";
import ClassicPostsCard from "@/components/ui/ClassicPostCard";
import getFeaturedPosts from "@/services/posts";

const Banner = async () => {
  const posts = await getFeaturedPosts("/posts?sort=-votes");
  console.log("posts, ", posts);

  return (
    <div className="pt-10 overflow-hidden">
      <FContainer>
        <div className="grid xl:grid-cols-5 grid-cols-1 md:gap-6 gap-4">
          <div className="xl:col-span-3">
            <BannerCarousel posts={posts?.data?.slice(0, 3)} />
          </div>
          <div className="xl:col-span-2 grid xl:grid-cols-1 xl:gap-0 md:gap-6 gap-4 lg:grid-cols-2 grid-cols-1 xl:space-y-6">
            <ClassicPostsCard post={posts?.data[3]} />
            <ClassicPostsCard post={posts?.data[4]} />
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default Banner;

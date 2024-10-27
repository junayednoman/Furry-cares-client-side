import FContainer from "@/components/ui/Container";
import BannerCarousel from "./BannerCarousel";
import ClassicPostsCard from "@/components/ui/ClassicPostCard";
import getFeaturedPosts from "@/services/posts";
import BannerSkeleton from "@/app/(generalLayout)/skeletons/BannerSkeleton";

const Banner = async () => {
  const posts = await getFeaturedPosts("/posts?sort=-votes");
  const postData = posts?.data?.result;

  return (
    <div className="pt-8 overflow-hidden">
      <FContainer>
        {!postData || postData?.length < 1 ? (
          <BannerSkeleton />
        ) : (
          <div className="flex xl:flex-row flex-col md:gap-6 gap-4">
            <div className="xl:w-[64%] w-full">
              <BannerCarousel posts={postData?.slice(0, 3)} />
            </div>
            <div className="xl:w-[36%] w-full grid xl:grid-cols-1 xl:gap-0 md:gap-6 gap-4 sm:grid-cols-2 grid-cols-1 xl:space-y-6">
              <ClassicPostsCard post={postData[3]} />
              <ClassicPostsCard post={postData[4]} />
            </div>
          </div>
        )}
      </FContainer>
    </div>
  );
};

export default Banner;

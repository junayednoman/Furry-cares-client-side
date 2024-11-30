import Image from "next/image";
import getFeaturedPosts from "@/services/posts";
import { TPost } from "@/types/post.type";
import SidebarHeading from "@/components/ui/SidebarHeading";
import adImage from "@/assets/demo-sponsored-0006.jpg";
import SubscribeNewsletter from "./SubscribeNewsletter";
import MiniPostCard from "@/components/ui/MiniPostCard";

const FeedSidebar = async () => {
  const posts = await getFeaturedPosts("/posts?sort=-votes&limit=4");
  const postData = posts?.data?.result;
  return (
    <>
      <div>
        <SidebarHeading heading="Sponsored" />
        <Image
          src={adImage}
          width={320}
          height={320}
          alt="ad"
          className="rounded-md mt-2 max-w-full"
        />
      </div>

      {/* <div className="w-full h-[1px] bg-gray mt-6"></div> */}
      <div className="mt-8">
        <SidebarHeading heading="Featured Posts" />
        {postData?.map((item: TPost, i: number) => (
          <MiniPostCard index={i} key={item._id} post={item} />
        ))}
      </div>
      <div className="sticky md:top-8 top-4 left-0">
        <SubscribeNewsletter />
      </div>
    </>
  );
};

export default FeedSidebar;

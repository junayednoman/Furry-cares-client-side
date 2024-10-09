"use client";
import BannerCarouselCard from "@/components/ui/BannerCarouselCard";
import { TPost } from "@/types/post.type";
import { Carousel } from "antd";

const BannerCarousel = ({ posts }: { posts: TPost[] }) => {
  console.log("posts, ", posts);
  return (
    <Carousel
      dots={true}
      arrows={true}
      autoplay={true}
      infinite={true}
      draggable={true}
    >
      {posts.map((post) => (
        <div key={post._id}>
          <BannerCarouselCard
            heading={post.title}
            imageUrl={post.thumbnail}
            category={post.category}
            isPremium={post.isPremium}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;

"use client";
import BannerCarouselCard from "@/components/ui/BannerCarouselCard";
import { TPost } from "@/types/post.type";
import { Carousel } from "antd";

const BannerCarousel = ({ posts }: { posts: TPost[] }) => {
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
          <BannerCarouselCard post={post} />
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;

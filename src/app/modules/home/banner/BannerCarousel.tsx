"use client";
import BannerCarouselCard from "@/components/ui/BannerCarouselCard";
import { Carousel } from "antd";

const BannerCarousel = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <Carousel arrows={true} autoplay={true} afterChange={onChange}>
      <div>
        <BannerCarouselCard
          heading="Ultimate guide to finding the perfect furry"
          imageUrl="https://img.freepik.com/free-photo/view-cats-dogs-showing-friendship_23-2151806296.jpg?t=st=1728090587~exp=1728094187~hmac=83c47a9605c4f996325d65136f7600cfc2400a4052c3ded9b8da22c6f2065d32&w=1380"
          tag="Tips"
        />
      </div>
      <div>
        <BannerCarouselCard
          heading="A golden retriever and a cat sitting in a flower garden,"
          imageUrl="https://img.freepik.com/free-photo/view-cats-dogs-showing-friendship_23-2151806316.jpg?t=st=1728090432~exp=1728094032~hmac=a4452b3436901aa2c670c64d504fded3df2a3746f230056bc0380e0197cca8b2&w=1380"
          tag="Tips"
        />
      </div>
      <div>
        <BannerCarouselCard
          heading="Golden retriever and white kitten cuddling on the grass,"
          imageUrl="https://img.freepik.com/free-photo/view-cats-dogs-showing-friendship_23-2151806315.jpg?t=st=1728090577~exp=1728094177~hmac=719566857696be865e9402cfc613d6ecf9a0d3ea340012891388843f50db1bea&w=1380"
          tag="Tips"
        />
      </div>
    </Carousel>
  );
};

export default BannerCarousel;

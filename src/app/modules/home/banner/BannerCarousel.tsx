"use client";
import BannerCarouselCard from "@/components/ui/BannerCarouselCard";
import { Carousel } from "antd";

const BannerCarousel = () => {
  return (
    <Carousel
      dots={true}
      arrows={true}
      autoplay={true}
      infinite={true}
      draggable={true}
    >
      <div>
        <BannerCarouselCard
          heading="Ultimate guide to finding the perfect furry"
          imageUrl="https://cdn.firstcry.com/education/2023/01/19165304/Names-Of-Pet-Animals-In-English-For-Kids.jpg"
          tag="Tips"
        />
      </div>
      <div>
        <BannerCarouselCard
          heading="Golden retriever and white kitten cuddling on the grass,"
          imageUrl="https://www.petfoodprocessing.net/ext/resources/Articles/2022/03/032922_APPA-Generational-Report_Lead.jpg?height=667&t=1648555654&width=1080"
          tag="Tips"
        />
      </div>
      <div>
        <BannerCarouselCard
          heading="A golden retriever and a cat sitting in a flower garden,"
          imageUrl="https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?cs=srgb&dl=pexels-tranmautritam-2061057.jpg&fm=jpg"
          tag="Tips"
        />
      </div>
    </Carousel>
  );
};

export default BannerCarousel;

import FContainer from "@/components/ui/Container";
import BannerCarousel from "./BannerCarousel";
import ClassicPostsCard from "@/components/ui/ClassicPostCard";

const Banner = () => {
  return (
    <div className="pt-10 overflow-x-hidden">
      <FContainer>
        <div className="grid xl:grid-cols-5 grid-cols-1 md:gap-6 gap-4">
          <div className="xl:col-span-3">
            <BannerCarousel />
          </div>
          <div className="xl:col-span-2 grid xl:grid-cols-1 xl:gap-0 md:gap-6 gap-4 lg:grid-cols-2 grid-cols-1 xl:space-y-6">
            <ClassicPostsCard
              heading="Golden retriever and white kitten cuddling on the grass, cute pet photography"
              imageUrl="
              https://www.foodmanufacture.co.uk/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/foodmanufacture.co.uk/article/2021/09/30/pet-food-processing-how-are-human-and-animal-tastes-converging/12885940-1-eng-GB/Pet-food-processing-how-are-human-and-animal-tastes-converging.jpg"
              tag="Tips"
            />
            <ClassicPostsCard
              heading="Golden retriever and white kitten cuddling on the grass, cute pet photography"
              imageUrl="https://thumbs.dreamstime.com/b/little-girls-dog-lying-floor-smiling-prone-golden-retriever-them-33595883.jpg"
              tag="Tips"
            />
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default Banner;

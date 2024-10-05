import FContainer from "@/components/ui/Container";
import BannerCarousel from "./BannerCarousel";
import ClassicPostsCard from "@/components/ui/ClassicPostCard";

const Banner = () => {
  return (
    <div className="pt-10">
      <FContainer>
        <div className="grid xl:grid-cols-5 grid-cols-1 md:gap-6 gap-4">
          <div className="xl:col-span-3">
            <BannerCarousel />
          </div>
          <div className="xl:col-span-2 grid xl:grid-cols-1 xl:gap-0 md:gap-6 gap-4 lg:grid-cols-2 grid-cols-1 xl:space-y-6">
            <ClassicPostsCard
              heading="Golden retriever and white kitten cuddling on the grass, cute pet photography"
              imageUrl="https://img.freepik.com/free-photo/view-cats-dogs-showing-friendship_23-2151806315.jpg?t=st=1728090577~exp=1728094177~hmac=719566857696be865e9402cfc613d6ecf9a0d3ea340012891388843f50db1bea&w=1380"
              tag="Tips"
            />
            <ClassicPostsCard
              heading="Golden retriever and white kitten cuddling on the grass, cute pet photography"
              imageUrl="https://img.freepik.com/free-photo/view-cats-dogs-showing-friendship_23-2151806315.jpg?t=st=1728090577~exp=1728094177~hmac=719566857696be865e9402cfc613d6ecf9a0d3ea340012891388843f50db1bea&w=1380"
              tag="Tips"
            />
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default Banner;

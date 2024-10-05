import FContainer from "@/components/ui/Container";
import FSectionTitle from "@/components/ui/FSectionTitle";
import VerticalPostCard from "@/components/ui/VerticalPostCard";

const FeaturedPosts = () => {
  return (
    <>
      <div className="md:py-20 py-16 overflow-x-hidden">
        <FContainer>
          <FSectionTitle
            heading="featured posts"
            subHeading="reader's choice"
          />
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-8 gap-6 mt-10">
            <VerticalPostCard
              heading="Golden retriever and white kitten cuddling on the grass, cute pet photography"
              imageUrl="https://fitzroyvet.com.au/wp-content/uploads/sites/17/2023/09/the-benefits-of-exercise-for-your-pet.jpg"
              tag="Tips"
            />
            <VerticalPostCard
              heading="Golden retriever and white kitten cuddling on the grass, cute pet photography"
              imageUrl="https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg"
              tag="Tips"
            />
            <VerticalPostCard
              heading="Golden retriever and white kitten cuddling on the grass, cute pet photography"
              imageUrl="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YBg8pabxDphxNLoM/generated/generated-mk3572w6DjSxal3p.png"
              tag="Tips"
            />
          </div>
        </FContainer>
      </div>
    </>
  );
};

export default FeaturedPosts;

import FeedSidebar from "@/app/modules/sidebar/FeedSidebar";
import FeedContent from "@/app/modules/feed/FeedContent";
import FContainer from "@/components/ui/Container";

const Feed = () => {
  return (
    <div className="md:py-16 py-12 relative">
      <FContainer wide>
        <div className="flex xl:flex-row flex-col xl:gap-12 gap-12">
          <div className="2xl:w-[1750px] xl:w-[1700px] md:w-full sm:w-[400px] w-full mx-auto">
            <FeedContent />
          </div>
          <div className="flex-grow ">
            <FeedSidebar />
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default Feed;

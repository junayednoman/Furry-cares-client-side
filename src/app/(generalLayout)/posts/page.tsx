import FeedSidebar from "@/app/modules/sidebar/FeedSidebar";
import FeedContent from "@/app/modules/feed/FeedContent";
import FContainer from "@/components/ui/Container";
import HorizontalAd from "@/components/ui/HorizontalAd";

const Feed = () => {
  return (
    <div className="md:py-16 py-12 relative">
      <FContainer wide>
        <div className="flex xl:flex-row flex-col xl:gap-12 gap-12">
          <div className="2xl:w-[1750px] xl:w-[1850px] md:w-full sm:w-[400px] w-full">
            <FeedContent />
          </div>
          <div className="flex-grow ">
            <FeedSidebar />
          </div>
        </div>
      </FContainer>

      <FContainer>
        <HorizontalAd
          className="mx-auto"
          link="https://google.com"
          image="https://firebasestorage.googleapis.com/v0/b/eimattro.appspot.com/o/advertisement%2Fimages%2F4c675238-d5f1-42d8-aae2-19de5174f612.png?alt=media"
        />
      </FContainer>
    </div>
  );
};

export default Feed;

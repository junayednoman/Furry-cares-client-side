import FContainer from "@/components/ui/Container";
import RelatedPosts from "@/app/modules/post-details/RelatedPosts";
import PostContent from "@/app/modules/post-details/PostContent";
import FeedSidebar from "@/app/modules/sidebar/FeedSidebar";
import Faq from "@/app/modules/home/faq/Faq";
import HorizontalAd from "@/components/ui/HorizontalAd";

const PostDetails = ({
  params,
}: {
  params: { postId: string; category: string };
}) => {
  const postId = params.postId;

  return (
    <div className="md:pt-20 pt-12">
      <FContainer wide>
        <div className="grid xl:grid-cols-6 grid-cols-1 xl:gap-14 gap-y-12">
          <div className="col-span-4">
            <PostContent postId={postId} />
          </div>
          <div className="col-span-2">
            <FeedSidebar />
          </div>
        </div>
      </FContainer>
      <FContainer>
        {/* display related posts */}
        <RelatedPosts />
        {/* horizontal ad */}
        <div className="-mt-16">
          <HorizontalAd
            className="mx-auto sm:pb-14 pb-8"
            link="https://google.com"
            image="https://firebasestorage.googleapis.com/v0/b/eimattro.appspot.com/o/advertisement%2Fimages%2Fc1f62cda-511e-48b2-b6bd-e3bf7ace512a.gif?alt=media"
          />
        </div>
      </FContainer>
      <Faq />
    </div>
  );
};

export default PostDetails;

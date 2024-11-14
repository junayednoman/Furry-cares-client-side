import FContainer from "@/components/ui/Container";
import RelatedPosts from "@/app/modules/post-details/RelatedPosts";
import PostContent from "@/app/modules/post-details/PostContent";
import envConfig from "@/config";
import FeedSidebar from "@/app/modules/sidebar/FeedSidebar";
import Faq from "@/app/modules/home/faq/Faq";
import HorizontalAd from "@/components/ui/HorizontalAd";

const PostDetails = ({ params }: { params: { postId: string } }) => {
  const postId = params.postId;
  const postUrl = `${envConfig}/posts/${postId}`;

  return (
    <div className="md:pt-20 pt-12">
      <FContainer wide>
        <div className="grid xl:grid-cols-6 grid-cols-1 xl:gap-12 gap-2">
          <div className="col-span-4">
            <PostContent postUrl={postUrl} postId={postId} />
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
        <div className="-mt-10">
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

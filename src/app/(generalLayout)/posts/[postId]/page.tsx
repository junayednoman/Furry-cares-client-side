"use client";
import FContainer from "@/components/ui/Container";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import HTMLReactParser from "html-react-parser/lib/index";
import Loading from "../../loading";
import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import verifyIcon from "@/assets/verified.png";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";
import { FloatButton } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import { ChevronDown, ChevronUp } from "lucide-react";
import NoData from "@/components/ui/NoData";
import { usePartialUpdate } from "@/hooks/mutation";
import { useUserContext } from "@/context/auth.provider";
import LoginModal from "@/app/modules/profile page/LoginModal";
import spinImg from "@/assets/spin.svg";
import copyIcon from "@/assets/copy-icon.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CommentBox from "@/app/modules/post-details/CommentBox";

const PostDetails = ({ params }: { params: { postId: string } }) => {
  const postId = params.postId;
  const currentPostLink = `http://localhost:3000/posts/${postId}`;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user } = useUserContext();
  const { mutateAsync: updatePostVote, isPending } = usePartialUpdate(
    "update-post-vote",
    `/posts/vote`
  );
  const { data, isLoading, refetch, isError } = useHandleQuery(
    "get-single-post",
    `posts/${postId}`
  );

  useEffect(() => {
    refetch();
  }, [postId, refetch]);

  if (isLoading) {
    return <Loading />;
  }
  if (!data?.data || isError) {
    return (
      <div className="h-[90vh] flex items-center justify-center">
        <NoData />;
      </div>
    );
  }
  const postData = data?.data;

  const handleUpVote = async (voteType: "up" | "down") => {
    if (!user) {
      return setIsLoginModalOpen(true);
    }
    const voteData = {
      postId: postData?._id,
      voteType,
      userId: user?._id,
    };
    await updatePostVote(voteData);
    refetch();
  };

  return (
    <div className="md:p-16 py-10 postDetailPage">
      <FContainer>
        <div className="text-center max-w-[1100px] mx-auto space-y-3">
          <p className="text-gray-400">
            {moment(postData?.createdAt).format("DD MMMM, YYYY")}
          </p>
          <h1 className="md:text-[40px] text-[32px] font-semibold md:leading-[55px] leading-[45px]">
            {postData?.title}
          </h1>
          <div className="flex items-center justify-between md:px-4 px-2">
            <div className="">
              <Link href={`/profile/${postData?.author?._id}`}>
                <div className="flex items-center gap-3 mt-3">
                  <div
                    className="w-[50px] h-[50px] bg-center bg-cover bg-no-repeat rounded-full"
                    style={{
                      backgroundImage: `url(${postData?.author?.profilePicture})`,
                    }}
                  ></div>
                  <div className="text-left">
                    <h4 className="font-semibold">
                      {postData?.author?.name}{" "}
                      {postData?.author?.isVerified && (
                        <span className=" inline-block">
                          <Image
                            className="max-w-[16px] max-h-[16px]"
                            src={verifyIcon}
                            alt="image"
                            width={16}
                            height={16}
                          />
                        </span>
                      )}
                    </h4>
                    <p className="text-sm text-gray-500">
                      <span>Followers: </span>
                      {postData?.author?.followers?.length}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="space-y-0">
              <ChevronUp
                onClick={() => handleUpVote("up")}
                size={30}
                className={` cursor-pointer translate-y-3 hover:text-accentDark duration-300 ${
                  postData?.upVotes?.includes(user?._id)
                    ? "text-accentDark"
                    : "text-text"
                }`}
              />
              <div>
                {isPending ? (
                  <Image
                    width={30}
                    height={30}
                    className="max-w-[25px] max-h-[25px]"
                    src={spinImg}
                    alt="loading"
                  />
                ) : (
                  <p className="font-semibold text-sm">{postData?.votes}</p>
                )}
              </div>
              <ChevronDown
                onClick={() => handleUpVote("down")}
                size={30}
                className={`cursor-pointer -translate-y-2 hover:text-accentDark duration-300 ${
                  postData?.downVotes?.includes(user?._id)
                    ? "text-accentDark"
                    : "text-text "
                }`}
              />
            </div>
          </div>
          <div>
            <Image
              className="w-full rounded-[10px]"
              width={1920}
              height={1080}
              src={postData?.thumbnail}
              alt={postData?.title}
            />
            <p className="text-left mt-3 text-gray-400 md:px-5">
              {postData?.excerpt}
            </p>
          </div>
        </div>
        <div className="max-w-[900px] mx-auto mt-12">
          {HTMLReactParser(postData?.content)}
          {/* comment section */}
          <div className="mt-12">
            <h4 className="font-semibold text-2xl pb-2">Leave your thoughts</h4>
            <CommentBox
              postAuthorId={postData?.author?._id}
              postId={postData?._id}
              commenterId={user?._id}
            />
          </div>
        </div>
      </FContainer>

      {/* Share Buttons */}
      <FloatButton.Group
        trigger="click"
        className="xl:mr-4 -mr-7 xl:bottom-16 md:bottom-8 bottom-5"
        type="primary"
        style={{ insetInlineEnd: 94 }}
        icon={<ShareAltOutlined className="duration-700" />}
        closeIcon={
          <ShareAltOutlined className="-rotate-[180deg] duration-700" />
        }
      >
        <FacebookShareButton
          url={postData?.url}
          className="shadow-lg rounded-full flex"
        >
          <FacebookIcon className="rounded-full shadow-lg" size={35} />
        </FacebookShareButton>
        <TwitterShareButton
          url={postData?.url}
          className="shadow-lg rounded-full flex"
        >
          <TwitterIcon className="rounded-full shadow-lg" size={35} />
        </TwitterShareButton>
        <LinkedinShareButton
          url={postData?.url}
          className="shadow-lg rounded-full flex"
        >
          <LinkedinIcon className="rounded-full shadow-lg" size={35} />
        </LinkedinShareButton>
        <TwitterShareButton
          url={postData?.url}
          className="shadow-lg rounded-full flex"
        >
          <TwitterIcon className="rounded-full shadow-lg" size={35} />
        </TwitterShareButton>
        <WhatsappShareButton
          url={postData?.url}
          className="shadow-lg rounded-full flex"
        >
          <WhatsappIcon className="rounded-full shadow-lg" size={35} />
        </WhatsappShareButton>
        <FacebookMessengerShareButton
          appId="123456789"
          url={postData?.url}
          className="shadow-lg rounded-full flex"
        >
          <FacebookMessengerIcon className="rounded-full shadow-lg" size={35} />
        </FacebookMessengerShareButton>

        <div className="FCardShadow rounded-full cursor-pointer min-w-[33px] min-h-[33px]">
          <CopyToClipboard text={currentPostLink}>
            <Image
              src={copyIcon}
              alt="icon"
              width={33}
              height={33}
              className="rounded-full w-full cursor-pointer"
            />
          </CopyToClipboard>
        </div>
      </FloatButton.Group>

      <div className="gotop">
        <FloatButton.BackTop className="xl:mr-9 lg:mr-0 sm:-mr-1 -mr-1 xl:bottom-16 md:bottom-8 bottom-5" />
      </div>

      {/* login modal */}
      <LoginModal
        isModalOpen={isLoginModalOpen}
        setIsModalOpen={setIsLoginModalOpen}
      />
    </div>
  );
};

export default PostDetails;

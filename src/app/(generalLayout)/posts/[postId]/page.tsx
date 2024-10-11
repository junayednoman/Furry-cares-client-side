"use client";
import FContainer from "@/components/ui/Container";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import HTMLReactParser from "html-react-parser/lib/index";
import Loading from "../../loading";
import Image from "next/image";
import { useEffect } from "react";
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
import { Ellipsis, Share, Share2 } from "lucide-react";
import {
  CommentOutlined,
  CustomerServiceOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const PostDetails = ({ params }: { params: { postId: string } }) => {
  const postId = params.postId;
  const { data, isLoading, refetch } = useHandleQuery(
    "get-single-post",
    `posts/${postId}`
  );

  useEffect(() => {
    refetch();
  }, [postId, refetch]);

  if (isLoading) {
    return <Loading />;
  }

  const postData = data?.data;

  return (
    <div className="md:p-20 py-12 postDetailPage">
      <FContainer>
        <div className="text-center max-w-[1100px] mx-auto md:space-y-8 space-y-5">
          <p className="text-gray-400">
            {moment(postData?.createdAt).format("DD MMMM, YYYY")}
          </p>
          <h1 className="md:text-[40px] text-3xl font-bold">
            {postData?.title}
          </h1>
          <div className="flex items-center justify-between">
            <div>
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
                        <span>
                          <Image
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
            <div className="flex items-center gap-3">
              <h5>Share this post: </h5>
              <div className="flex items-center gap-1"></div>
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
        </div>
      </FContainer>

      <FloatButton.Group
        trigger="click"
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
      </FloatButton.Group>
    </div>
  );
};

export default PostDetails;

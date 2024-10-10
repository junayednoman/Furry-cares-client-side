"use client";
import Followers from "@/app/modules/profile page/Followers";
import Followings from "@/app/modules/profile page/Followings";
import OwnPosts from "@/app/modules/profile page/OwnPosts";
import FContainer from "@/components/ui/Container";
import { Spin, Tabs } from "antd";
import { Calendar, Ellipsis } from "lucide-react";
import Image from "next/image";
import verifyIcon from "@/assets/verified.png";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import { TUser } from "@/types/user.type";
import moment from "moment";
import Loading from "../../loading";
import NoData from "@/components/ui/NoData";
import FButton from "@/components/ui/FButton";
import { usePost } from "@/hooks/mutation";
import { useUserContext } from "@/context/auth.provider";
import UpdateProfileModal from "@/app/modules/profile page/UpdaetProfileModal";
import { useState } from "react";

const ProfilePage = ({ params }: { params: { userId: string } }) => {
  const { user: currentUser } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isFetching, isLoading, isError, refetch } = useHandleQuery(
    "get-profile",
    `/users/user/${params?.userId}`
  );

  const { mutate: handleFollow, isPending: followPending } = usePost(
    "follow",
    `/users/follow`
  );
  const { mutate: handleUnFollow, isPending: unFollowPending } = usePost(
    "follow",
    `/users/unfollow`
  );

  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (isError || !data) {
    return <NoData />;
  }

  const user: TUser = data?.data;
  const followerIds = user?.followers?.map((item: TUser) => {
    const id = item?._id;
    return id;
  });

  const tabsItems = [
    {
      label: "Posts",
      key: "1",
      children: <OwnPosts userId={user._id} />,
    },
    {
      label: "Followers",
      key: "2",
      children: <Followers user={user} />,
    },
    {
      label: "Followings",
      key: "3",
      children: <Followings user={user} />,
    },
  ];

  // handle following
  const handleFollowing = () => {
    handleFollow({ followingId: user?._id });
    refetch();
  };

  const handleUnFollowing = () => {
    handleUnFollow({ unFollowingId: user?._id });
    refetch();
  };

  console.log("lengsit, ", user?.following?.length);

  return (
    <div className="md:py-14 py-3">
      <FContainer>
        <div className="max-w-[850px] mx-auto border border-solid border-slate-200 rounded-t-[8px]">
          <div className="w-full rounded-t-[8px] md:h-[260px] sm:h-[210px] h-[150px] ">
            <div
              className={`bg-cover bg-center bg-no-repeat w-full h-full rounded-t-[10px]`}
              style={{
                backgroundImage: `url(${user?.coverPhoto})`,
              }}
            ></div>
          </div>
          <div className="flex justify-between mt-4 px-4">
            <div className="rounded-full border-[3px] border-white border-solid md:-mt-[93px] -mt-[75px] md:w-[150px] w-[120px] h-[120px] md:h-[150px]">
              <div
                className={`bg-cover bg-center bg-no-repeat w-full h-full rounded-full`}
                style={{
                  backgroundImage: `url(${user?.profilePicture})`,
                }}
              ></div>
            </div>

            <div>
              <div className="flex gap-4 items-center">
                <div className="p-[9px] rounded-full border border-solid border-slate-500 flex items-center justify-center cursor-pointer">
                  <Ellipsis className="text-text" />
                </div>
                {currentUser?._id === user?._id ? (
                  <>
                    <FButton onclick={() => setIsModalOpen(true)}>
                      Edit Profile
                    </FButton>
                    <UpdateProfileModal
                      profile={user}
                      refetch={refetch}
                      setIsModalOpen={setIsModalOpen}
                      isModalOpen={isModalOpen}
                    />
                  </>
                ) : (
                  <Spin spinning={followPending || unFollowPending}>
                    {followerIds.includes(currentUser?._id as string) ? (
                      <FButton onclick={handleUnFollowing}>Unfollow</FButton>
                    ) : (
                      <FButton onclick={handleFollowing}>Follow</FButton>
                    )}
                  </Spin>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5 px-4">
            <h3 className="font-bold text-[22px] text-text">
              {user?.name}{" "}
              {user?.isVerified && (
                <span>
                  <Image src={verifyIcon} alt="image" width={20} height={20} />
                </span>
              )}
            </h3>
            <p className="text-gray-500 text-[15px]">
              {user?.role === "user" ? "User" : "Admin"}
            </p>

            <p className="leading-6 mt-3 sm:text-base text-[15px]">
              {user?.bio}
            </p>
            <div className="flex items-center gap-1 mt-4 text-[#b3b3b3]">
              <Calendar size={16} />
              <p className=" text-[#b3b3b3] sm:text-base text-[15px]">
                {moment(user?.createdAt).format("DD MMM, YYYY")}
              </p>
            </div>
            <div className="flex items-center gap-8 mt-1">
              <p className="mt-3 text-[15px]">
                {user?.following?.length}{" "}
                <span className="text-[#b3b3b3]">Followings</span>
              </p>
              <p className="mt-3 text-[15px]">
                {user?.followers?.length}{" "}
                <span className="text-[#b3b3b3]">Followers</span>
              </p>
            </div>
          </div>
          <div className="mt-5">
            <Tabs defaultActiveKey="1" items={tabsItems} />
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default ProfilePage;

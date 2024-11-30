"use client";
import Followers from "@/app/modules/profile page/Followers";
import Followings from "@/app/modules/profile page/Followings";
import OwnPosts from "@/app/modules/profile page/OwnPosts";
import FButton from "@/components/ui/FButton";
import { Tabs } from "antd";
import { Calendar } from "lucide-react";
import Image from "next/image";
import verifyIcon from "@/assets/verified.png";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import Loading from "@/app/(generalLayout)/loading";
import NoData from "@/components/ui/NoData";
import moment from "moment";
import { useEffect, useState } from "react";
import UpdateProfileModal from "@/app/modules/profile page/UpdaetProfileModal";
import { useUserContext } from "@/context/auth.provider";

const ProfilePage = () => {
  const { user: currentUser } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {
    data: postData,
    isFetching,
    isLoading,
    isError,
    refetch,
  } = useHandleQuery("get-my-profile", "/users/my-profile");

  useEffect(() => {
    if (currentUser?._id) {
      refetch();
    }
  }, [currentUser?._id]);

  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (isError || !postData) {
    return <NoData />;
  }

  const user = postData?.data;
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

  return (
    <>
      <div className="max-w-[850px] border border-solid border-slate-200 rounded-t-[8px]">
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
              <FButton onclick={() => setIsModalOpen(true)}>
                Edit Profile
              </FButton>
              <UpdateProfileModal
                refetch={refetch}
                profile={user}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
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

          <p className="leading-6 mt-3 sm:text-base text-[15px]">{user?.bio}</p>
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
    </>
  );
};

export default ProfilePage;

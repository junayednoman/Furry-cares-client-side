import Followers from "@/app/modules/profile page/Followers";
import Followings from "@/app/modules/profile page/Followings";
import OwnPosts from "@/app/modules/profile page/OwnPosts";
import FButton from "@/components/ui/FButton";
import { Tabs } from "antd";
import { Calendar } from "lucide-react";
import Image from "next/image";
import verifyIcon from "@/assets/verified.png";

const ProfilePage = () => {
  const tabsItems = [
    {
      label: "Posts",
      key: "1",
      children: <OwnPosts />,
    },
    {
      label: "Followers",
      key: "2",
      children: <Followers />,
    },
    {
      label: "Followings",
      key: "3",
      children: <Followings />,
    },
  ];

  return (
    <>
      <div className="max-w-[850px] border border-solid border-slate-200 rounded-t-[8px]">
        <div className="w-full rounded-t-[8px] md:h-[260px] sm:h-[210px] h-[150px] ">
          <div
            className={`bg-cover bg-center bg-no-repeat w-full h-full rounded-t-[10px]`}
            style={{
              backgroundImage: `url(https://pbs.twimg.com/profile_banners/463142998/1719544719/1080x360)`,
            }}
          ></div>
        </div>
        <div className="flex justify-between mt-4 px-4">
          <div className="rounded-full border-[3px] border-white border-solid md:-mt-[93px] -mt-[75px] md:w-[150px] w-[120px] h-[120px] md:h-[150px]">
            <div
              className={`bg-cover bg-center bg-no-repeat w-full h-full rounded-full`}
              style={{
                backgroundImage: `url(https://pbs.twimg.com/profile_images/1842556599270801408/1VHvFQ0H_400x400.jpg)`,
              }}
            ></div>
          </div>

          <div>
            <FButton>Edit Profile</FButton>
            {/* <div className="flex gap-4 items-center">
                <div className="p-[9px] rounded-full border border-solid border-slate-500 flex items-center justify-center cursor-pointer">
                  <Ellipsis className="text-text" />
                </div>
                <FButton>Follow</FButton>
              </div> */}
          </div>
        </div>
        <div className="mt-5 px-4">
          <h3 className="font-bold text-[22px] text-text">
            Junayed Noman{" "}
            <span>
              <Image src={verifyIcon} alt="image" width={20} height={20} />
            </span>
          </h3>
          <p className="text-gray-500 text-[15px]">Author</p>

          <p className="leading-6 mt-3 sm:text-base text-[15px]">
            Most censored Millineal by the U.S government‼️International
            activist, Doctor, Researcher, Author, youth leader, entrepreneur,
            follower of Farrakhan✊🏿
          </p>
          <div className="flex items-center gap-1 mt-4 text-[#b3b3b3]">
            <Calendar size={16} />
            <p className=" text-[#b3b3b3] sm:text-base text-[15px]">
              Joined July 2015
            </p>
          </div>
          <div className="flex items-center gap-8 mt-1">
            <p className="mt-3 text-[15px]">
              5524 <span className="text-[#b3b3b3]">Following</span>
            </p>
            <p className="mt-3 text-[15px]">
              3597 <span className="text-[#b3b3b3]">Followers</span>
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

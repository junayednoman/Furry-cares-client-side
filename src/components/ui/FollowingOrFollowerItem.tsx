import { TUser } from "@/types/user.type";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import verifyIcon from "@/assets/verified.png";

const FollowingOrFollowerItem = ({ user }: { user: TUser }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href={`/profile/${user?._id}`}
            className="inline-block h-[60px] w-[60px]"
          >
            <div
              className={`bg-cover bg-center bg-no-repeat w-full h-full rounded-full`}
              style={{ backgroundImage: `url(${user.profilePicture})` }}
            ></div>
          </Link>
          <div>
            <Link href={`/profile/${user?._id}`}>
              <div>
                <h4 className="sm:text-lg text-[17px] font-semibold text-text capitalize">
                  {user?.name}{" "}
                  {user?.isVerified && (
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
                <p className="text-slate-400 capitalize">{user?.designation}</p>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex gap-4 items-center">
            <div className="p-[9px] rounded-full border border-solid border-slate-500 flex items-center justify-center cursor-pointer">
              <Ellipsis className="text-text" />
            </div>
            {/* <div className="sm:block hidden">
              <Spin spinning={followPending || unFollowPending}>
                {user?.followers?.includes(currentUser?._id) ? (
                  <FButton onclick={handleUnFollowing}>Unfollow</FButton>
                ) : (
                  <FButton onclick={handleFollowing}>Followss</FButton>
                )}
              </Spin>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowingOrFollowerItem;

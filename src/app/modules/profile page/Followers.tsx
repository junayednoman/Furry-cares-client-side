import FollowingOrFollowerItem from "@/components/ui/FollowingOrFollowerItem";
import NoData from "@/components/ui/NoData";
import { TUser } from "@/types/user.type";

const Followers = ({ user }: { user: TUser }) => {
  return (
    <>
      {user?.followers?.length < 1 ? (
        <NoData />
      ) : (
        user?.followers?.map((post: TUser, index: number) => (
          <div
            className={`border-b ${
              index === user?.followers?.length - 1 && "border-b-0"
            } border-t-0 border-x-0 border-solid border-slate-200 py-5 ${
              index === 0 && "pt-0"
            } ${index === user?.followers?.length - 1 && "pb-0"} sm:px-6 px-4`}
            key={index}
          >
            <FollowingOrFollowerItem user={post} />
          </div>
        ))
      )}
    </>
  );
};

export default Followers;

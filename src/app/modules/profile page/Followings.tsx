import FollowingOrFollowerItem from "@/components/ui/FollowingOrFollowerItem";
import NoData from "@/components/ui/NoData";
import { TUser } from "@/types/user.type";

const Followings = ({ user }: { user: TUser }) => {
  return (
    <>
      {user?.followings?.length < 1 ? (
        <NoData />
      ) : (
        user?.followings?.map((post: TUser, index: number) => (
          <div
            className={`border-b ${
              index === user?.followings?.length - 1 && "border-b-0"
            } border-t-0 border-x-0 border-solid border-slate-200 py-5 ${
              index === 0 && "pt-0"
            } ${index === user?.followings?.length - 1 && "pb-0"} sm:px-6 px-4`}
            key={index}
          >
            <FollowingOrFollowerItem user={post} />
          </div>
        ))
      )}
    </>
  );
};

export default Followings;

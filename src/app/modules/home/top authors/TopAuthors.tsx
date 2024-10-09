import Heading5 from "@/components/typography/Heading5";
import FContainer from "@/components/ui/Container";
import FSectionTitle from "@/components/ui/FSectionTitle";
import NoData from "@/components/ui/NoData";
import getData from "@/services/posts";
import { TUser } from "@/types/user.type";
import Link from "next/link";

const TopAuthors = async () => {
  const userData = await getData(
    "/users?sort=-followerCount&limit=3&fields=name,profilePicture"
  );

  return (
    <div className="md:py-20 py-16 bg-[#F6FCF6]">
      <FContainer>
        <FSectionTitle
          heading="Top Authors"
          subHeading="Meet the top authors"
        />
        {!userData?.data ? (
          <NoData />
        ) : (
          <div className="grid md:grid-cols-3 grid-cols-1 items-center lg:gap-16 gap-4 mt-10 xl:max-w-[950px] md:w-full w-[85%] mx-auto">
            {userData?.data?.map((author: TUser) => (
              <div
                key={author._id}
                className="text-center FCardShadow rounded-md bg-white"
              >
                <Link href={`/profile/${author._id}`}>
                  <div
                    className={`w-full lg:h-[180px] md:h-[150px] rounded-t-md bg-cover bg-center bg-no-repeat`}
                    style={{ backgroundImage: `url(${author.profilePicture})` }}
                  ></div>
                </Link>
                <div className="p-6">
                  <Link href={`/profile/${author._id}`}>
                    <Heading5>{author.name}</Heading5>
                  </Link>
                  <p className=" mt-1">
                    <span className="font-semibold">Followers:</span>{" "}
                    <span>{author.followers.length}</span>
                  </p>{" "}
                  <p className="text-gray-400 mt-3">{author.designation}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </FContainer>
    </div>
  );
};

export default TopAuthors;

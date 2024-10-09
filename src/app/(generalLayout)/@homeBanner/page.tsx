import FContainer from "@/components/ui/Container";
import ClassicPostsCard from "@/components/ui/ClassicPostCard";
import getFeaturedPosts from "@/services/posts/getFeaturedPosts";
import BannerCarousel from "../../modules/home/banner/BannerCarousel";

const Banner = async () => {
  const posts = await getFeaturedPosts();
  console.log("posts, ", posts);

  // console.log("ppppppppppppp, ", "ppppppppppppp2");
  // if (!posts) {
  //   console.log("ppppppppppppp, ", "ppppppppppppp");
  //   return <p>loading...pppppppppppppppppppppppp</p>;
  // }
  // if (!posts.data) {
  //   console.log("dddddddddddddddd, ", "dddddddddddddddd");
  //   return <p>loading...</p>;
  // }

  return (
    <div className="pt-10 overflow-hidden">
      <FContainer>
        <div className="grid xl:grid-cols-5 grid-cols-1 md:gap-6 gap-4">
          <div className="xl:col-span-3">
            <BannerCarousel posts={posts?.data?.slice(0, 3)} />
          </div>
          <div className="xl:col-span-2 grid xl:grid-cols-1 xl:gap-0 md:gap-6 gap-4 lg:grid-cols-2 grid-cols-1 xl:space-y-6">
            <ClassicPostsCard
              heading={posts?.data[3].title}
              imageUrl={posts?.data[3].thumbnail}
              tag={posts?.data[3].category}
            />
            <ClassicPostsCard
              heading={posts?.data[4].title}
              imageUrl={posts?.data[4].thumbnail}
              tag={posts?.data[4].category}
            />
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default Banner;

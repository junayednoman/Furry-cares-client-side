import ManagePosts from "../manage-posts/page";
import PostCategoryChart from "./PostCategoryChart";
import Stats from "./Stats";
import UserGrowth from "./UserGrowth";

const Overview = () => {
  return (
    <section>
      <Stats />
      <div className="flex lg:flex-row flex-col items-center gap-8 mt-16">
        <div className="lg:w-[900px] md:w-[450px] sm:w-[450px] w-[250px]">
          <UserGrowth />
        </div>
        <div className="sm:w-[350px] w-[250px]">
          <PostCategoryChart />
        </div>
      </div>
      <div className="mt-14">
        <ManagePosts />
      </div>
    </section>
  );
};

export default Overview;

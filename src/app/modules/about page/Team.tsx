import FContainer from "@/components/ui/Container";
import FSectionTitle from "@/components/ui/FSectionTitle";
import TeamItem from "./TeamItem";
import { teams } from "@/constant/global.constant";

const Team = () => {
  return (
    <div className="md:py-20 py-16 bg-[#F6FCF6]">
      <FContainer>
        <FSectionTitle
          color="#fff"
          heading="Our Team"
          subHeading="Dedicated professionals"
        />
        <div className="grid md:grid-cols-3 gap-12 xl:w-[900px] mx-auto text-text mt-10">
          {teams.map((item, index) => (
            <TeamItem key={index} data={item} />
          ))}
        </div>
      </FContainer>
    </div>
  );
};

export default Team;

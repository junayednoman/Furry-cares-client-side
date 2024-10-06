import Image from "next/image";
type TTeamItem = {
  data: {
    image: string;
    name: string;
    designation: string;
  };
};
const TeamItem = ({ data }: TTeamItem) => {
  const { image, name, designation } = data || {};
  return (
    <div className="text-center">
      <Image
        width={200}
        height={200}
        className="rounded-full w-[200px] mx-auto"
        src={image}
        alt=""
      />
      <h5 className="text-lg font-semibold mt-4">{name}</h5>
      <p className="text-secondaryColor mt-1">{designation}</p>
    </div>
  );
};

export default TeamItem;

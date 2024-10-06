import { Facebook, Linkedin, Twitter } from "lucide-react";
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
      <div className="flex items-center justify-center gap-3 mt-4">
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center duration-300 rounded-full bg-text hover:bg-accent"
        >
          <Linkedin size={20} className="text-white" />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center duration-300 rounded-full bg-text hover:bg-accent"
        >
          <Facebook size={20} className="text-white" />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center duration-300 rounded-full bg-text hover:bg-accent"
        >
          <Twitter size={20} className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default TeamItem;

import DStatCard from "@/components/ui/DStatCard";
import { BookPlus, BookText, CircleDollarSign, Users } from "lucide-react";

const items = [
  {
    title: "Total Revenue",
    number: 34,
    icon: <CircleDollarSign size={30} className="text-3xl text-[#5A66F1]" />,
    color: "#EEEFFE",
    prefix: "$",
  },
  {
    title: "Total Posts",
    number: 654,
    icon: <BookText size={30} className="text-3xl text-[#22C55E]" />,
    color: "#E8F9EF",
  },
  {
    title: "Total Users",
    number: 34,
    icon: <Users size={30} className="text-3xl text-[#60A5FA]" />,
    color: "#EFF6FE",
  },
  {
    title: "Total Authors",
    number: 34,
    icon: <BookPlus size={30} className="text-3xl text-[#fec022]" />,
    color: "#fec02225",
  },
];

const Stats = () => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:gap-6 gap-4">
      {items?.map((item) => (
        <DStatCard key={item?.title} {...item} />
      ))}
    </div>
  );
};

export default Stats;

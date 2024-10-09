import FButton from "@/components/ui/FButton";
import { Divider } from "antd";
import { Check, X } from "lucide-react";

type TFreePlanProps = {
  title: string;
  price: number;
  includings: string[];
  excludings?: string[];
  description?: string;
};

const PricingPlan = ({
  title,
  price,
  includings,
  excludings,
  description,
}: TFreePlanProps) => {
  return (
    <div className="sm:w-[370px] w-full rounded-[10px] border border-solid border-[#00000006] hover:border-accent duration-300 FCardShadow p-5 flex justify-between flex-col">
      <div>
        <h4 className="text-xl font-semibold text-text">{title}</h4>
        <div className="flex items-center gap-1 mt-3">
          <p className="text-4xl font-bold">${price}</p>
          {price > 0 && (
            <>
              <span className="text-text">/</span>
              <p className="text-sm font-semibold">Life Time</p>
            </>
          )}
        </div>
        <div className="mt-4">
          {includings.map((items, index) => (
            <div key={index} className="flex items-center gap-1">
              <span>
                <Check className="text-accent mt-1" size={20} />
              </span>{" "}
              <span className="text-sm text-text"> {items}</span>
            </div>
          ))}
        </div>
        <Divider className="mt-3" />
        {excludings && (
          <>
            <div className="mt-4">
              {excludings?.map((items, index) => (
                <div key={index} className="flex items-center gap-1">
                  <span>
                    <X className="text-red-600 mt-1" size={20} />
                  </span>{" "}
                  <span className="text-sm text-text"> {items}</span>
                </div>
              ))}
            </div>
            <Divider className="mt-3" />
          </>
        )}
        <div className="mt-4">
          <p className="leading-6 text-slate-500 text-[15px]">{description}</p>
        </div>
      </div>
      <div className="my-4">
        <FButton link={`${price > 0 ? "/payment" : "/auth/register"}`} wFull>
          {price > 0 ? "Buy Now" : "Register"}
        </FButton>
      </div>
    </div>
  );
};

export default PricingPlan;

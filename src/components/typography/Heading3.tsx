import { ReactNode } from "react";

const Heading3 = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-white sm:text-3xl text-[26px] sm:leading-[45px] leading-[38px] font-semibold mb-0">
      {children}
    </h2>
  );
};

export default Heading3;

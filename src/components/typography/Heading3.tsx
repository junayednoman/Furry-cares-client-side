import { ReactNode } from "react";

const Heading3 = ({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) => {
  return (
    <h2
      style={{ color: color ? color : "" }}
      className={`text-text lg:text-[27px] md:text-2xl text-[22px] sm:leading-[35px] leading-[30px] font-semibold mb-0`}
    >
      {children}
    </h2>
  );
};

export default Heading3;

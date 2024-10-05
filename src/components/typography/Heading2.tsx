import { ReactNode } from "react";

const Heading2 = ({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) => {
  return (
    <h2
      style={{ color: color ? color : "" }}
      className={`text-text md:text-[40px] text-[27px] md:leading-[45px] leading-[35px] font-semibold mb-0`}
    >
      {children}
    </h2>
  );
};

export default Heading2;

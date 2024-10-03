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
      className={`text-text sm:text-3xl text-[26px] sm:leading-[40px] leading-[36px] font-semibold mb-0`}
    >
      {children}
    </h2>
  );
};

export default Heading3;
